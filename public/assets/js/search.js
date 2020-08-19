$(document).ready(() => {
  const addToWatchList = (movie) => {
    $.post("/user/3/watchlist", movie).then(result => {
      console.log("api result", result);
    });
  };

  const resultsList = $("#searchResults");
  mockResults.results.forEach(result => {
    const displayResult = `<div class="movie-result"><p class="title">${result.original_title}</p><p class="movie-id">${result.id}</p>
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
