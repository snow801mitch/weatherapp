const proxy = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "596592d32fb06905b618512bb1be5486";
const location = "37.8267,-122.4233";
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/${location}`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`

function getCoordinates(location) {
  return fetch(`${GEO_API_URL}${location}`)
    .then(response => response.json());
}

function getForecast() {
  return fetch(WEATHER_API_URL)
    .then(response => response.json());
}

export default {
  getForecast,
  getCoordinates
};
