let weather = {
   "apiKey": "fc8448ecbdfb7ff960c2d74a2a385fdc",
    fetchWeather: function (city) {
      fetch(
         "http://api.openweathermap.org/data/2.5/weather?q="
         + city 
         +"&appid=" 
         + this.apiKey
         ).then((response) => response.json())
         .then((data) => this.displayWeather(data));

   },
   displayWeather: function(data){
    const { name } = data
    const { icon, description } = data.weather[0]; 
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { all } = data.clouds;
    console.log(name, icon, description, temp, humidity, speed, all);
    document.querySelector(".city").innertext = " Weather in" + name;
    document.querySelector(".icon").innertext = ""
   }
}
