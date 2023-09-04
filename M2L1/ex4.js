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


const fruits = ['Orange', 'Pineapple', 'Strawberry'];

// Spread Operator usage
const newFruit = 'Apple';
const updatedFruits = [...fruits, newFruit];

// Render the list of fruits
app.get('/', (req, res) => {
    res.render('fruits', { fruits: updatedFruits });
  });

var port = 4000;
// Start the server on port 4000 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


