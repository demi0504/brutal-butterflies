const sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  const watchList = sequelize.define("Watch_list", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    plot: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    poster: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    plot: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    trailer: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rottenTom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    watched: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  return watchList;
};