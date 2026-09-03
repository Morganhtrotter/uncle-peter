<script setup>
const blocks = [
  {
    role: 'Actor',
    text: "Began his career as an actor, guest-starring across sitcoms and procedurals before landing a lead role in Showtime's QUEER AS FOLK.",
  },
  {
    role: 'Writer / Director',
    text: 'Co-created THE FOSTERS and GOOD TROUBLE, developed pilots for networks including ABC and Netflix, and has directed three features — SAY UNCLE, LEAVING BARSTOW, and THE THING ABOUT HARRY.',
  },
  {
    role: 'Showrunner',
    text: "Co-showrunner for ABC/Shondaland's STATION 19 through its celebrated final season.",
  },
];
</script>

<template>
  <section class="about">
    <div class="about-head">
      <p class="eyebrow">About</p>
      <h2>Three Chapters, One Career</h2>
    </div>
    <div class="about-grid">
      <div class="about-block" v-for="b in blocks" :key="b.role">
        <span class="role">{{ b.role }}</span>
        <p>{{ b.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  max-width: 1180px;
  margin: 0 auto;
  padding: var(--sp-9) clamp(1.25rem, 4vw, 3rem);
}

.about-head {
  margin-bottom: var(--sp-7);
}

.about-head h2 {
  font-size: clamp(1.6rem, 2.8vw, 2.4rem);
  margin-top: var(--sp-2);
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp-7);
  border-top: 1px solid var(--hairline);
  padding-top: var(--sp-7);
}

@media (max-width: 820px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

.role {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: var(--sp-3);
}

.about-block p {
  color: var(--ink-muted);
  font-size: 0.95rem;
}
</style>
