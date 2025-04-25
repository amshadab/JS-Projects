import { API_KEY } from "../config.js";

const btn = document.getElementById("weather-btn");


btn.addEventListener("click", async (e) => {
  const result = navigator.geolocation.getCurrentPosition(
    gotLocation,
    failedToGet
  );


});

async function gotLocation(pos) {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;
  
  const response = await getWeather(latitude, longitude);

const h2 = document.getElementById('temperature')
const p = document.getElementById('location')
console.log(response);

const temperature = response.current.temp_c;
const location = response.location.name;
const region = response.location.region; 

h2.innerHTML = `${temperature}°C`;
p.innerHTML = `${location}, ${region}`;

    document.getElementById('weather-card').style.display='block';
}

function failedToGet() {
  console.log("Error");
}

async function getWeather(latitude,longitude){

const response = await fetch( `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}&aqi=no`)

return await response.json()

}