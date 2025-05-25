<template>
  <main>
    <TodayForcastCard
      :data="data"
      @refresh="handleRefresh"
    />
  </main>
</template>

<script>
import TodayForcastCard from '@/components/cards/TodayForcastCard.vue'

export default {
  name: 'WeatherView',

  data() {
    return {
      data: {
        hours: [
          { temp: '20°C', precipitation: '0%', icon: '10d', time: '10:00' },
          { temp: '21°C', precipitation: '5%', icon: '09d', time: '11:00' },
          { temp: '22°C', precipitation: '10%', icon: '01d', time: '12:00' },
          { temp: '23°C', precipitation: '0%', icon: '02d', time: '13:00' },
          { temp: '24°C', precipitation: '0%', icon: '03d', time: '14:00' }
        ]
      }
    }
  },

  components: {
    TodayForcastCard,
  },

  methods: {
    handleRefresh() {
      // TODO: Implement the logic to refresh the weather data
    }
  }
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