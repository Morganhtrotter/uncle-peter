<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <span class="wordmark">Peter Paige</span>
      <ul>
        <li><router-link :to="{ path: '/', hash: '#reel' }">Reel</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#filmography' }">Filmography</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#contact' }">Contact</router-link></li>
      </ul>
      <span class="copy">&copy; {{ year }}</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--hairline);
}

.footer-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: var(--sp-6) clamp(1.25rem, 4vw, 3rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--sp-4);
}

.wordmark {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.78rem;
  color: var(--ink-muted);
}

ul {
  list-style: none;
  display: flex;
  gap: var(--sp-5);
  padding: 0;
}

a {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink-faint);
}

a:hover {
  color: var(--accent);
}

.copy {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--ink-faint);
}
</style>
