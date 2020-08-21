const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define("Movie", {
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
      allowNull: true
    },
    genre: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    length: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    director: {
      type: DataTypes.STRING(1000),
      allowNull: true
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
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    // watched: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: false
    // },
    imdb: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    rottenTom: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  });

  return Movie;
};
