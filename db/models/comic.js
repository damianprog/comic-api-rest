const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const userComic = require("./userComic");

const comic = sequelize.define('comic', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING
  },
  coverImage: {
    type: DataTypes.TEXT
  },
  onsaleDate: {
    type: DataTypes.DATE
  },
  writer: {
    type: DataTypes.STRING
  },
  inker: {
    type: DataTypes.STRING
  },
  penciler: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  seriesId: {
    type: DataTypes.INTEGER
  },
  linkingUrl: {
    type: DataTypes.STRING
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
  tableName: 'comic',
  modelName: 'comic'
});

comic.hasMany(userComic, {foreignKey: 'comicId', as: 'userComics'});
userComic.belongsTo(comic, {foreignKey: 'comicId', as: 'comic'});

module.exports = comic;