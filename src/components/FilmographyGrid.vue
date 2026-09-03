<script setup>
const films = [
  {
    title: 'Say Uncle',
    blurb: "Feature directorial debut — a dark comedy about a small town's rush to judgment.",
    variant: 'p1',
    image: 'https://imagedelivery.net/3fTi4yOM-Nphm2pJb0KVPg/c2205934-81d1-4cee-d0e9-81df63dc0200/public',
  },
  {
    title: 'Leaving Barstow',
    blurb: 'A drama following a family confronting its past in a fading desert town.',
    variant: 'p2',
    image: 'https://imagedelivery.net/3fTi4yOM-Nphm2pJb0KVPg/959b07f1-939a-4e19-3694-83fd16670a00/public',
  },
  {
    title: 'The Thing About Harry',
    blurb: 'A romantic comedy revisiting an old rivalry on a long car ride home.',
    variant: 'p3',
    cert: '100%',
    image: 'https://imagedelivery.net/3fTi4yOM-Nphm2pJb0KVPg/c92d67e2-d74e-4774-417e-5e80ee295200/public',
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
      <article class="film-card" v-for="f in films" :key="f.title">
        <div class="poster" :class="f.variant">
          <img class="poster-img" :src="f.image" :alt="`${f.title} key art`" loading="lazy" />
        </div>
        <div class="film-meta">
          <span class="role">Feature Film</span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.blurb }}</p>
          <span v-if="f.cert" class="cert"><b>{{ f.cert }}</b> Rotten Tomatoes</span>
        </div>
      </article>
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
  border: 1px solid var(--hairline);
  background: var(--surface);
}

.poster {
  position: relative;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.poster.p1 {
  background: linear-gradient(155deg, var(--surface-2), var(--ground));
}

.poster.p2 {
  background: linear-gradient(155deg, rgba(92, 124, 130, 0.16), var(--ground));
}

.poster.p3 {
  background: linear-gradient(155deg, rgba(198, 136, 60, 0.16), var(--ground));
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
  font-family: var(--font-mono);
  font-size: 0.68rem;
  padding: 0.35em 0.6em;
  color: var(--ink);
}

.cert b {
  color: var(--accent);
}
</style>
