'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('musics', {
        // key: DataTypes.STRING,
        // type : DataTypes.STRING,
        // value_en: DataTypes.STRING,
        // value_vi: DataTypes.STRING,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      movieName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
        },
        categoryId: {
            type: Sequelize.STRING
        },
        Year: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.BLOB('long')
        },
        duration: {
            type: Sequelize.STRING
        },
        quality: {
            type: Sequelize.STRING
          },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('musics');
  }
};