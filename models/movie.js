const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD:models/movie.js
  const Movie = sequelize.define("Movie", {
=======
  const watchList = sequelize.define("watchList", {
>>>>>>> 87dfda17b041f2e0859d558ca717eb2cb807dc61:models/watch_list.js
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
      type: DataTypes.STRING(30),
      allowNull: false
    },
    length: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    actors: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    poster: {
      type: DataTypes.TEXT,
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