const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '596592d32fb06905b618512bb1be5486';
const location = '37.8267,-122.4233';
const API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/${location}`;

function getForecast() {
    fetch(API_URL)
    .then(response => response.json())
    .then(result => {
        console.log(result)
    });
}
export default {
    getForecast
}