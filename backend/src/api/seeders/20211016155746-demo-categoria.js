'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categorias', [
      {
        nombre: 'Frutas',
        slug: 'frutas',
        createdAt: new Date()
      },
      {
        nombre: 'Verduras',
        slug: 'verduras',
        createdAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Categorias', null, {});
     */
  }
};
