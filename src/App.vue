<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="titleWrapper">
    <h1 class="green headerTitle">Peter <span>Paige</span></h1>
  </div>
  <header>
    <div class="wrapper">
      <HelloWorld />
    </div>
  </header>

  <main>
    <TheWelcome />
    <router-view />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
