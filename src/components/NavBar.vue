<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const isOpen = ref(false);
const route = useRoute();

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}

function handleKeydown(event) {
  if (event.key === 'Escape') closeMenu();
}

watch(() => route.fullPath, closeMenu);

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
</script>

<template>
  <header class="nav">
    <div class="nav-inner">
      <router-link to="/" class="wordmark" @click="closeMenu">Peter Paige</router-link>
      <button
        type="button"
        class="menu-toggle"
        :class="{ open: isOpen }"
        :aria-expanded="isOpen"
        aria-controls="primary-nav"
        :aria-label="isOpen ? 'Close menu' : 'Open menu'"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="primary-nav" aria-label="Primary" :class="{ open: isOpen }">
        <ul>
          <li><router-link :to="{ path: '/', hash: '#reel' }" @click="closeMenu">Directing Reel</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#television' }" @click="closeMenu">Television</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#acting-reel' }" @click="closeMenu">Acting Reel</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#filmography' }" @click="closeMenu">Filmography</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#contact' }" @click="closeMenu">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--ground);
  border-bottom: 1px solid var(--hairline);
  box-shadow: 0 4px 12px var(--shadow-color);
}

.nav-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: var(--sp-4) clamp(1.25rem, 4vw, 3rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wordmark {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: var(--ink);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 28px;
  height: 22px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--ink);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.menu-toggle.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.open span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

ul {
  list-style: none;
  display: flex;
  gap: var(--sp-6);
  padding: 0;
}

nav a {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink-muted);
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

nav a:hover,
nav a.router-link-active {
  color: var(--ink);
  border-color: var(--accent-2);
}

@media (max-width: 640px) {
  .menu-toggle {
    display: flex;
  }

  #primary-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--ground);
    border-bottom: 1px solid var(--hairline);
    box-shadow: 0 12px 20px var(--shadow-color);
  }

  #primary-nav.open {
    display: block;
  }

  #primary-nav ul {
    flex-direction: column;
    gap: var(--sp-4);
    padding: var(--sp-4) clamp(1.25rem, 4vw, 3rem) var(--sp-6);
  }
}
</style>
