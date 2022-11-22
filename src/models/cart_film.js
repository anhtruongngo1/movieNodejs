'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cartfilm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cartfilm.hasOne(models.film, { foreignKey: 'id' })

     }
   }
  cartfilm.init({
    idFilm: DataTypes.STRING,
    idUser: DataTypes.STRING,
 
    
  }, {
    sequelize,
    modelName: 'cartfilm',
  });
  return cartfilm;
};