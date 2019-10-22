const Rm = require('../models/Rm');

module.exports = {
  async store(req, res) {
    const { rm } = req.body;

    let aluno = await Rm.findOne({ rm });

    if (!aluno) {
      aluno = await Rm.create({ rm });
    }

    return res.json(aluno);
  }
};