const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const menuSchema = require('menu.js');

// create User Schema
const userSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 30 },

    activeSession: { type: Boolean },

    blueprint: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blueprint',
    }, // A, B, C, D, E - Based on Body Type Quiz

    height: { type: Number }, // in inches
    startingWeight: { type: Number }, // in lbs
    currentWeight: { type: Number }, // in lbs
    goalWeight: { type: Number }, // in lbs
  },
  { timestamps: true } // add a timestamp to each document
);

// create Model from Schema (singular)
const User = mongoose.model('User', userSchema);

// export the Model
module.exports = User;
