const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Menu Schema
const menuSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 100 },
    date: { type: Date },
    breakfast: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal' },
    morning_snack: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal' },
    lunch: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal' },
    afternoon_snack: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal' },
    dinner: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal' },
    evening_snack: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal' },
  },
  { timestamps: true } // add a timestamp to each document
);

// create Model from Schema (singular)
const Menu = mongoose.model('Menu', menuSchema);

// export the Model
module.exports = Menu;
