const redis = require('redis');
const client = redis.createClient();

client.on('error', (error) => {
  console.log(`Redis client is not connected to the server: ${error}`);
})
.on('connect', () => {
  console.log('Redis client connected to the server');
});
