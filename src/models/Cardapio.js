const mongoose = require('mongoose');

const CardapioSchema =  new mongoose.Schema({
  thumbnail: String,
  dia: String,
  descricao: String,
  ingredientes: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Cardapio', CardapioSchema);