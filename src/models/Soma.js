const mongoose = require('mongoose');

const SomaSchema =  new mongoose.Schema({
  soma: Number,
  rm: String,
  dia: String,
});

module.exports = mongoose.model('soma', SomaSchema);