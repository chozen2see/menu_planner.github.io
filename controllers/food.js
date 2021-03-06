const express = require('express');
const router = express.Router();

// DATA
const seedData = require('../models/seed/food.js');

// MODEL
const Food = require('../models/food.js'); // ./ used for relative path (not node_modules)
const User = require('../models/users.js'); // ./ used for relative path (not node_modules)

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
  // res.send('food');
  Food.find({}, async (error, allFood) => {
    // res.send(allFood);
    // find the current active user
    const foundUser = await User.findOne({
      // _id: currentUser._id,
      activeSession: true,
    });

    let filteredFood;

    noFoodSelectedIndex = allFood.findIndex(
      (food) => food.name === 'No Food Selected'
    );

    allFood.splice(noFoodSelectedIndex, 1);
    filteredFood = allFood;

    res.render('Food_Index', { food: filteredFood, user: foundUser });
  });
});

// // FOOD SEED ROUTE
// router.get('/seed', (req, res) => {
//   Food.create(seedData, (err, data) => {
//     res.send(data);
//   });
// });

// FOOD SHOW ROUTE
router.get('/:id', (req, res) => {
  Food.findById(req.params.id, async (error, foundFood) => {
    // find the current active user
    const foundUser = await User.findOne({
      // _id: currentUser._id,
      activeSession: true,
    });

    res.render('Food_Show', { food: foundFood, user: foundUser });
  });
});

/*******************************
 * Functional Routes - perform functions in the browser (http verb)
 * ORDER DOESN'T MATTER BECAUSE DIFF HTTP VERBS
 * Create: Creates a new resources [POST]
 * Delete/Destroy: Deletes a resource [DELETE]
 * Update: Updates a resource [PUT]
 */

// SANDBOX ROUTE - SEE DATA ON ALL USERS
router.get('/all/sandbox', (req, res) => {
  Food.find({}, (error, allFood) => {
    res.send(allFood);
  });
});

// export the router
module.exports = router;
