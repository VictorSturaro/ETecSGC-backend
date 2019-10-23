const mongoose = require('mongoose');

const CountSchema =  new mongoose.Schema({
    _id: String,
    total: Number,
  });
  
  module.exports = mongoose.model('count', CountSchema);