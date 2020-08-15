const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  const watchList = sequelize.define("watchList", {
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
    genre: {
      type: DataTypes.string(30),
      allowNull: false
    },
    length: {
      type: DataTypes.string(30),
      allowNull: false
    },
    actors: {
      type: DataTypes.string(1000),
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
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    }
  });

  return watchList;
};
