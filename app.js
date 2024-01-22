const axios = require('axios');

// Replace these with the actual URLs of your service's health APIs
const healthApiUrls = [
  'https://watchmaxbackend.onrender.com/health',
  'https://codetetris.onrender.com/health',
  // 'YOUR_HEALTH_API_URL_3'
];

async function checkServiceHealth(apiUrl) {
  try {
    // Make a GET request to the health API
    const response = await axios.get(apiUrl);

    // Check the response status or any other relevant data
    if (response.status === 200) {
      console.log(`Service at ${apiUrl} is healthy!`);
    } else {
      console.error(`Service at ${apiUrl} is not healthy. Status:`, response.status);
    }
  } catch (error) {
    console.error(`Error checking service health at ${apiUrl}:`, error.message);
  }
}

// Set up an interval to call the health check function for each API every 10 minutes (600,000 milliseconds)
const healthCheckInterval = 10 * 60 * 1000; // 10 minutes in milliseconds

async function runHealthChecks() {
  for (const apiUrl of healthApiUrls) {
    await checkServiceHealth(apiUrl);
  }
}

// Initial call to check service health immediately
runHealthChecks();

// Set up the interval for the health checks
setInterval(runHealthChecks, healthCheckInterval);
