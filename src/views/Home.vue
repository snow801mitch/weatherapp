<template>
  <div class="home">
    <div class="row">
      <div clas="col-8 offset-2">
        <div class="input-group mb-3">
          <input v-model="location" type="text" class="form-control" placeholder="Enter Location">
          <div class="input-group-append">
            <button @click="updateLocation" class="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
      </div>
      <div class="col-8 offset-2 text-center" v-if="forecast">
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
      location: "",
      forecast: "",
      icons: {
        "clear-day": "🌞",
        "clear-night": "🌝",
        rain: "🌧",
        snow: "❄",
        sleet: "☠",
        wind: "🌬",
        fog: "⁉",
        cloudy: "☁",
        "partly-cloudy-day": "⛅",
        "partly-cloudy-night": "🌃"
      }
    };
  },
  mounted() {
    this.loadWeather('40.2338', '-111.6585');
  },
  methods: {
    loadWeather(lat, lng) {
      API.getForecast(lat, lng).then(result => {
        this.forecast = result;
      });
    },

    updateLocation() {
      API.getCoordinates(this.location).then(result => {
        this.forecast = result;
      });
    }
  }
};
</script>

<style>
.icon-temp {
  font-size: 2em;
}
.btn {
  background-color: yellow;
  color: rgb(23, 61, 215);
}
</style>
