const searchBtn = $("#search-btn");
// const userInput = $("#movieSearch");

// require dotenv to hide our api key
// const dotenv = require("dotenv").config();
// require('dotenv').config();
// const apiKey = process.env.API_KEY;
// console.log(apiKey);

$(document).ready(() => {
  const addToWatchList = (movie) => {
    $.post("/user/3/watchlist", movie).then(result => {
      console.log("api result", result);
    });
  };
  // ajax call to return the movie info
  $("#search-btn").click(event => {
    event.preventDefault();
    const userInput = $("#movieSearch").val().trim();
    const apiKey = "825b1cbb";
    console.log("userinput: ", userInput);
    $.ajax({
      url: `http://www.omdbapi.com/?apikey=${apiKey}&t=` + userInput,
      method: "GET"
    }).then(result => {
      console.log(result);
      const resultsList = $("#searchResults");
      const displayResult = `<div class="movie-result">
        <img class="movie-poster image" src="${result.Poster}"></img>
        <div class="middle"><div class="text">
        ${result.Title}
        <br>
        ${result.Genre}
        <br>
        ${result.Runtime}
        <br>
        <img class="rottenTom" src="/assets/images/rotten.png">${result.Ratings[1].Value}
        </div></div>
        <button class="btn btn-danger add-to-watchlist" id="${result.id}">Add To Watchlist</button></div>`;
      resultsList.append(displayResult);
    });
  });

  // Click handler to watchlist button
  $(".add-to-watchlist").click(event => {
    event.preventDefault();
    const target = event.target;
    // create movie object
    const movieContainer = $(target).parents(".movie-result");
    const movieTitle = movieContainer.find(".title").text();
    const movieObj = {
      title: movieTitle
    };
    addToWatchList(movieObj);
  });
  
  // clears all search results off page
  $("input").click(() => {
    $("#searchResults").empty();
  });

});

// post request to correct route
// send movie object in post request
// Handle response
/* <li class="movie-genre">${result.Genre}</li>
        <li class="movie-length">${result.Runtime}</li>
        <li class="movie-actors">${result.Actors}</li>
        <li class="movie-rottenTom">${result.Ratings[1].Value}</li> */