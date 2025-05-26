<template>
  <Card>
    <template #cardHeader>
      <div class="headerWrapper">
        <h2>Next 5 Days</h2>
      </div>
    </template>
    <template #cardContent>
      <div
        v-for="day in data"
        class="dayForecast"
        :key="day.date"
      >
        <img :src="day.icon" alt="Weather Icon" />
        <div>
          <h3>{{ day.date }}</h3>
          <h3>{{ day.description }}</h3>
        </div>
        <h4>{{ day.high }}</h4>
        <h4>{{ day.low }}</h4>
      </div>
    </template>
  </Card>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'WeekForcastCard',

  components: {
    Card,
  },

  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.dayForecast {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
}

.headerWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>