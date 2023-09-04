// Student Name: Dathan Dominic Neal
// Student ID: 1218482291
// Date September 4th, 2023

// Import the required modules 
const express = require('express');
const bodyParser = require('body-parser'); 
const path = require('path');
const axios = require('axios'); // Import the Axios package

// Create an instance of express
const app = express();

// We use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

// Render the URL input form
app.get('/', (req, res) => {
    res.render('fetchURL', { response: '' });
  });
  
  // Handle form submission and fetch the URL
  app.post('/fetch-url', async (req, res) => {
    const { url } = req.body;
  
    try {
      // Make an asynchronous HTTP request using Axios
      const response = await axios.get(url);
  
      // Pass the response data to the EJS template
      res.render('fetchURL', { response: JSON.stringify(response.data, null, 2) });
    } catch (error) {
        console.error(error)
      // Handle errors, e.g., invalid URL or network issues
      res.render('fetchURL', { response: 'Couldn\'t Fetch URL' });
    }
  });  
  

var port = 4000;
// Start the server on port 4000 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


