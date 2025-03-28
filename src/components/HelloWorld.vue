<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'Director',
        route: '/director'
    },
    {
        label: 'Showrunner',
        route: '/showrunner'
    },
    {
        label: 'Actor',
        route: '/actor'
    },
    {
        label: 'Upcoming Projects',
        route: '/upcoming-projects'
    },
    {
        label: 'About',
        route: '/about'
    }
]);
</script>

<template>
  <div class="header-wrapper">
    <div class="card">
        <Menubar :model="items">
            <template #item="{ item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span>{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                    <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
                </a>
            </template>
        </Menubar>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}


@media (min-width: 1024px) {
  .header-wrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>
