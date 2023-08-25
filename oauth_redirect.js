// netlify_functions/oauth_redirect.js
exports.handler = async function(event, context) {
  const { queryStringParameters } = event;

  // The auth code from TikTok will be in the query parameters.
  const authCode = queryStringParameters.code;

  // Here you can handle the code - maybe send it to yourself or store it somewhere.
  // For this example, we'll just return it in the response.
  return {
    statusCode: 200,
    body: `Received auth code: ${authCode}`,
  };
};
