const express = require('express');
const router = express.Router();

// DATA
const seedData = require('../models/seed/meal.js');

// MODEL
const Meal = require('../models/meal.js'); // ./ used for relative path (not node_modules)

/*******************************
 * Presentational Routes - routes that show us something in the browser (ALL GET REQUESTS)
 * IF METHOD IS SAME HTTP VERB (GET) THEN ORDER MATTERS
 * Index: Shows a list of all of our resources and has links to New, Edit and Delete
 * New: Shows a form to create a new resource linked to Create
 * 
 * Seed: adds an array of dummy data to app (only run once) before show route
 * 
 * Show: Shows one individual resource from our list
 * Edit: Shows a form to update an individual resouce linked to Update Route

 */

// INDEX ROUTE
router.get('/', (req, res) => {
  Meal.find({}, (error, allMeals) => {
    res.send(allMeals);
    // res.render('Index', { meal: allMeals });
  });
});

// NEW ROUTE
router.get('/new', (req, res) => {
  res.send('New');
  // res.render('New');
});

// // MEAL SEED ROUTE
// router.get('/seed', (req, res) => {
//   Meal.create(seedData, (err, data) => {
//     res.send(data);
//     console.log(data);
//   });
// });

// Meal SHOW ROUTE
router.get('/:id', (req, res) => {
  Meal.findById(req.params.id, (error, foundMeal) => {
    res.send(foundMeal);
    // res.render('Show', { meal: foundMeal });
  });
});

// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
  Meal.findById(req.params.id, (error, foundMeal) => {
    res.send(foundMeal);
    // res.render('Edit', { meal: foundMeal });
  });
});

/*******************************
 * Functional Routes - perform functions in the browser (http verb)
 * ORDER DOESN'T MATTER BECAUSE DIFF HTTP VERBS
 * Create: Creates a new resources [POST]
 * Delete/Destroy: Deletes a resource [DELETE]
 * Update: Updates a resource [PUT]
 */

// CREATE ROUTE
router.post('/', (req, res) => {
  // create new Meal document using a Model. based on Schema -> Model -> Document
  Meal.create(req.body, (error, createdMeal) => {
    // once created - respond to client with document from database
    // res.send(createdMeal);
    res.redirect('/');
  });
});

// method override, overrides post route and sends it to this delete route
// DELETE ROUTE
router.delete('/:id', (req, res) => {
  Meal.findByIdAndRemove(req.params.id, (error, removedMeal) => {
    res.redirect('/'); //redirect back to index route
  }); //remove the item from the array
});

// UPDATE ROUTE
router.put('/:id', (req, res) => {
  Meal.findByIdAndUpdate(req.params.id, req.body, (error, updatedMeal) => {
    res.redirect(`/${req.params.id}`);
  });
});

// export the router
module.exports = router;
