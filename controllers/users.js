const express = require('express');
const router = express.Router();

// JS
// import * as Utils from '../public/js/app.js';
// const Utils = require('../public/js/app.js');

// DATA
const seedData = require('../models/seed/users.js');

// MODEL
const User = require('../models/users.js'); // ./ used for relative path (not node_modules)
const Food = require('../models/food.js'); // ./ used for relative path (not node_modules)
const Meal = require('../models/meal.js'); // ./ used for relative path (not node_modules)
const Menu = require('../models/menu.js'); // ./ used for relative path (not node_modules)

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

// SANDBOX ROUTE - SEE DATA ON ALL USERS
router.get('/sandbox', (req, res) => {
  User.find({}, (error, allUsers) => {
    res.send(allUsers);
    // res.render('Index', { User: allUsers });
  });
});

// NEW ROUTE
router.get('/new', (req, res) => {
  // res.send('New');
  res.render('User_New');
});

// // User SEED ROUTE
// router.get('/seed', (req, res) => {
//   User.create(seedData, (err, data) => {
//     res.redirect('/user/sandbox');
//   });
// });

// // User SHOW ROUTE
// router.get('/:id', (req, res) => {
//   User.findById(req.params.id, (error, foundUser) => {
//     // res.send(foundUser);
//     res.render('User_Show', { user: foundUser });
//   });
// });

// USER MENU PLANNER SHOW ROUTE
router.get('/menu_planner/:userId', (req, res) => {
  const userId = req.params.userId;
  const filter = req.query.filter;

  User.findById(userId)
    .populate({
      path: 'blueprint',
      populate: {
        path: 'body_type',
        model: 'BodyType',
      },
    })
    .exec(async (error, foundUser) => {
      let filteredFood;
      try {
        const foodItems = await Food.find({}, (error, foodItems) => {
          // console.log(foodItems);
          if (filter && filter !== 'ALL') {
            filteredFood = foodItems.filter((food) => {
              // true will add food to filteredfood
              return food.class === filter && food.name !== 'No Food Selected';
              //
            });
          } else {
            noFoodSelectedIndex = foodItems.findIndex(
              (food) => food.name === 'No Food Selected'
            );
            // console.log(foodItems.length);
            // console.log(foodItems[noFoodSelectedIndex]);
            foodItems.splice(62, 1);

            // foodItems.sort(Utils.nameByAlpha);
            filteredFood = foodItems;
          }
        });
      } catch (error) {
        console.log(error);
      }

      const menuItems = await Menu.find(
        { user: userId },
        (error, menuItems) => {
          // console.log(menuItems);
        }
      );

      const mealItems = await Meal.find(
        { user: userId },
        (error, mealItems) => {
          // console.log(mealItems);
          filteredMeal = mealItems.filter((meal) => {
            // true will add food to filteredfood
            return meal.name !== 'No Meal Selected';
            //
          });
        }
      );

      // console.log(foundUser);
      res.render('User_Index', {
        user: foundUser,

        food: filteredFood, //foodItems,
        menu: menuItems,
        meal: filteredMeal,
        filter,
      });
    });
});

// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id)
    .populate({
      path: 'blueprint',
      populate: {
        path: 'body_type',
        model: 'BodyType',
      },
    })
    .exec(async (error, foundUser) => {
      // res.send(foundUser);
      res.render('User_Edit', { user: foundUser });
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
  // create new User document using a Model. based on Schema -> Model -> Document
  User.create(req.body, (error, createdUser) => {
    // once created - respond to client with document from database
    // res.send(createdUser);
    res.redirect('/user/sandbox');
  });
});

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (error, removedUser) => {
    res.redirect('/user/sandbox'); //redirect back to index route
  }); //remove the item from the array
});

// UPDATE ROUTE
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (error, updatedUser) => {
    res.redirect(`/user/menu_planner/${req.params.id}`);
  });
});

// export the router
module.exports = router;
