<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Main</RouterLink>
    <RouterLink to="/list">List</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  position: absolute;
  color: white;
  background-color: white;
}
</style>
