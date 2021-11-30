'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('books',{
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        rating: {
          type: Sequelize.FLOAT,
          allowNull: true,
          defaultValue: null
        },
        info: {
          type: Sequelize.STRING(1250),
          allowNull: true,
          defaultValue: 'Sin descripción'
        }
      });
    }catch (e) {
      throw e;
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable('books');
    } catch (e) {
      throw e;
    }
  }
};
