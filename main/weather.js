const API_KEY = "f43b119235654f369c91787398bb7d71";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.getElementById("weather");
      const city = document.getElementById("city");
      const temp_now = document.getElementById("temp_now");
      const temp_max = document.getElementById("temp_max");
      const temp_min = document.getElementById("temp_min");

      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
      temp_now.innerText = data.main.temp;
      temp_min.innerText = "최저:" + data.main.temp_min;
      temp_max.innerText = "최고:" + data.main.temp_max;
    });
}

function onGeoError() {
  alert("I can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
