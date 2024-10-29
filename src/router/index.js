import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/Home/Home.vue';
import CaseStudies from '../pages/Case Studies/CaseStudies.vue';
import BreastCancer from '../pages/Breast Cancer/BreastCancer.vue';


const routes = [
    { path: '/', component: HomePage },
    { path: '/case-studies', component: CaseStudies },
    { path: '/breast-cancer', component: BreastCancer },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 
