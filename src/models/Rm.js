const mongoose = require('mongoose');

const RmSchema =  new mongoose.Schema({
  rm: String,
});

module.exports = mongoose.model('Rm', RmSchema);