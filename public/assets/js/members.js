const searchBtn = $("#search-btn");
const results = $("#movieSearch");

const dotenv = require("dotenv").config();
const apiKey = process.env.API_KEY;
// require dotenv to hide our api key


$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  // ajax call to return the movie info
  $.ajax({
    url: `http://www.omdbapi.com/?apikey=${apiKey}&t` + results.trim();,
    methos: "GET"
  }).then(response => {
    console.log(response);
  });

  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});
