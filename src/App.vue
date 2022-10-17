<script setup>
import { RouterLink, RouterView } from "vue-router";
import PageHeader from "@/components/PageHeader.vue";
</script>

<template>
  <nav>
    <RouterLink to="/">Main</RouterLink>
    <RouterLink to="/list">List</RouterLink>
    <RouterLink to="/myPage">MyPage</RouterLink>
    <RouterLink to="/searchPage">Search</RouterLink>
  </nav>
  <PageHeader />
  <RouterView />
</template>

<style scoped>
nav {
  position: absolute;
  color: white;
  background-color: white;
}
</style>