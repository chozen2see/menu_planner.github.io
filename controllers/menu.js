const express = require('express');
const router = express.Router();

// DATA
const seedData = require('../models/seed/menu.js');

// MODEL
const Menu = require('../models/menu.js'); // ./ used for relative path (not node_modules)
const User = require('../models/users.js'); // ./ used for relative path (not node_modules)
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
  const userId = req.query.userId;
  Menu.find({ user: userId }, async (error, allMenus) => {
    // res.send(allMenus);

    // find the current active user
    const foundUser = await User.findOne({
      _id: userId,
      // activeSession: true,
    });

    res.render('Menu_Index', { menu: allMenus, user: foundUser });
  });
});

// NEW ROUTE
router.get('/new', (req, res) => {
  Meal.find({}, async (error, allMeals) => {
    // find the current active user
    const foundUser = await User.findOne({
      // _id: currentUser._id,
      activeSession: true,
    });

    res.render('Menu_New', { meal: allMeals, user: foundUser });
  });
});

// // Menu SEED ROUTE
// router.get('/seed', (req, res) => {
//   Menu.create(seedData, (err, data) => {
//     res.send(data);
//   });
// });

// Menu SHOW ROUTE
router.get('/:id', (req, res) => {
  Menu.findById(req.params.id)
    .populate({
      path:
        'breakfast morning_snack lunch afternoon_snack dinner evening_snack',
      model: 'Meal',
    })
    .exec(async (error, foundMenu) => {
      // console.log(foundMenu);

      // find the current active user
      const foundUser = await User.findOne({
        // _id: currentUser._id,
        activeSession: true,
      });

      res.render('Menu_Show', {
        menu: foundMenu,

        user: foundUser,
      });
    });
});

// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
  Menu.findById(req.params.id)
    .populate({
      path:
        'breakfast morning_snack lunch afternoon_snack dinner evening_snack',
      model: 'Meal',
    })
    .exec(async (error, foundMenu) => {
      // find the current active user
      const foundUser = await User.findOne({
        // _id: currentUser._id,
        activeSession: true,
      });

      const allMeals = await Meal.find({});

      res.render('Menu_Edit', {
        menu: foundMenu,
        meal: allMeals,
        user: foundUser,
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
  // create new Menu document using a Model. based on Schema -> Model -> Document
  Menu.create(req.body, (error, createdMenu) => {
    // once created - respond to client with document from database
    // res.send(createdMenu);
    res.redirect('/menu');
  });
});

// method override, overrides post route and sends it to this delete route
// DELETE ROUTE
router.delete('/:id', (req, res) => {
  Menu.findByIdAndRemove(req.params.id, (error, removedMenu) => {
    res.redirect('/'); //redirect back to index route
  }); //remove the item from the array
});

// UPDATE ROUTE
router.put('/:id', (req, res) => {
  Menu.findByIdAndUpdate(req.params.id, req.body, (error, updatedMenu) => {
    res.redirect(`/menu/${req.params.id}`);
  });
});

// export the router
module.exports = router;
