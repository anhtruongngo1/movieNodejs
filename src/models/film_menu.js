'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class film_menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // film_menu.belongsTo(models.menu, { foreignKey: 'id' }),
      // film_menu.belongsTo(models.film,{foreignKey:'categoryId'})
    }
  }
  film_menu.init({
      movieId: DataTypes.STRING,
      menuId:DataTypes.STRING ,
      
    
    

    
    
    
  }, {
    sequelize,
    modelName: 'film_menu',
  });
  return film_menu;
};