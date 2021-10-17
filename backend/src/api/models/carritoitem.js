'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarritoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CarritoItem.belongsTo(models.Carrito, {
        foreignKey: 'carrito_id',
        as:'Carrito',
        onDelete: 'CASCADE'
      });

      /*
      CarritoItem.belongsTo(models.Producto, {
        foreignKey: 'producto_id',
        onDelete: 'CASCADE'
      });
      */
    }
  };
  CarritoItem.init({
    carrito_id: DataTypes.INTEGER,
    producto_id: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'CarritoItem',
    tableName:'carrito_items'
  });
  return CarritoItem;
};