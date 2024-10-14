const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

module.exports = sequelize.define('userDetails', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  profileImage: {
    type: DataTypes.STRING
  },
  backgroundImage: {
    type: DataTypes.STRING
  },
  profileImagePublicId: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  backgroundImagePublicId: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  about: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  interests: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
}, {
  freezeTableName: true,
  tableName: 'user_details',
  modelName: 'userDetails'
});