<template>
  <div class="home">
    <div class="row">
      <div clas="col-8 offset-2">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Location" aria-label="Know your weather">
          <button class="btn btn-outline-secondary" type="button">Submit</button>
          <div class="input-group-append"> 
          </div>
        </div>
      </div>
      <div class="col-8 offset-2 text-center">
        <div class="card text-white bg-secondary mb-3">
          <div class="card-header">Current Weather</div>
          <div class="card-body">
            <h4 class="card-title">{{forecast.currently.summary}}</h4>
            <div class="card-text icon-temp">
              <span class="Weather-Icons">{{icons[forecast.currently.icon]}}</span>
              <p class="icon-temp">{{forecast.currently.temperature}} °F</p>
              <p>{{forecast.currently.precipProbability}}% Chance of rain</p>
              <p>{{forecast.currently.windGust}} MPH Wind Gust</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pre> {{forecast}}</pre>
  </div>
</template>

<script>
import API from "@/lib/API";

export default {
  name: "home",
  data() {
    return {
      forecast: {},
       icons: {
        'clear-day': '🌞',
        'clear-night': '🌝',
        rain: '🌧',
        snow: '❄',
        sleet: '☠',
        wind: '🌬',
        fog: '⁉',
        cloudy: '☁',
        'partly-cloudy-day': '⛅',
        'partly-cloudy-night': '🌃',
      },
    };
  },
  mounted() {
    API.getForecast().then(result => {
      console.log(result);
      this.forecast = result;
    });
  }
};
</script>

<style>
.icon-temp {
  font-size: 2em;
}
</style>
