import Redis from "ioredis";
const subscriber = new Redis();

const channel = "my-channel";

subscriber.subscribe(channel, (err, count) => {
  if (err) {
    console.error(`Error subscribing to ${channel}: ${err.message}`);
  } else {
    console.log(`Subscribed to ${count} channel(s) including "${channel}"`);
  }
});

subscriber.on("message", (subscribedChannel, message) => {
  console.log(`Received message from ${subscribedChannel}: ${message}`);
});

subscriber.on("error", (error) => {
  console.error(`Redis error: ${error}`);
});
