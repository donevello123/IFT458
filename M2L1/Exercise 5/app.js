// Student Name: Dathan Dominic Neal
// Student ID: 1218482291
// Date September 4th, 2023

// Import the required modules 
const express = require('express');
const bodyParser = require('body-parser'); 
const path = require('path');

// Create an instance of express
const app = express();

// We use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

app.get('/asyncEx', async (req, res) => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
    //Delay the script by 3 seconds
    await delay(3000);
  
    // Send JSON response with the result
    res.json({ result: 'Async operation finished.' });
  });
  
  // Render the EJS template
  app.get('/', (req, res) => {
    res.render('asyncEx', { result: '' });
  });
  

var port = 4000;
// Start the server on port 4000 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


