const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const dogModel = mongoose.model('Dog', DogSchema);

module.exports = dogModel;
