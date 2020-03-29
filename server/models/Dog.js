const mongoose = require('mongoose');

let DogModel = {};


// Schema for the dog
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdData: {
    type: Date,
    default: Date.now,
  },
});

// Static function
DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

// Create the model based on the schema
DogModel = mongoose.model('Dog', DogSchema);

// Export the model and schema
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
