const express = require('express');

const app = express();  // Initialize an Express app

const port = 4000;      // Define the port



// Define a route for the root URL

app.get('/', (req, res) => {

  res.send('Hello, Express!');

});



// Start the server

app.listen(port, () => {

  console.log(`Server running at http://localhost:${port}`);

});