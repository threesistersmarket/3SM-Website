const mailchimp = require('@mailchimp/mailchimp_marketing');
const crypto = require('crypto');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

exports.handler = async (event) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*', // Replace with your frontend domain for security
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: 'CORS preflight successful' })
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const formData = JSON.parse(event.body);
    const listId = process.env.MAILCHIMP_LIST_ID;
    const subscriberHash = crypto.createHash('md5').update(formData.primaryEmail.toLowerCase()).digest('hex');

    try {
      // Check if the email is already subscribed
      await mailchimp.lists.getListMember(listId, subscriberHash);

      // If the user exists, update their information
      await mailchimp.lists.updateListMember(listId, subscriberHash, {
        merge_fields: {
          FNAME: formData.primaryFirstName,
          LNAME: formData.primaryLastName,
          PHONE: formData.phone,
          ADDRESS: formData.address,
          CITY: formData.city,
          STATE: formData.state,
          PAYMENT: formData.paymentOption,
          SFNAME: formData.secondaryFirstName || '',
          SLNAME: formData.secondaryLastName || '',
          SEMAIL: formData.secondaryEmail || '',
          UPDATES: formData.emailUpdates
        },
        status_if_new: 'subscribed',
        tags: ['Ownership Form'] // Add the tag here
      });

      console.log('Subscriber updated successfully');
    } catch (error) {
      if (error.status === 404) {
        // If the email is not found, add as a new subscriber
        await mailchimp.lists.addListMember(listId, {
          email_address: formData.primaryEmail,
          status: 'subscribed',
          merge_fields: {
            FNAME: formData.primaryFirstName,
            LNAME: formData.primaryLastName,
            PHONE: formData.phone,
            ADDRESS: formData.address,
            CITY: formData.city,
            STATE: formData.state,
            PAYMENT: formData.paymentOption,
            SFNAME: formData.secondaryFirstName || '',
            SLNAME: formData.secondaryLastName || '',
            SEMAIL: formData.secondaryEmail || '',
            UPDATES: formData.emailUpdates
          },
        tags: ['Ownership Form'] // Add the tag here
        });

        console.log('New subscriber added');
      } else {
        throw error;
      }
    }

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: 'Ownership form submitted successfully' })
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Failed to submit form. Please try again later.' })
    };
  }
};