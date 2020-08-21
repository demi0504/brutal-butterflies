// const express = require("express");
// const router = express.Router();
// const request = require("request");

// const db = require("../models");

// router.get("/watch-list", (req, res) => {
//   db.Movie.findAll({
//     order: "title ASC"
//   }).then(data => {
//     var hbsObject = {
//       movies: data
//     };
//     res.render("watch-list", hbsObject);
//   });
// });

// router.get("/rating", (req, res) => {
//   db.Movie.findAll({
//     order: "rottenTom DESC"
//   }).then(data => {
//     var hbsObject = {
//       movies: data
//     };
//     res.render("watch-list", hbsObject);
//   });
// });