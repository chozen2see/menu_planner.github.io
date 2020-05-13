const express = require('express');
const router = express.Router();

// DATA
const seedData = require('../models/seed/blueprint.js');

// MODEL
const Blueprint = require('../models/blueprint.js'); // ./ used for relative path (not node_modules)

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
router.get('/sandbox', (req, res) => {
  Blueprint.find({}, (error, allBlueprints) => {
    res.send(allBlueprints);
    // res.render('Index', { User: allUsers });
  });
});

// Blueprint SEED ROUTE
router.get('/seed', (req, res) => {
  Blueprint.create(seedData, (err, data) => {
    res.send(data);
  });
});

/*******************************
 * Functional Routes - perform functions in the browser (http verb)
 * ORDER DOESN'T MATTER BECAUSE DIFF HTTP VERBS
 * Create: Creates a new resources [POST]
 * Delete/Destroy: Deletes a resource [DELETE]
 * Update: Updates a resource [PUT]
 */

// export the router
module.exports = router;
