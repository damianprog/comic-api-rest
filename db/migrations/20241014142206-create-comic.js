'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comic', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      coverImage: {
        type: Sequelize.TEXT
      },
      onsaleDate: {
        type: Sequelize.DATE
      },
      writer: {
        type: Sequelize.STRING
      },
      inker: {
        type: Sequelize.STRING
      },
      penciler: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      seriesId: {
        type: Sequelize.INTEGER
      },
      linkingUrl: {
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
    await queryInterface.dropTable('comic');
  }
};