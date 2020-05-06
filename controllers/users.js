const express = require('express');
const router = express.Router();

// DATA
const seedData = require('../models/seed/users.js');

// MODEL
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
  User.find({}, (error, allUsers) => {
    res.send(allUsers);
    // res.render('Index', { User: allUsers });
  });
});

// NEW ROUTE
router.get('/new', (req, res) => {
  res.send('New');
  // res.render('New');
});

// // User SEED ROUTE
// router.get('/seed', (req, res) => {
//   User.create(seedData, (err, data) => {
//     res.send(data);
//   });
// });

// User SHOW ROUTE
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (error, foundUser) => {
    res.send(foundUser);
    // res.render('Show', { user: foundUser });
  });
});

// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id, (error, foundUser) => {
    res.send(foundUser);
    // res.render('Edit', { user: foundUser });
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
    res.redirect('/');
  });
});

// UPDATE ROUTE
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (error, updatedUser) => {
    res.redirect(`/${req.params.id}`);
  });
});

// export the router
module.exports = router;
