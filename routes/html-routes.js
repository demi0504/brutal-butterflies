// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    res.render("login");
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("members");
    }
  });

  // Here we've add our isAuthenticated middleware to this route.
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members");
  });

  // Watchlist route
  app.get("/watch-list", (req, res) => {
    db.Movie.findAll({}).then(results => {
      // console.log("results", results);
      const data = {
        movies: results.map(movie => ({
          title: movie.dataValues.title,
          plot: movie.dataValues.plot,
          actors: movie.dataValues.actors,
          rottenTom: movie.dataValues.rottenTom,
          imdb: movie.dataValues.imdb,
          genre: movie.dataValues.genre,
          year: movie.dataValues.year,
          poster: movie.dataValues.poster
        }))
      };
      console.log("data", data);
      res.render("watch-list", data);
    });
  });
};
