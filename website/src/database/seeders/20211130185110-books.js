'use strict';
const books = require('../../model/book')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('books', books.all(), {});
    }catch (error) {
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('books', null, {});
    }catch (error) {
      throw error;
    }
  }
};
