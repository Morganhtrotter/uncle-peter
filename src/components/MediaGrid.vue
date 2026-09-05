<script setup>
const props = defineProps({
  sectionId: { type: String, required: true },
  eyebrow: { type: String, required: true },
  heading: { type: String, required: true },
  count: { type: String, required: true },
  roleLabel: { type: String, required: true },
  items: { type: Array, required: true },
  showFlags: { type: Boolean, default: true },
});

function cardBlurb(item) {
  if (props.showFlags || !item.role) return item.blurb;
  return `${item.role} — ${item.blurb.charAt(0).toLowerCase()}${item.blurb.slice(1)}`;
}
</script>

<template>
  <section :id="sectionId" class="grid-section">
    <div class="grid-head">
      <div>
        <p class="eyebrow">{{ eyebrow }}</p>
        <h2>{{ heading }}</h2>
      </div>
      <span class="count">{{ count }}</span>
    </div>
    <div class="film-grid">
      <a
        class="film-card"
        v-for="item in items"
        :key="item.title"
        :href="item.imdb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="poster" :class="item.variant">
          <img class="poster-img" :src="item.image" :alt="`${item.title} key art`" loading="lazy" />
          <span v-if="showFlags && item.role" class="flag">{{ item.role }}</span>
        </div>
        <div class="film-meta">
          <span class="role">{{ roleLabel }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ cardBlurb(item) }}</p>
          <span v-if="item.cert" class="cert"><b>{{ item.cert }}</b> Rotten Tomatoes</span>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.grid-section {
  max-width: 1180px;
  margin: 0 auto;
  padding: var(--sp-9) clamp(1.25rem, 4vw, 3rem);
}

.grid-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: var(--sp-7);
  flex-wrap: wrap;
  gap: var(--sp-3);
}

.grid-head h2 {
  font-size: clamp(1.6rem, 2.8vw, 2.4rem);
  margin-top: var(--sp-2);
}

.count {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--ink-faint);
}

.film-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-6);
}

@media (max-width: 820px) {
  .film-grid {
    grid-template-columns: 1fr;
  }
}

.film-card {
  display: block;
  border: 1px solid var(--hairline);
  background: var(--surface);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 8px 20px var(--shadow-color);
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s ease, border-color 0.15s ease;
}

.film-card:hover {
  transform: translateY(-2px);
  border-color: var(--hairline-strong);
}

.poster {
  position: relative;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.poster.p1 {
  background: linear-gradient(155deg, color-mix(in srgb, var(--accent) 18%, transparent), var(--ground));
}

.poster.p2 {
  background: linear-gradient(155deg, color-mix(in srgb, var(--accent-2) 18%, transparent), var(--ground));
}

.poster.p3 {
  background: linear-gradient(155deg, color-mix(in srgb, var(--accent-3) 18%, transparent), var(--ground));
}

.poster-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.film-meta {
  padding: var(--sp-5);
}

.film-meta .role {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--accent-2);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: var(--sp-2);
}

.film-meta h3 {
  font-size: 1.4rem;
  margin-bottom: var(--sp-3);
}

.flag {
  position: absolute;
  top: var(--sp-3);
  left: var(--sp-3);
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 0.35em 0.6em;
  border-radius: var(--radius-sm);
  background: var(--accent-2);
  color: #fff;
}

.film-meta p {
  color: var(--ink-muted);
  font-size: 0.88rem;
  margin-bottom: var(--sp-3);
}

.cert {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  border: 1px solid var(--hairline-strong);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  padding: 0.35em 0.6em;
  color: var(--ink);
}

.cert b {
  color: var(--accent-3);
}
</style>
