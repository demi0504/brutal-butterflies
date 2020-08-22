$(document).ready(() => {
  // require dotenv to hide our api key
  // const dotenv = require("dotenv").config();
  // // require('dotenv').config();
  // const apiKey = process.env.API_KEY;
  // console.log(apiKey);
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
        <img id="movie-poster" src="${result.Poster}">
        <div class="middle"><div class="text">
        <div class="title">${result.Title}</div>
        <br>
        <div class="plot">${result.Plot}</div>
        <br>
        <div class="genre">${result.Genre}</div>
        <br>
        <div class="year">${result.Year}</div>
        <br>
        <div class="run-time">${result.Runtime}</div>
        <br>
        <div class="actors">${result.Actors}</div>
        <br>
        <img class="rottenTom" src="/assets/images/rotten.png">${result.Ratings[1].Value}
        <br>
        </div></div>
        <button class="btn add-to-watchlist btn-danger" id="add-to-watchlist">Add To Watchlist</button></div>`;
      resultsList.append(displayResult);
    });
  });
  // route add new movie to movie table
  const addToMovie = movie => {
    $.post("/api/newmovie", movie).then(result => {
      console.log("api result", result);
    });
  };
  // Click handler to watchlist button
  $(document).on("click", ".add-to-watchlist", event => {
    event.preventDefault();
    const target = event.target;
    // create movie object
    const movieContainer = $(target).parents(".movie-result");
    const movieTitle = movieContainer.find(".title").text();
    const movieGenre = movieContainer.find(".genre").text();
    const movieRuntime = movieContainer.find(".run-time").text();
    const movieRotten = movieContainer.find(".rottenTom").text();
    const moviePlot = movieContainer.find(".plot").text();
    const movieActors = movieContainer.find(".actors").text();
    const moviePoster = document.getElementById("movie-poster").src;
    // const movieYear = movieYear.find(".year").text();
    // const movieImdb = movieImdb.find("imdb").text();
    // send movie object in post request
    const movieObj = {
      title: movieTitle,
      plot: moviePlot,
      genre: movieGenre,
      length: movieRuntime,
      rottenTom: movieRotten,
      actors: movieActors,
      poster: moviePoster,
      // year: movieYear,
      // imdb: movieImdb
    };
    addToMovie(movieObj);
  });

  // clears all search results off page
  $("#reset").click(() => {
    $("#searchResults").empty();
  });
});
