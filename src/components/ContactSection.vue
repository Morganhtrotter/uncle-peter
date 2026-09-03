<script setup>
// TODO: replace with the real contact / representation email before deploying.
const email = 'contact@peterpaige.com';
</script>

<template>
  <section id="contact" class="contact">
    <p class="eyebrow">Contact</p>
    <h2>Let's Talk</h2>
    <p class="lede">For directing, writing, or acting inquiries, reach out directly.</p>
    <a class="btn primary" :href="`mailto:${email}`">{{ email }}</a>
  </section>
</template>

<style scoped>
.contact {
  border-top: 1px solid var(--hairline);
  max-width: 1180px;
  margin: 0 auto;
  padding: var(--sp-10) clamp(1.25rem, 4vw, 3rem);
}

.contact h2 {
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  margin: var(--sp-3) 0 var(--sp-5);
}

.lede {
  color: var(--ink-muted);
  max-width: 46ch;
  margin-bottom: var(--sp-7);
  font-size: 1.05rem;
}
</style>
