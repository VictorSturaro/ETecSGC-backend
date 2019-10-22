module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const cardapio = await Cardapio.find({ user: user_id });

    return res.json(cardapio);
  }
};