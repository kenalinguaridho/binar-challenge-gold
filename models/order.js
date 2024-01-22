'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    paymentId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    totalPrice: DataTypes.REAL,
    address: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Order',
    timestamps: true,
    paranoid:true
  });
  return Order;
};