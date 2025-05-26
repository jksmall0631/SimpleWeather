<template>
  <Card>
    <template #cardHeader>
      <div class="headerWrapper">
        <h2>Next Hours</h2>
      </div>
    </template>
    <template #cardContent>
      <div class="dayForcastContent">
        <div v-for="hour in data" class="dayForcast">
          <h4>{{ hour.temp }}</h4>
          <h4>{{ hour.precipitation }}</h4>
          <img :src="hour.icon" alt="Weather Icon" />
          <h3>{{ hour.time }}</h3>
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'TodayForcastCard',

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
.dayForcastContent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.headerWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>