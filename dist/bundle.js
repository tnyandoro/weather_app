/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var weather = {
  apiKey: 'fc8448ecbdfb7ff960c2d74a2a385fdc',
  fetchWeather: function fetchWeather(city) {
    var _this = this;

    fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&units=metric&appid=").concat(this.apiKey)).then(function (response) {
      return response.json();
    }).then(function (data) {
      return _this.displayWeather(data);
    });
  },
  displayWeather: function displayWeather(data) {
    var name = data.name;
    var _data$weather$ = data.weather[0],
        icon = _data$weather$.icon,
        description = _data$weather$.description;
    var _data$main = data.main,
        temp = _data$main.temp,
        humidity = _data$main.humidity;
    var speed = data.wind.speed; //  const { all } = data.clouds;
    // console.log(name, icon, description, temp, humidity, speed);

    document.querySelector('.city').innerText = "Weather in ".concat(name);
    document.querySelector('.icon').src = "https://openweathermap.org/img/wn/".concat(icon, ".png");
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = "".concat(temp, "\xB0C");
    document.querySelector('.humidity').innerText = "Humidity: ".concat(humidity, "%");
    document.querySelector('.wind').innerText = "Wind speed: ".concat(speed, " km/h");
    document.querySelector('.weather').classList.remove('fetching');
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920x1080/?".concat(name, "')");
  },
  // Search function for
  search: function search() {
    this.fetchWeather(document.querySelector('.search-bar').value);
  }
}; // Events

document.querySelector('.search button').addEventListener('click', function () {
  weather.search();
});
document.querySelector('.search-bar').addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    weather.search();
  }
});
weather.fetchWeather('Harare');
/******/ })()
;
//# sourceMappingURL=bundle.js.map