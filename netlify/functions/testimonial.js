const mailchimp = require('@mailchimp/mailchimp_marketing');

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
    const { email, FNAME, LNAME, ROLE, STORY, PROFILEPIC } = JSON.parse(event.body);

    if (!email || !FNAME || !LNAME || !STORY) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Email and required fields missing' })
      };
    }

    const listId = process.env.MAILCHIMP_LIST_ID;
    const subscriberHash = require('crypto').createHash('md5').update(email.toLowerCase()).digest('hex');

    try {
      // Try fetching the existing member
      await mailchimp.lists.getListMember(listId, subscriberHash);

      // If the user exists, update their information
      await mailchimp.lists.updateListMember(listId, subscriberHash, {
        merge_fields: { FNAME, LNAME, ROLE, STORY, PROFILEPIC },
        status_if_new: 'subscribed',
        tags: ['Testimonial Form'] // Add the "Testimonial Form" tag
      });

      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ message: 'Subscriber updated successfully' })
      };
    } catch (error) {
      // If the member does not exist, add them
      if (error.status === 404) {
        const response = await mailchimp.lists.addListMember(listId, {
          email_address: email,
          status: 'subscribed',
          merge_fields: { FNAME, LNAME, ROLE, STORY, PROFILEPIC },
          tags: ['Testimonial Form'] // Add the "Testimonial Form" tag
        });

        return {
          statusCode: 200,
          headers: corsHeaders,
          body: JSON.stringify(response)
        };
      }

      throw error;
    }
  } catch (error) {
    console.error('Mailchimp API Error:', error);

    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Failed to submit testimonial. Please try again later.' })
    };
  }
};