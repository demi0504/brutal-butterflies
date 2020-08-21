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
<<<<<<< HEAD
      type: DataTypes.STRING(1000),
=======
      type: DataTypes.STRING(100),
>>>>>>> 1319df71351f116218d44f9bbc1923ae512b09ce
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
<<<<<<< HEAD
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
=======
      allowNull: true,
      defaultValue: "John Doe"
>>>>>>> 1319df71351f116218d44f9bbc1923ae512b09ce
    },
    rottenTom: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  });

  return Movie;
};
