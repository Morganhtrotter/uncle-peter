<script setup>
const films = [
  {
    title: 'Say Uncle',
    blurb: "Feature directorial debut — a dark comedy about a small town's rush to judgment.",
    variant: 'p1',
    image: 'https://imagedelivery.net/3fTi4yOM-Nphm2pJb0KVPg/c2205934-81d1-4cee-d0e9-81df63dc0200/public',
    imdb: 'https://www.imdb.com/title/tt0401385/',
  },
  {
    title: 'Leaving Barstow',
    blurb: 'A drama following a family confronting its past in a fading desert town.',
    variant: 'p2',
    image: 'https://imagedelivery.net/3fTi4yOM-Nphm2pJb0KVPg/959b07f1-939a-4e19-3694-83fd16670a00/public',
    imdb: 'https://www.imdb.com/title/tt1093374/',
  },
  {
    title: 'The Thing About Harry',
    blurb: 'A romantic comedy revisiting an old rivalry on a long car ride home.',
    variant: 'p3',
    cert: '100%',
    image: 'https://imagedelivery.net/3fTi4yOM-Nphm2pJb0KVPg/c92d67e2-d74e-4774-417e-5e80ee295200/public',
    imdb: 'https://www.imdb.com/title/tt11324534/',
  },
];
</script>

<template>
  <section id="filmography" class="grid-section">
    <div class="grid-head">
      <div>
        <p class="eyebrow">Filmography</p>
        <h2>Writer / Director</h2>
      </div>
      <span class="count">03 Features</span>
    </div>
    <div class="film-grid">
      <a
        class="film-card"
        v-for="f in films"
        :key="f.title"
        :href="f.imdb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="poster" :class="f.variant">
          <img class="poster-img" :src="f.image" :alt="`${f.title} key art`" loading="lazy" />
        </div>
        <div class="film-meta">
          <span class="role">Feature Film</span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.blurb }}</p>
          <span v-if="f.cert" class="cert"><b>{{ f.cert }}</b> Rotten Tomatoes</span>
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
