const User = require('../models/User');
const Cardapio = require('../models/Cardapio');

module.exports = {
  async index(req, res) {
    const cardapio = await Cardapio;

    return res.json(cardapio);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { dia_alterar, desc, ing } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User does not exist'});
    }

    const cardapio = await Cardapio.updateOne({
        user: user_id,
        dia: dia_alterar}, 
        {$set :{
            thumbnail: filename,
            dia:dia_alterar, 
            descricao: desc, 
            ingredientes: ing,}
        }, 
        {upsert : true},
        )

    return res.json(cardapio);
  }
};