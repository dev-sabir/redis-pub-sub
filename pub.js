import Redis from 'ioredis';
const publisher = new Redis();

async function publishMessage() {
  const channel = 'my-channel';
  const message = 'Hello, Redis Pub/Sub!';
  await publisher.publish(channel, message);
  console.log(`Published: ${message}`);
}

publishMessage();