const models = require('../models');

function index(req, res, next){
    models.Producto.findAll({
        include: {
          model: models.Categoria,
          as:'Categoria'
        }
    }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Algo salió mal.",
            error: error
        });
    });
}

function show(req, res, next){
    const id = req.params.id;
    models.Producto.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: "Producto no encontrada!"
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Algo salió mal.",
            error: error
        })
    });
}

function save(req, res, nex){
    
}

module.exports = {
    index: index
}

