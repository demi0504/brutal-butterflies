const express = require("express");
// const router = express.Router();
// const request = require("request");

const db = require("../models");

module.exports = function(app) {
  app.get("/watch-list", (req, res) => {
    db.Movie.findAll().then(data => {
      console.log(data);
      res.json(data);
    });
  });
};
