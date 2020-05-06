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
const blueprintController = require('./controllers/blueprint.js');
const foodController = require('./controllers/food.js');
const mealController = require('./controllers/meal.js');
const menuController = require('./controllers/menu.js');
const userController = require('./controllers/users.js');

// routes -  when you get to certain route, use this controller
// if begins with /food use foodController to handle the rest of the request
// find remaining match of url in the foodController
// use middleware to access controller

app.use('/blueprint', blueprintController);
app.use('/food', foodController);
app.use('/meal', mealController);
app.use('/menu', menuController);
app.use('/user', userController);

/**********************
 * APP LISTENER
 **********************/

app.listen(PORT, () => {
  console.log('Server Ready on port', PORT);
});
