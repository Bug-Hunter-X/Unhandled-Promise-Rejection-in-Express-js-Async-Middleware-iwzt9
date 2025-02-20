const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  doSomethingAsync()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error'); //Proper error handling
    });
});

async function doSomethingAsync() {
  const success = Math.random() < 0.5;
  if (!success) {
    throw new Error('Something went wrong!');
  }
  await new Promise(resolve => setTimeout(resolve, 100));
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});