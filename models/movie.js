const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define("Movie", {
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
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    length: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    director: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    actors: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    poster: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trailer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imdb: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rottenTom: {
      type: DataTypes.STRING(100),
      allowNull: true
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

  return Movie;
};
