const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(error => {
      console.error('Error:', error);
      // Express.js doesn't automatically handle errors in async middleware
      // Resulting in a 500 error without a proper response sent to the client
    });
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that may fail
  const success = Math.random() < 0.5; // 50% chance of failure
  if (!success) {
    throw new Error('Something went wrong!');
  }
  // Simulate an asynchronous operation
await new Promise(resolve => setTimeout(resolve, 100));
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});