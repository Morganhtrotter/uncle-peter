<script setup>
// TODO: replace with the real contact / representation email before deploying.
const email = 'EMAIL COMING SOON';
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact-inner">
      <p class="eyebrow">Contact</p>
      <h2>Let's Talk</h2>
      <p class="lede">For directing, writing, or acting inquiries, reach out directly.</p>
      <a class="btn primary" :href="`mailto:${email}`">{{ email }}</a>
    </div>
  </section>
</template>

<style scoped>
.contact {
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--hairline);
  background:
    radial-gradient(ellipse 70% 55% at 15% 100%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 65%),
    radial-gradient(ellipse 70% 55% at 85% 100%, color-mix(in srgb, var(--accent-2) 10%, transparent), transparent 65%),
    var(--ground);
}

.contact-inner {
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
