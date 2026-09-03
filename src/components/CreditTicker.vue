<script setup>
const credits = ['Queer as Folk', 'The Fosters', 'Good Trouble', 'Station 19', 'ABC', 'Netflix', 'Shondaland'];
</script>

<template>
  <div class="ticker">
    <div class="ticker-row">
      <span v-for="credit in credits" :key="credit">{{ credit }}</span>
    </div>
  </div>
</template>

<style scoped>
.ticker {
  border-top: 1px solid var(--hairline);
  border-bottom: 1px solid var(--hairline);
  padding-block: var(--sp-5);
  background: var(--surface);
}

.ticker-row {
  max-width: 1180px;
  margin: 0 auto;
  padding-inline: clamp(1.25rem, 4vw, 3rem);
  display: flex;
  justify-content: space-between;
  gap: var(--sp-6);
  flex-wrap: wrap;
}

.ticker-row span {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.1rem;
  color: var(--ink-faint);
  letter-spacing: 0.03em;
}
</style>
