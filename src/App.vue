<script setup>
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <NavBar />
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>
