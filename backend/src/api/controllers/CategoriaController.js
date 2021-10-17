const models = require('../models');

function index(req, res, next){
    console.log('iniciando.');

    models.Categoria.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Algo salió mal",
            error: error
        });
    });
}

module.exports = {
    index: index
}