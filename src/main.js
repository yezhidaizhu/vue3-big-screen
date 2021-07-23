import { createApp } from 'vue'
import App from './App.vue'

import Datav from '@/core/use_datav';
import VueEcharts from '@/core/use_vueEcharts';

import "./style.css" // tailwindcss

const app = createApp(App);

app.use(Datav);
app.use(VueEcharts);

app.mount('#app');
