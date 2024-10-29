import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/Home/Home.vue';
import CaseStudies from '../pages/Case Studies/CaseStudies.vue';


const routes = [
    { path: '/', component: HomePage },
    { path: '/case-studies', component: CaseStudies },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 
