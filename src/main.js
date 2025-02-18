import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/main.css';
import App from './App.vue';
import Home from './pages/Home.vue';
import Chefs from './pages/Chefs.vue';
import ChefDetail from './pages/ChefDetail.vue';
import Login from './pages/Login.vue';
import Cart from './components/Cart.vue';
import Register from './pages/Register.vue';

const pinia = createPinia();

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/chefs', component: Chefs },
        { path: '/chefs/:id', component: ChefDetail, props: true },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/cart', component: Cart },
    ],
});

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');