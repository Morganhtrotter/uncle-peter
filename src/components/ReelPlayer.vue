<script setup>
defineProps({
  sectionId: { type: String, required: true },
  eyebrow: { type: String, required: true },
  heading: { type: String, required: true },
  videoId: { type: String, required: true },
  videoTitle: { type: String, required: true },
  tint: { type: String, default: 'accent' },
});

const posterUrl = (videoId) =>
  `https://customer-2s0iguela6o3s2ru.cloudflarestream.com/${videoId}/thumbnails/thumbnail.jpg?time=&height=600`;
</script>

<template>
  <section :id="sectionId" class="reel-section" :class="`tint-${tint}`">
    <div class="reel-inner">
      <div class="reel-head">
        <p class="eyebrow">{{ eyebrow }}</p>
        <h2>{{ heading }}</h2>
      </div>
      <div class="reel-frame">
        <div class="reel-embed">
          <iframe
            :src="`https://customer-2s0iguela6o3s2ru.cloudflarestream.com/${videoId}/iframe?poster=${encodeURIComponent(posterUrl(videoId))}`"
            loading="lazy"
            :title="videoTitle"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reel-section {
  position: relative;
  overflow: hidden;
  padding: var(--sp-9) 0;
  border-top: 1px solid var(--hairline);
  border-bottom: 1px solid var(--hairline);
}

.reel-section.tint-accent {
  background:
    radial-gradient(ellipse 60% 75% at 8% 0%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 65%),
    var(--surface);
}

.reel-section.tint-accent-2 {
  background:
    radial-gradient(ellipse 60% 75% at 92% 100%, color-mix(in srgb, var(--accent-2) 16%, transparent), transparent 65%),
    var(--surface);
}

.reel-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding-inline: clamp(1.25rem, 4vw, 3rem);
}

.reel-head {
  margin-bottom: var(--sp-6);
}

.reel-head h2 {
  font-size: clamp(1.6rem, 2.8vw, 2.4rem);
  margin-top: var(--sp-2);
}

.reel-frame {
  border: 1px solid var(--hairline-strong);
  padding: var(--sp-2);
  background: var(--surface-2);
  overflow: hidden;
}

.tint-accent .reel-frame {
  box-shadow: 0 28px 60px -30px color-mix(in srgb, var(--accent) 55%, transparent);
}

.tint-accent-2 .reel-frame {
  box-shadow: 0 28px 60px -30px color-mix(in srgb, var(--accent-2) 55%, transparent);
}

.reel-embed {
  position: relative;
  padding-top: 56.25%;
}

.reel-embed iframe {
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
