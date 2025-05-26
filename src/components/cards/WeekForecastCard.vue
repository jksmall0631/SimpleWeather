<template>
  <Card>
    <template #cardHeader>
      <h2>Next 5 Days</h2>
    </template>
    <template #cardContent>
      <div v-for="day in data">
        <h3>{{ day.date }}</h3>
        <img :src="day.icon" alt="Weather Icon" />
        <h4>{{ day.temp }}</h4>
        <h4>{{ day.precipitation }}</h4>
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