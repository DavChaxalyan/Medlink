// src/main.js
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index';
import 'swiper/swiper-bundle.css';


const app = createApp(App);
app.use(router); 
app.mount('#app');
