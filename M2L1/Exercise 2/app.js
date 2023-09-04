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

// Define an array of book objects
const books = [
    { title: 'Shadow of the Wind', author: 'Carlos Ruiz Zafon', year: 2010 },
    { title: 'Wolves of the Beyond', author: 'Kathryn Lasky', year: 2008 },
    { title: 'Hyrule Historia', author: 'Unknown', year: 2012 },
  ];
  

// The GET route for the form
app.get('/', (req, res) => {

    res.render('books', {books});
});

// Adding a new book
app.post('/add', (req, res) => {
    const { title, author, year } = req.body;
  
    // Create a new book object and add it to the array
    const newBook = { title, author, year };
    books.push(newBook);
  
    // Redirect back to the list of books
    res.redirect('/');
  });

var port = 4000;
// Start the server on port 4000 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


