'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profileImage: {
        type: Sequelize.STRING
      },
      backgroundImage: {
        type: Sequelize.STRING
      },
      profileImagePublicId: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      backgroundImagePublicId: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      about: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      interests: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
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
    await queryInterface.dropTable('user_details');
  }
};