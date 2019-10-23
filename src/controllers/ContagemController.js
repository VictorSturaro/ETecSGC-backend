const Soma = require('../models/Soma');
const Contagem = require('../models/Contagem');

module.exports = {
    async index(req, res) {
        const { dia } = req.headers
        
        const count = await Soma.aggregate(
            [
                {
                  '$match': {
                    'dia': dia
                  }
                }, {
                  '$group': {
                    '_id': '$dia', 
                    'total': {
                      '$sum': '$soma'
                    }
                  }
                }
            ]
        )

        return res.json(count);
    },

    async store(req, res) {
      const { dia } = req.body;

      const contagem = await Soma.aggregate(
        [
            {
              '$match': {
                'dia': dia
              }
            }, {
              '$group': {
                '_id': '$dia', 
                'total': {
                  '$sum': '$soma'
                }
              }
            }
        ]
      )

      return res.json(contagem);
    },

  };