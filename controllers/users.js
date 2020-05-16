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

// // User SEED ROUTE
// router.get('/seed', (req, res) => {
//   User.create(seedData, (err, data) => {
//     res.redirect('/user/sandbox');
//   });
// });

// NEW ROUTE
router.get('/new', (req, res) => {
  // find the current active user
  User.findOne(
    {
      // _id: currentUser._id,
      activeSession: true,
    },
    (err, foundUser) => {
      res.render('User_New', { user: foundUser });
    }
  );
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

/**********************
 * Additonal Routes:
 * User Menu Planner
 * Switch User
 * User Sandbox
 **********************/

// USER MENU PLANNER SHOW ROUTE
router.get('/menu_planner/:userId', (req, res) => {
  const userId = req.params.userId;
  const filter = req.query.filter;
  let showSwitch = req.query.showSwitch;

  // finagle to update user blueprint in heroku
  // User.findByIdAndUpdate(
  //   { _id: userId },
  //   { blueprint: '5eb4eeedceedff0c9b5a53af' } // heroku: 5ebc8ba7c46bb20017dbdf29
  // ).exec((error, foundUser) => {
  //   console.log('updated userId:', userId);
  // });

  User.findById(userId)
    .populate({
      path: 'blueprint',
      populate: {
        path: 'body_type',
        model: 'BodyType',
      },
    })
    .exec(async (error, foundUser) => {
      let filteredUsers;
      let filteredFood;
      let filteredMeal;

      try {
        const allUsers = await User.find({}, (error, allUsers) => {
          filteredUsers = allUsers.filter((user) => {
            return user.activeSession === false && user.name !== 'admin';
          });

          foundUser.filteredUsers = filteredUsers;
        });

        // attempting to switch users?
        foundUser.showSwitch = (await (showSwitch === '?')) ? true : false;

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

            foodItems.splice(62, 1);

            filteredFood = foodItems;
          }
        });

        const menuItems = await Menu.find(
          { user: userId },
          (error, menuItems) => {}
        );

        const mealItems = await Meal.find(
          { user: userId },
          (error, mealItems) => {
            filteredMeal = mealItems.filter((meal) => {
              // true will add food to filteredfood
              return meal.name !== 'No Meal Selected';
              //
            });
          }
        );

        res.render('User_Index', {
          user: foundUser,

          food: filteredFood, //foodItems,
          menu: menuItems,
          meal: filteredMeal,
          filter,
        });
      } catch (error) {
        console.log(error);
      }
    });
});

// USER SWITCH ROUTE
router.get('/switch/:userId', (req, res) => {
  const userId = req.params.userId;
  const userToken = req.query.userToken;

  // Make current user inactive
  User.findByIdAndUpdate({ _id: userId }, { activeSession: false });

  // Activate selected user based on userToken
  User.findByIdAndUpdate({ _id: userToken }, { activeSession: true });

  res.redirect(`/user/menu_planner/${userToken}`);
});

// SANDBOX ROUTE - SEE DATA ON ALL USERS
router.get('/sandbox', (req, res) => {
  User.find({}, (error, allUsers) => {
    res.send(allUsers);
    // res.render('Index', { User: allUsers });
  });
});

// export the router
module.exports = router;
