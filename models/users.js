const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const menuSchema = require('menu.js');

// create User Schema
const userSchema = new Schema(
  {
    username: { type: String, required: true, maxlength: 30 },
    body_type: { type: String }, // A, B, C, D, E - Based on Body Type Quiz
    menu_planner: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
      },
    ],
  },
  { timestamps: true } // add a timestamp to each document
);

// create Model from Schema (singular)
const User = mongoose.model('User', userSchema);

// export the Model
module.exports = User;
