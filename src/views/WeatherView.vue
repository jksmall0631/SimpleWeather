<template>
  <main>
    <TodayForcastCard
      :data="nextHours || []"
      @refresh="handleRefresh"
    />
  </main>
</template>

<script>
import TodayForcastCard from '@/components/cards/TodayForcastCard.vue'
import WeatherApi from '@/api/WeatherApi.js';

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
    TodayForcastCard,
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
          temp: `${Math.round(item.main.temp)}°C`,
          precipitation: `${item.pop * 100}%`,
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

.dayForcastContent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>