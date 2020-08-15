const express = require("express");
const router = express.Router();
const request = require("request");

const db = require("../models");

router.post("/api/new/movie", function(req, res) {
  var movieName = req.body.name;

  var queryUrl = "https://api.themoviedb.org/3/search/movie?api_key=884c8dc17ee0d42ebc06cde6a8e7bc10&query=" + movieName;

  request(queryUrl, function(error, response, body) {
    if (!error && JSON.parse(body).Response !== "False") {
      console.log(JSON.parse(body));
    }
  });
});
