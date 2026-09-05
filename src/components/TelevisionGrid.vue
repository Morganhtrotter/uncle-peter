<script setup>
const shows = [
  {
    title: 'The Fosters',
    blurb: 'Co-creator — a groundbreaking family drama about a multi-ethnic, blended family.',
    variant: 'p1',
    image: 'https://imagedelivery.net/3fTi4yOM-Nphm2pJb0KVPg/3edf9340-29da-47fd-6376-f173e0300d00/public',
    imdb: 'https://www.imdb.com/title/tt2262532/',
  },
  {
    title: 'Good Trouble',
    blurb: 'Co-creator — the acclaimed spinoff following the Foster sisters into adulthood.',
    variant: 'p2',
    image: 'https://imagedelivery.net/3fTi4yOM-Nphm2pJb0KVPg/d67f9730-34f6-428d-7b2d-2ae916ba3900/public',
    imdb: 'https://www.imdb.com/title/tt7820906/',
  },
  {
    title: 'Station 19',
    blurb: 'Co-showrunner — closing out the Grey\'s Anatomy firefighter drama.',
    variant: 'p3',
    image: 'https://imagedelivery.net/3fTi4yOM-Nphm2pJb0KVPg/efcfe8a6-ef63-4042-2e54-be65dab5ea00/public',
    imdb: 'https://www.imdb.com/title/tt7053188/',
  },
];
</script>

<template>
  <section id="television" class="grid-section">
    <div class="grid-head">
      <div>
        <p class="eyebrow">Television</p>
        <h2>Creator / Showrunner</h2>
      </div>
      <span class="count">03 Series</span>
    </div>
    <div class="film-grid">
      <a
        class="film-card"
        v-for="s in shows"
        :key="s.title"
        :href="s.imdb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="poster" :class="s.variant">
          <img class="poster-img" :src="s.image" :alt="`${s.title} key art`" loading="lazy" />
        </div>
        <div class="film-meta">
          <span class="role">Television Series</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.blurb }}</p>
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

.film-meta p {
  color: var(--ink-muted);
  font-size: 0.88rem;
  margin-bottom: var(--sp-3);
}
</style>
