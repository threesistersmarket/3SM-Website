import React, { useState } from 'react';
import { IoMail, IoPeople, IoHeart, IoCall } from 'react-icons/io5';
import { submitContactForm } from '../lib/mailchimp';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    source: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setMessage({ type: '', text: '' });

      const { success, error } = await submitContactForm(formData);

      if (!success) throw new Error(error);

      setMessage({ 
        type: 'success', 
        text: 'Thank you for your message! We will get back to you soon.' 
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        source: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage({ 
        type: 'error', 
        text: error.message || 'Failed to submit form. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <div className="mb-8 w-full max-w-lg md:mb-10 lg:mb-12">
              <p className="mb-3 font-semibold md:mb-4">Connect</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Get in Touch
              </h2>
              <p className="md:text-md">We'd love to hear from you!</p>
            </div>
            <form onSubmit={handleSubmit} className="grid max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="grid w-full items-center">
                  <label className="mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-border-primary rounded-lg p-3"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="grid w-full items-center">
                  <label className="mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-border-primary rounded-lg p-3"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="grid w-full items-center">
                  <label className="mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-border-primary rounded-lg p-3"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="grid w-full items-center">
                  <label className="mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-border-primary rounded-lg p-3"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="grid w-full items-center">
                <label className="mb-2">Select a Topic</label>
                <select 
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full border border-border-primary rounded-lg p-3"
                  disabled={loading}
                >
                  <option value="">Choose One...</option>
                  <option value="membership">Membership</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="donations">Donations</option>
                  <option value="supplier">Become a Supplier</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="grid w-full items-center py-3 md:py-4">
                <label className="mb-3 md:mb-4">How did you hear about us?</label>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
                  {[
                    "Friend Referral",
                    "Social Media",
                    "Website Inquiry",
                    "Community Event",
                    "Other Inquiry",
                    "None"
                  ].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={option.toLowerCase().replace(/\s+/g, '-')}
                        name="source"
                        value={option}
                        checked={formData.source === option}
                        onChange={handleChange}
                        className="border-border-primary text-accent-3 focus:ring-accent-3"
                        disabled={loading}
                      />
                      <label htmlFor={option.toLowerCase().replace(/\s+/g, '-')}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid w-full items-center">
                <label className="mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full border border-border-primary rounded-lg p-3"
                  placeholder="Enter your message..."
                  required
                  disabled={loading}
                ></textarea>
              </div>

              {message.text && (
                <div className={`text-sm ${
                  message.type === 'error' ? 'text-red-600' : 'text-green-600'
                }`}>
                  {message.text}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3 hover:bg-accent-3 rounded-lg"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>

          {/* Graphic Section */}
          <div className="hidden lg:block relative">
            <div className="sticky top-24 space-y-8">
              {/* Connection Graphic */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-accent-3">
                <h3 className="text-2xl font-bold mb-6 text-accent-3">Ways to Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent-3/10 rounded-full">
                      <IoMail className="w-8 h-8 text-accent-3" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email Us</h4>
                      <p className="text-sm text-gray-600">Get a response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent-2/10 rounded-full">
                      <IoPeople className="w-8 h-8 text-accent-2" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Visit Us</h4>
                      <p className="text-sm text-gray-600">Meet us in person</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent-1/10 rounded-full">
                      <IoMail className="w-8 h-8 text-accent-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Write Us</h4>
                      <p className="text-sm text-gray-600">Send us a letter</p>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Community Support Card */}
              <div className="bg-background-alternative text-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-full">
                    <IoHeart className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Community Support</h3>
                    <p className="text-sm text-white/80">We're here to help you</p>
                  </div>
                </div>
                <p className="text-white/90">
                  Our team is dedicated to supporting our community members. Whether you have questions about membership, want to volunteer, or need assistance, we're here for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;