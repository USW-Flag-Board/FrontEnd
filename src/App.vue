<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Main</RouterLink>
    <RouterLink to="/list">List</RouterLink>
    <RouterLink to="/myPage">MyPage</RouterLink>
    <RouterLink to="/searchPage">Search</RouterLink>
    <RouterLink to="/LoginPage">Login</RouterLink>
    <RouterLink to="/SignUpPage">SignUp</RouterLink>
  </nav>
  <RouterView />
  <RouterView />
</template>

<style scoped>
nav {
  position: absolute;
  color: white;
  background-color: white;
}
</style>
