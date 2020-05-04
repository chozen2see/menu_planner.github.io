/**********************
 * VARIABLES
 **********************/

const express = require('express');
const app = express();
const methodOverride = require('method-override');

const PORT = 3000;

/**********************
 * Mongoose Connection
 **********************/

const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/menuplanner';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

/**********************
 * Middleware
 **********************/

// gives us acces to req.body
app.use(express.urlencoded({ extended: false }));

// use method-override. We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method')); // this is the string we will add to action of form to tell methodOverride what method we want to run. no matter what action is says on form, it will override the method using whatever method is added to the form action as a query parameter in Index.jsx

// tells express what type of files to look for in views
// app.set('view engine', 'jsx');
app.set('view engine', 'jsx');

// telling express how to compile our jsx
app.engine('jsx', require('express-react-views').createEngine());

// server any file in public as a static file
app.use(express.static('public'));

/**********************
 * Controller
 **********************/

// controller (must come after middleware)
// --> const fruitsController = require('./controllers/fruits.js');

// routes -  when you get to certain route, use this controller
// if begins with /fruits use fruitsController to handle the rest of the request
// find remaining match of url in the fruitsController
// use middleware to access controller

// --> app.use('/fruits', fruitsController);

/**********************
 * APP LISTENER
 **********************/

app.listen(PORT, () => {
  console.log('Server Ready on port', PORT);
});
