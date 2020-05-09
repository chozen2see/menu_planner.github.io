const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

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

    res.render('Meal_Index', { meal: allMeals, user: foundUser });
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
  console.log(req.body);

  Meal.findOne({ _id: req.params.id }).exec(async (error, foundMeal) => {
    console.log(foundMeal);

    const foundUser = await User.findOne({
      activeSession: true,
    });

    if (req.body.protein === '') {
      delete req.body.protein;
      delete foundMeal.protein;
    }

    if (req.body.fruit === '') {
      delete req.body.fruit;
      delete foundMeal.fruit;
    }

    if (req.body.carbohydrate === '') {
      delete req.body.carbohydrate;
      delete foundMeal.carbohydrate;
    }

    if (req.body.vegetable === '') {
      delete req.body.vegetable;
      delete foundMeal.vegetable;
    }

    foundMeal = req.body;
    foundMeal.user = foundUser.id;

    // const updatedMeal = await foundMeal.save();
    console.log(foundMeal);

    const updated = await Meal.findByIdAndUpdate(
      req.params.id,
      foundMeal,
      (error, updatedMeal) => {
        console.log(updatedMeal);
        res.redirect(`/meal/${req.params.id}`);
      }
    );
  });

  // if (req.body.protein !== '') {
  //   req.body.protein = mongoose.Types.ObjectId(req.body.protein);
  //   console.log(req.body);
  // }
  // Meal.findByIdAndUpdate(
  //   req.params.id,
  //   req.body,
  //   async (error, updatedMeal) => {
  //     const updatedUser = await updatedMeal.save();

  //     console.log(updatedMeal);
  //     res.redirect(`/meal/${req.params.id}`);
  //   }
  // );

  // const foundMeal =  Meal.findOne()
});

// export the router
module.exports = router;
