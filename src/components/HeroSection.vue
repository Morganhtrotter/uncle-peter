<script setup></script>

<template>
  <section class="hero">
    <span class="frame-mark tl" aria-hidden="true"></span>
    <span class="frame-mark tr" aria-hidden="true"></span>
    <span class="frame-mark bl" aria-hidden="true"></span>
    <span class="frame-mark br" aria-hidden="true"></span>

    <div class="hero-body">
      <p class="eyebrow">Writer &middot; Director &middot; Showrunner</p>
      <h1 class="hero-name">Peter <span class="last">Paige</span></h1>
      <p class="hero-thesis">
        From starring in Showtime's hit <strong>Queer as Folk</strong> to co-creating the
        long running series <strong>The Fosters</strong> and <strong>Good Trouble</strong>, as well as co-showrunning Shondaland's Grey's Anatomy spin-off
        <strong>Station 19</strong> &mdash; Peter tells stories built for network audiences and critics alike, stories that move the converstion forward.
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding-block: var(--sp-10) var(--sp-9);
  border-bottom: 1px solid var(--hairline-strong);
  background:
    radial-gradient(ellipse 80% 65% at 18% 8%, color-mix(in srgb, var(--accent) 15%, transparent), transparent 65%),
    var(--ground);
}

.frame-mark {
  position: absolute;
  width: 22px;
  height: 22px;
  border-color: var(--hairline-strong);
}

.frame-mark.tl {
  top: var(--sp-5);
  left: var(--sp-5);
  border-top: 1px solid;
  border-left: 1px solid;
}

.frame-mark.tr {
  top: var(--sp-5);
  right: var(--sp-5);
  border-top: 1px solid;
  border-right: 1px solid;
}

.frame-mark.bl {
  bottom: var(--sp-5);
  left: var(--sp-5);
  border-bottom: 1px solid;
  border-left: 1px solid;
}

.frame-mark.br {
  bottom: var(--sp-5);
  right: var(--sp-5);
  border-bottom: 1px solid;
  border-right: 1px solid;
}

.hero-body {
  max-width: 1180px;
  margin: 0 auto;
  padding-inline: clamp(1.25rem, 4vw, 3rem);
}

.hero-body .eyebrow {
  margin-bottom: var(--sp-5);
}

.hero-name {
  font-size: clamp(2.8rem, 8vw, 6rem);
  line-height: 0.96;
  letter-spacing: 0.005em;
  color: var(--ink);
}

.hero-name .last {
  color: var(--accent);
  font-style: italic;
}

.hero-thesis {
  max-width: 48ch;
  color: var(--ink-muted);
  font-size: 1.1rem;
  margin-top: var(--sp-6);
}

.hero-thesis strong {
  color: var(--ink);
  font-weight: 600;
}

</style>
