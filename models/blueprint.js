const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Blueprint Schema
const blueprintSchema = new Schema(
  {
    body_type: { type: String },
    gender: { type: String },
    menu: [
      {
        meal: [
          {
            name: { type: String },
            food: [
              {
                size: { type: String },
                class: { type: String },
                type: { type: String },
              },
            ],
          },
        ],
      },
    ],
  },
  { timestamps: true } // add a timestamp to each document
);

// create Model from Schema (singular)
const Blueprint = mongoose.model('Blueprint', blueprintSchema);

// export the Model
module.exports = Blueprint;
