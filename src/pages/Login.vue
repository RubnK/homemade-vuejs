<template>
    <div>
      <h1>Connexion</h1>
      <form @submit.prevent="handleLogin">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <router-link to="/register">Créer un compte</router-link>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const errorMessage = ref('');
      const authStore = useAuthStore();
      const router = useRouter();
  
      const handleLogin = () => {
        if (authStore.login(email.value, password.value)) {
          router.push('/');
        } else {
          errorMessage.value = "Email ou mot de passe incorrect.";
        }
      };
  
      return { email, password, handleLogin, errorMessage };
    }
  };
  </script>
  