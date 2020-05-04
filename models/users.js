const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Food Schema

// create Meal Schema

// create Menu Schema
const menuSchema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
  date: { type: Date },
  breakfast: { mealSchema },
  morning_snack: { mealSchema },
  lunch: { mealSchema },
  afternoon_snack: { mealSchema },
  dinner: { mealSchema },
  evening_snack: { mealSchema },
});

// create User Schema
const userSchema = new Schema(
  {
    username: { type: String, required: true, maxlength: 30 },
    activeSession: { type: Boolean },
    menu_planner: [
      {
        menuSchema,
      },
    ],
  },
  { timestamps: true } // add a timestamp to each document
);

// create Model from Schema (singular)
const User = mongoose.model('User', userSchema);

// export the Model
module.exports = User;
