const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Meal Schema
const mealSchema = new Schema(
  {
    name: { type: String },
    type: { type: String }, // Easy, Gourmet, Rapid Results
    protein: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
    carbohydrate: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
    fruit: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
    vegetable: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true } // add a timestamp to each document
);

// create Model from Schema (singular)
const Meal = mongoose.model('Meal', mealSchema);

// export the Model
module.exports = Meal;
