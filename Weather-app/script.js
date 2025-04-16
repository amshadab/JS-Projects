import { API_KEY } from '../config.js';
const btn=document.getElementById('search')
let cityTime=document.getElementById('city-time')
let cityName=document.getElementById('city-name')
let temp = document.getElementById('temp')
async function getData(city) {
    const response=await
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
    
 
 
    return await response.json()
 }

btn.addEventListener('click',async function(e){


const city = document.getElementById('city').value


const result = await getData(city)
cityName.innerHTML=`${result.location.region}`
cityTime.innerHTML=`${result.location.localtime}`
temp.innerHTML=`${result.current.temp_f} f`

});