const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Body Type Schema
const BodyTypeSchema = new Schema(
  {
    name: { type: String, maxlength: 100 },
    alias: { type: String }, // A , B, C
    description: { type: String }, // Protein, Carbohydrate, Fruit, Vegetable
  },
  { timestamps: true } // add a timestamp to each document
);

// create Model from Schema (singular)
const BodyType = mongoose.model('BodyType', BodyTypeSchema);

// export the Model
module.exports = BodyType;
