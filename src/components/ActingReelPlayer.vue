<script setup></script>

<template>
  <section id="acting-reel" class="reel-section">
    <div class="reel-head">
      <p class="eyebrow">Acting Reel</p>
      <h2>On Screen</h2>
    </div>
    <div class="reel-frame">
      <div class="reel-embed">
        <iframe
          src="https://customer-2s0iguela6o3s2ru.cloudflarestream.com/007deea75c2b060d1e5488cb85cc5dc1/iframe?poster=https%3A%2F%2Fcustomer-2s0iguela6o3s2ru.cloudflarestream.com%2F007deea75c2b060d1e5488cb85cc5dc1%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
          loading="lazy"
          title="Peter Paige — Acting Reel"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reel-section {
  max-width: 1180px;
  margin: 0 auto;
  padding: var(--sp-9) clamp(1.25rem, 4vw, 3rem);
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
  background: var(--ground);
  overflow: hidden;
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
