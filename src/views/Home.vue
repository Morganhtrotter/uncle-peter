<script setup>
import HeroSection from '@/components/HeroSection.vue';
import ReelPlayer from '@/components/ReelPlayer.vue';
import MediaGrid from '@/components/MediaGrid.vue';
import AboutBlocks from '@/components/AboutBlocks.vue';
import ContactSection from '@/components/ContactSection.vue';
import features from '@/config/features.json';

const shows = [
  {
    title: 'The Fosters',
    role: 'Co-creator',
    blurb: 'A groundbreaking family drama about a multi-ethnic, blended family.',
    variant: 'p1',
    image: 'https://imagedelivery.net/3fTi4yOM-Nphm2pJb0KVPg/3edf9340-29da-47fd-6376-f173e0300d00/public',
    imdb: 'https://www.imdb.com/title/tt2262532/',
  },
  {
    title: 'Good Trouble',
    role: 'Co-creator',
    blurb: 'The acclaimed spinoff following the foster sisters into adulthood.',
    variant: 'p2',
    image: 'https://imagedelivery.net/3fTi4yOM-Nphm2pJb0KVPg/d67f9730-34f6-428d-7b2d-2ae916ba3900/public',
    imdb: 'https://www.imdb.com/title/tt7820906/',
  },
  {
    title: 'Station 19',
    role: 'Co-showrunner',
    blurb: 'Closing out the Grey\'s Anatomy firefighter drama.',
    variant: 'p3',
    image: 'https://imagedelivery.net/3fTi4yOM-Nphm2pJb0KVPg/efcfe8a6-ef63-4042-2e54-be65dab5ea00/public',
    imdb: 'https://www.imdb.com/title/tt7053188/',
  },
];

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
  <HeroSection />
  <ReelPlayer
    section-id="reel"
    eyebrow="Directing Reel"
    heading="The Work"
    video-id="e9ccfb02fafd104b8015e3d3c9f0a2bf"
    video-title="Peter Paige — Directing Reel"
    tint="accent"
  />
  <MediaGrid
    section-id="television"
    eyebrow="Television"
    heading="Creator / Showrunner"
    count="03 Series"
    role-label="Television Series"
    :items="shows"
    :show-flags="features.showRoleFlags"
  />
  <ReelPlayer
    section-id="acting-reel"
    eyebrow="Acting Reel"
    heading="On Screen"
    video-id="007deea75c2b060d1e5488cb85cc5dc1"
    video-title="Peter Paige — Acting Reel"
    tint="accent-2"
  />
  <MediaGrid
    section-id="filmography"
    eyebrow="Filmography"
    heading="Writer / Director"
    count="03 Features"
    role-label="Feature Film"
    :items="films"
  />
  <AboutBlocks />
  <ContactSection />
</template>
