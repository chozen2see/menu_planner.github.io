const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Food Schema
const foodSchema = new Schema(
  {
    name: { type: String, maxlength: 100 },
    type: { type: String }, // A , B, C
    class: { type: String }, // Protein, Carbohydrate, Fruit, Vegetable
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    /*
    macronutrients: {
      // for future development
      calories: { type: Number },
      carbs: { type: Number },
      fat: { type: Number },
      protein: { type: Number },
    },
    */
  },
  { timestamps: true } // add a timestamp to each document
);

// create Model from Schema (singular)
const Food = mongoose.model('Food', foodSchema);

// export the Model
module.exports = Food;
