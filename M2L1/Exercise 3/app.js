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

function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

app.get('/', (req, res) => {
    res.render('userForm');
  });

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, age, email } = req.body;
  
    // Create a new user object
    const newUser = new User(name, age, email);
  
    // Pass the destructured user object
    res.render('userDetails', { name, age, email });
  });

var port = 4000;
// Start the server on port 4000 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


