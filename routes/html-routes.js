// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

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
  // Dont forget to add isAuthenticated function back in params
  app.get("/members", (req, res) => {
    res.render("members");
  });

  // watchlist route
  app.get("/watch-list", (req, res) => {
    res.render("watch-list");
  });
};
