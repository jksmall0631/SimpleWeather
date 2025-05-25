<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const cities = ref([
  { name: 'Los Angeles', path: '/losAngeles' },
  { name: 'Beijing', path: '/beijing' },
  { name: 'Rio De Janiero', path: '/rioDeJaniero' },
]);

const handleSearch = () => {
  console.log('Search clicked');
};
</script>

<template>
  <header>
    <div class="searchContainer">
      <h1>Simple Weather</h1>
      <div class="search">
        <div class="inputContainer">
          <img 
            src="@/assets/search.png" 
            alt="search" 
            class="searchIcon" 
            @click="handleSearch" 
          />
        </div>
      </div>
    </div>
    <nav>
      <RouterLink
        v-for="city in cities"
        :key="city.name"
        :to="city.path"
      >
        <h2>{{ (city.name).toUpperCase() }}</h2>
      </RouterLink>
    </nav>
  </header>
  <body>
    <RouterView />
  </body>
</template>

<style scoped>
header {
  width: 100%;
  background-color: white;
  z-index: 100;
}

.headerWrapper {
  display: block;
  padding: 2rem;
  padding-bottom: 0;
  max-width: 1200px;
  margin: auto;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: black;
  border-bottom: 3px solid #fd491f;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  flex-grow: 1;
  margin-right: 2rem;
  margin-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.search {
  display: flex;
  align-items: center;
}

.searchContainer {
  background-color: #1665c0;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  box-shadow: 0px 3px 2px lightgray;
}

.searchContainer h1 {
  color: white;
}

.searchIcon {
  color: white;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>