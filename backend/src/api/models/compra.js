'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Compra.init({
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    metodo_pago: DataTypes.STRING,
    grand_total: DataTypes.DECIMAL,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Compra',
  });
  return Compra;
};