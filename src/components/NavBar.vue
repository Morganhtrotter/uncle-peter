<script setup></script>

<template>
  <header class="nav">
    <div class="nav-inner">
      <router-link to="/" class="wordmark">Peter Paige</router-link>
      <nav aria-label="Primary">
        <ul>
          <li><router-link :to="{ path: '/', hash: '#reel' }">Reel</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#filmography' }">Filmography</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#contact' }">Contact</router-link></li>
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
  border-color: var(--accent);
}
</style>
