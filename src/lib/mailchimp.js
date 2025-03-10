import { supabase } from './supabase';

export const addSubscriber = async (email, additionalFields = {}) => {
  try {
    const response = await fetch('/.netlify/functions/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        ...additionalFields
      })
    });
    
    let data;
    try {
      data = await response.json();
    } catch (err) {
      throw new Error('Invalid response from server');
    }
    
    if (!response.ok || data.error) {
      throw new Error(data.error || 'Subscription failed');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Mailchimp subscription error:', error);
    
    if (error.message?.includes('already subscribed')) {
      return { success: false, error: 'This email is already subscribed.' };
    }
    
    return { 
      success: false, 
      error: 'Failed to subscribe. Please try again later.'
    };
  }
};

export const submitOwnershipForm = async (formData) => {
  try {
    const response = await fetch('/.netlify/functions/ownership', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    
    if (!response.ok || data.error) {
      throw new Error(data.error || 'Submission failed');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Ownership form submission error:', error);
    return {
      success: false,
      error: error.message || 'Failed to submit form. Please try again later.'
    };
  }
};

export const submitTestimonial = async (formData) => {
  try {
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.story) {
      throw new Error('Please fill in all required fields');
    }

    // Upload image to Supabase Storage if provided
    let imageUrl = null;
    if (formData.image) {
      const fileExt = formData.image.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError, data } = await supabase.storage
        .from('testimonials')
        .upload(filePath, formData.image);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('testimonials')
        .getPublicUrl(filePath);

      imageUrl = publicUrl;
    }

    const response = await fetch('/.netlify/functions/testimonial', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.email,
        FNAME: formData.firstName,
        LNAME: formData.lastName,
        ROLE: formData.role,
        STORY: formData.story,
        PROFILEPIC: imageUrl
      })
    });

    let data;
    try {
      data = await response.json();
    } catch (err) {
      throw new Error('Invalid response from server');
    }
    
    if (!response.ok || data.error) {
      throw new Error(data.error || 'Failed to submit testimonial');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Testimonial submission error:', error);
    return {
      success: false,
      error: error.message?.includes('already subscribed') 
        ? 'This email is already subscribed.'
        : error.message || 'Failed to submit testimonial. Please try again later.'
    };
  }
};
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.email,
        FNAME: formData.firstName,
        LNAME: formData.lastName,
        PHONE: formData.phone,
        MESSAGE: formData.message,
        TOPIC: formData.topic,
        SOURCE: formData.source
      })
    });

    const data = await response.json();
    
    if (!response.ok || data.error) {
      throw new Error(data.error || 'Submission failed');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      error: 'Failed to submit form. Please try again later.'
    };
  }
};