import { createRouter, createWebHistory } from 'vue-router'
import WeatherView from '../views/WeatherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/losAngeles',
    },
    {
      path: '/:city',
      name: 'Weather',
      component: WeatherView,
      props: true,
    },
  ],
})

export default router
