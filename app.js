const axios = require('axios');

// Replace 'YOUR_HEALTH_API_URL' with the actual URL of your service's health API
const healthApiUrl = 'YOUR_HEALTH_API_URL';

async function checkServiceHealth() {
  try {
    // Make a GET request to the health API
    const response = await axios.get(healthApiUrl);

    // Check the response status or any other relevant data
    if (response.status === 200) {
      console.log('Service is healthy!');
    } else {
      console.error('Service is not healthy. Status:', response.status);
    }
  } catch (error) {
    console.error('Error checking service health:', error.message);
  }
}

// Set up an interval to call the health check function every 10 minutes (600,000 milliseconds)
const healthCheckInterval = 10 * 60 * 1000; // 10 minutes in milliseconds
setInterval(checkServiceHealth, healthCheckInterval);

// Initial call to check service health immediately
checkServiceHealth();
