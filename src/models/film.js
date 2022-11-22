'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      film.belongsTo(models.allcode, { foreignKey: 'categoryId', targetKey: 'keyMap', as: 'categoryData' }),
      film.belongsTo(models.allcode, { foreignKey: 'Year', targetKey: 'keyMap', as: 'yearData' })
      film.belongsTo(models.cartfilm, { foreignKey: 'id',  })
  //       film.belongsToMany(models.menu, {
  //         through: 'film_menu',
  //         foreignKey: 'categoryId',
  //         otherKey:'id'
  //       });
     }
   }
  film.init({
    name: DataTypes.TEXT,
    movieName: DataTypes.BLOB('long'),
    trailerMovie: DataTypes.TEXT,
    linkMovie: DataTypes.TEXT,
    time: DataTypes.TEXT,
    actor: DataTypes.TEXT,
    director: DataTypes.TEXT ,
    description: DataTypes.STRING,
    categoryId: DataTypes.STRING,
    Year: DataTypes.STRING,
    image: DataTypes.STRING,
    backgroundImg: DataTypes.STRING,
    quality: DataTypes.STRING
    
    

    
    
    
  }, {
    sequelize,
    modelName: 'film',
  });
  return film;
};