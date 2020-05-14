const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');

// DATA
const seedData = require('../models/seed/meal.js');

// MODEL
const Meal = require('../models/meal.js'); // ./ used for relative path (not node_modules)
const User = require('../models/users.js'); // ./ used for relative path (not node_modules)
const Food = require('../models/food.js'); // ./ used for relative path (not node_modules)

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
  Meal.find({}, async (error, allMeals) => {
    // res.send(allMeals);
    // find the current active user
    const foundUser = await User.findOne({
      // _id: currentUser._id,
      activeSession: true,
    });

    let filteredMeals;

    noMealSelectedIndex = allMeals.findIndex(
      (meal) => meal.name === 'No Meals Selected'
    );

    allMeals.splice(noMealSelectedIndex, 1);

    filteredMeals = allMeals;

    res.render('Meal_Index', { meal: filteredMeals, user: foundUser });
  });
});

// NEW ROUTE
router.get('/new', (req, res) => {
  // res.send('New');

  //const foundUser =
  User.findOne({
    // _id: currentUser._id,
    activeSession: true,
  }).exec(async (error, foundUser) => {
    const proteinItems = await Food.find({ class: 'Protein' });

    const carbohydrateItems = await Food.find({ class: 'Carbohydrate' });

    const vegetableItems = await Food.find({ class: 'Vegetable' });

    const fruitItems = await Food.find({ class: 'Fruit' });

    res.render('Meal_New', {
      user: foundUser,
      proteinItems,
      carbohydrateItems,
      vegetableItems,
      fruitItems,
    });
  });
});

// // MEAL SEED ROUTE
// router.get('/seed', (req, res) => {
//   const mySeed = [
//     {
//       name: 'No Meal Selected',
//       type: 'Infinite',

//       user: '5eb4f132074b980d26f9d6aa',
//     },
//   ];
//   Meal.create(seedData, (err, data) => {
//     res.send(data);
//     console.log(data);
//   });
// });

// Meal SHOW ROUTE
router.get('/:id', (req, res) => {
  Meal.findById(req.params.id)
    .populate({ path: 'protein fruit vegetable carbohydrate', model: 'Food' })
    .exec(async (error, foundMeal) => {
      // find the current active user
      const foundUser = await User.findOne({
        // _id: currentUser._id,
        activeSession: true,
      });

      res.render('Meal_Show', { meal: foundMeal, user: foundUser });
    });
});

// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
  Meal.findById(req.params.id)
    .populate({ path: 'protein fruit vegetable carbohydrate', model: 'Food' })
    .exec(async (error, foundMeal) => {
      // find the current active user
      const foundUser = await User.findOne({
        // _id: currentUser._id,
        activeSession: true,
      });

      const proteinItems = await Food.find({ class: 'Protein' });

      const carbohydrateItems = await Food.find({ class: 'Carbohydrate' });

      const vegetableItems = await Food.find({ class: 'Vegetable' });

      const fruitItems = await Food.find({ class: 'Fruit' });

      res.render('Meal_Edit', {
        meal: foundMeal,
        user: foundUser,
        proteinItems,
        carbohydrateItems,
        vegetableItems,
        fruitItems,
      });
    });
});

/*******************************
 * Functional Routes - perform functions in the browser (http verb)
 * ORDER DOESN'T MATTER BECAUSE DIFF HTTP VERBS
 * Create: Creates a new resources [POST]
 * Delete/Destroy: Deletes a resource [DELETE]
 * Update: Updates a resource [PUT]
 */

// CREATE ROUTE - 5eb69c30633d4e3c95590619
router.post('/', (req, res) => {
  console.log(req.body);

  // create new Meal document using a Model. based on Schema -> Model -> Document
  Meal.create(req.body, (error, createdMeal) => {
    // once created - respond to client with document from database
    console.log(createdMeal);
    res.redirect('/meal');
  });
});

// method override, overrides post route and sends it to this delete route
// DELETE ROUTE
router.delete('/:id', (req, res) => {
  // Meal.findByIdAndRemove(req.params.id, (error, removedMeal) => {
  //   res.redirect('/'); //redirect back to index route
  // }); //remove the item from the array
  Meal.findByIdAndRemove(req.params.id, (error, removedMeal) => {
    res.redirect('/meal'); //redirect back to index route
  });
});

// UPDATE ROUTE
router.put('/:id', (req, res) => {
  // console.log(req.body);

  Meal.findOne({ _id: req.params.id }).exec(async (error, foundMeal) => {
    // console.log(foundMeal);

    const foundUser = await User.findOne({
      activeSession: true,
    });

    if (req.body.protein === '') {
      req.body.protein = '5eb69c30633d4e3c95590619';
    }

    if (req.body.fruit === '') {
      req.body.fruit = '5eb69c30633d4e3c95590619';
    }

    if (req.body.carbohydrate === '') {
      req.body.carbohydrate = '5eb69c30633d4e3c95590619';
    }

    if (req.body.vegetable === '') {
      req.body.vegetable = '5eb69c30633d4e3c95590619';
    }

    req.body.user = foundUser.id;

    // console.log(req.body);

    const updated = await Meal.findByIdAndUpdate(
      req.params.id,
      req.body,
      (error, updatedMeal) => {
        console.log(updatedMeal);
        res.redirect(`/meal/${req.params.id}`);
      }
    );
  });
});

// export the router
module.exports = router;
