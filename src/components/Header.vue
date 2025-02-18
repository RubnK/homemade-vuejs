<template>
    <header>
        <h1>HomeMade</h1>
        <nav>
            <router-link to="/">Accueil</router-link>
            <router-link to="/chefs">Nos Chefs</router-link>
            <router-link v-if="authStore.user" to="/cart">Panier</router-link>
            <router-link v-if="authStore.user" to="/cart">Panier</router-link>
            <router-link v-if="!authStore.user" to="/login">Se connecter</router-link>
        </nav>
    </header>
</template>
  
<script>
    import { useAuthStore } from '../stores/auth';
    import { computed } from 'vue';
  
    export default {
        setup() {
            const authStore = useAuthStore();
        return { authStore };
        }
    };
</script>