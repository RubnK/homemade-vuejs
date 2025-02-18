<template>
    <div>
      <h2>Accueil</h2>
      <p v-if="authStore.user">Bienvenue, {{ authStore.user.name }}</p>
      <nav>
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
  