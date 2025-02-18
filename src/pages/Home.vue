<template>
    <div>
      <h2>Accueil</h2>
      <p v-if="authStore.user">Bienvenue, {{ authStore.user.name }}</p>
      <nav>
        <router-link to="/chefs">Voir les chefs</router-link><br>
        <router-link v-if="!authStore.user" to="/login">Se connecter</router-link><br>
        <button v-if="authStore.user" @click="authStore.logout">Se déconnecter</button><br>
      </nav>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '../stores/auth';
  
  export default {
    setup() {
      const authStore = useAuthStore();
      return { authStore };
    }
  };
  </script>
  