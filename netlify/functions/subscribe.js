const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

exports.handler = async (event) => {
  // Handle CORS preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',  // Allows any domain to access
        'Access-Control-Allow-Methods': 'POST, OPTIONS', // Allowed request methods
        'Access-Control-Allow-Headers': 'Content-Type', // Allowed headers
      },
      body: '',
    };
  }

  // Allow only POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { email, ...additionalFields } = JSON.parse(event.body);

    if (!email) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ error: 'Email is required' }),
      };
    }

    // Add subscriber to Mailchimp list with "Subscription Form" tag
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_LIST_ID,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: additionalFields,
        tags: ['Subscription Form'] // Add the tag "Subscription Form" here
      }
    );

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error('Mailchimp API Error:', error);

    // Handle specific Mailchimp errors
    if (error.status === 400 && error.response?.text) {
      const response = JSON.parse(error.response.text);
      if (response.title === 'Member Exists') {
        return {
          statusCode: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ error: 'This email is already subscribed' }),
        };
      }
    }

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Failed to subscribe. Please try again later.' }),
    };
  }
};