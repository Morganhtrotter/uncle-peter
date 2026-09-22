<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
    sectionId: { type: String, required: true },
    eyebrow: { type: String, required: true },
    heading: { type: String, required: true },
    count: { type: String, required: true },
    roleLabel: { type: String, required: true },
    items: { type: Array, required: true },
    showFlags: { type: Boolean, default: true },
    tone: { type: String, default: 'accent' },
})

function cardBlurb(item) {
    if (props.showFlags || !item.role) return item.blurb
    return `${item.role} — ${item.blurb.charAt(0).toLowerCase()}${item.blurb.slice(1)}`
}

const activeTrailer = ref(null)

function openTrailer(item) {
    activeTrailer.value = item.trailer
}

function closeTrailer() {
    activeTrailer.value = null
}

function trailerEmbedUrl(trailer) {
    if (trailer.type === 'youtube') {
        return `https://www.youtube.com/embed/${trailer.id}`
    }
    return `https://customer-2s0iguela6o3s2ru.cloudflarestream.com/${trailer.id}/iframe`
}

function onKeydown(e) {
    if (e.key === 'Escape') closeTrailer()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
    <section :id="sectionId" class="grid-section" :class="`tone-${tone}`">
        <div class="grid-inner">
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
                    <div class="poster">
                        <img
                            class="poster-img"
                            :src="item.image"
                            :alt="`${item.title} key art`"
                            loading="lazy"
                        />
                        <span v-if="showFlags && item.role" class="flag">{{ item.role }}</span>
                        <div class="poster-overlay">
                            <button
                                v-if="item.trailer"
                                type="button"
                                class="trailer-play"
                                aria-label="Watch trailer"
                                @click.stop.prevent="openTrailer(item)"
                            >
                                ▶
                            </button>
                            <span class="imdb-cta">View on IMDb ↗</span>
                        </div>
                    </div>
                    <div class="film-meta">
                        <span class="role">{{ roleLabel }}</span>
                        <h3>{{ item.title }}</h3>
                        <p>{{ cardBlurb(item) }}</p>
                        <span v-if="item.cert" class="cert"
                            ><b>{{ item.cert }}</b> Rotten Tomatoes</span
                        >
                    </div>
                </a>
            </div>
        </div>
    </section>

    <Teleport to="body">
        <div v-if="activeTrailer" class="trailer-overlay" @click.self="closeTrailer">
            <div class="trailer-modal">
                <button
                    type="button"
                    class="trailer-close"
                    aria-label="Close trailer"
                    @click="closeTrailer"
                >
                    ✕
                </button>
                <div class="trailer-embed">
                    <iframe
                        :src="trailerEmbedUrl(activeTrailer)"
                        title="Trailer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.grid-section {
    --card-tint: var(--accent);
    padding-block: var(--sp-9);
    background: var(--ground);
}

.grid-inner {
    max-width: 1180px;
    margin: 0 auto;
    padding-inline: clamp(1.25rem, 4vw, 3rem);
}

.grid-section.tone-accent {
    --card-tint: var(--accent);
    background: linear-gradient(
            to bottom,
            color-mix(in srgb, var(--accent) 7%, transparent) 0%,
            transparent 40%,
            transparent 70%,
            color-mix(in srgb, var(--accent-2) 6%, transparent) 100%
        ),
        var(--ground);
}

.grid-section.tone-accent-2 {
    --card-tint: var(--accent-2);
    background: linear-gradient(
            to bottom,
            color-mix(in srgb, var(--accent-2) 7%, transparent) 0%,
            transparent 45%,
            var(--ground) 100%
        ),
        var(--ground);
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
    transition:
        transform 0.15s ease,
        border-color 0.15s ease;
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
    background: linear-gradient(
        155deg,
        color-mix(in srgb, var(--card-tint) 16%, transparent),
        var(--ground)
    );
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

.poster-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--sp-3);
    background: linear-gradient(
        to top,
        color-mix(in srgb, black 65%, transparent) 0%,
        transparent 55%
    );
    opacity: 0;
    transition: opacity 0.15s ease;
}

.film-card:hover .poster-overlay,
.film-card:focus-within .poster-overlay {
    opacity: 1;
}

@media (hover: none) {
    .poster-overlay {
        opacity: 1;
    }
}

.trailer-play {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    border: none;
    border-radius: 50%;
    background: color-mix(in srgb, white 92%, transparent);
    color: var(--ink);
    font-size: 1rem;
    cursor: pointer;
    transform: scale(0.9);
    transition:
        transform 0.15s ease,
        background 0.15s ease;
}

.film-card:hover .trailer-play,
.film-card:focus-within .trailer-play {
    transform: scale(1);
}

@media (hover: none) {
    .trailer-play {
        transform: scale(1);
    }
}

.trailer-play:hover {
    background: #fff;
    transform: scale(1.08);
}

.imdb-cta {
    position: absolute;
    bottom: var(--sp-3);
    left: 0;
    right: 0;
    text-align: center;
    font-family: var(--font-mono);
    font-size: 0.88rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
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

.trailer-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--sp-5);
    background: color-mix(in srgb, black 80%, transparent);
}

.trailer-modal {
    position: relative;
    width: min(960px, 100%);
}

.trailer-close {
    position: absolute;
    top: -2.4rem;
    right: 0;
    border: none;
    background: transparent;
    color: #fff;
    font-size: 1.2rem;
    line-height: 1;
    cursor: pointer;
    padding: var(--sp-2);
}

.trailer-embed {
    position: relative;
    padding-top: 56.25%;
    background: #000;
    box-shadow: 0 28px 60px -20px color-mix(in srgb, black 70%, transparent);
}

.trailer-embed iframe {
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
