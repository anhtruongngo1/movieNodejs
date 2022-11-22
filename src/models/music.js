'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class music extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  music.init({
    musicName: DataTypes.STRING ,
    description: DataTypes.STRING,
    categoryId: DataTypes.STRING,
    Year: DataTypes.STRING,
    image: DataTypes.STRING,
    duration: DataTypes.STRING,
    quality: DataTypes.STRING
    
    

    
    
    
  }, {
    sequelize,
    modelName: 'music',
  });
  return music;
};