$(document).ready(() => {
  const addToWatchList = (movie) => {
    $.post("/user/3/watchlist", movie).then(result => {
      console.log("api result", result);
    });
  };

  const resultsList = $("#searchResults");
  mockResults.results.forEach(result => {
    const displayResult = `<div class="movie-result">
    <li class="title">${result.Title}</li>
    <li class="movie-plot">${result.Plot}</li>
    <img class="movie-poster" src="${result.Poster}"></img>
    <li class="movie-genre">${result.Genre}</li>
    <li class="movie-length">${result.Runtime}</li>
    <li class="movie-actors">${result.Actors}</li>
    <li class="movie-rottenTom">${result.Ratings[1].Value}</li>
    <button class="add-to-watchlist" id="${result.id}">Add To Watchlist</button></div>`;
    resultsList.append(displayResult);
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

  // post request to correct route
});
// send movie object in post request
// Handle response
