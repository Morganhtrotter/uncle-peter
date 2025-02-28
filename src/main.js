import './assets/main.css';
import "primeicons/primeicons.css";

import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from "primevue/button";
import Menubar from 'primevue/menubar';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('Button', Button);
app.component('Menubar', Menubar);

app.mount('#app');