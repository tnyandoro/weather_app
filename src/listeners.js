
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(e) {
  if (e.key === "Enter") {
    weather.search();
  }
})