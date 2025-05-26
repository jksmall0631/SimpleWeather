<template>
  <main>
    <TodayForecastCard
      :data="nextHours || []"
      @refresh="handleRefresh"
    />
    <WeekForecastCard
      :data="nextWeek || []"
    />
  </main>
</template>

<script>
import TodayForecastCard from '@/components/cards/TodayForecastCard.vue'
import WeatherApi from '@/api/WeatherApi.js';
import WeekForecastCard from '@/components/cards/WeekForecastCard.vue';

export default {
  name: 'WeatherView',

  data() {
    return {
      data: {
        list: [],
      },
    };
  },

  components: {
    TodayForecastCard,
    WeekForecastCard,
  },

  mounted() {
    this.getWeatherData();
  },

  computed: {
    nextHours() {
      const now = new Date();
      return this.data.list
        .filter(item => new Date(item.dt_txt) > now)
        .slice(0, 5)
        .map(item => ({
          time: new Date(item.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          temp: `${Math.round(item.main.temp)}°F`,
          precipitation: `${item.pop * 100}%`,
          icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        }));
    },

    nextWeek() {
      const now = new Date();
      console.log('data.list:', this.data.list);
      return this.data.list
        .filter(item => new Date(item.dt_txt) > now && new Date(item.dt_txt).getHours() === 12)
        .slice(0, 7)
        .map(item => ({
          date: new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'long' }),
          high: `${Math.round(item.main.temp_max)}°F`, // Max and min seem to be returning the same value for some reason
          low: `${Math.round(item.main.temp_min)}°F`,
          description: item.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        }));
    },
  },

  methods: {
    handleRefresh() {
      this.getWeatherData();
    },

    getWeatherData() {
      const city = this.$route.params.city || 'losAngeles';
      WeatherApi.getWeatherData(city)
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    },
  },
}
</script>

<style scoped>
main {
  width: 100%;
  padding: 2rem;
  padding-top: 0.5rem;
}

.dayForecastContent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>