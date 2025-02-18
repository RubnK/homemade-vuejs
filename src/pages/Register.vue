<template>
    <div>
      <h1>Inscription</h1>
      <form @submit.prevent="handleRegister">
        <input type="text" v-model="name" placeholder="Nom" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Mot de passe" required />
        <button type="submit">S'inscrire</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <router-link to="/login">Déjà un compte ? Se connecter</router-link>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const name = ref('');
      const email = ref('');
      const password = ref('');
      const errorMessage = ref('');
      const authStore = useAuthStore();
      const router = useRouter();
  
      const handleRegister = () => {
        if (authStore.register(name.value, email.value, password.value)) {
          router.push('/');
        } else {
          errorMessage.value = "Cet email est déjà utilisé.";
        }
      };
  
      return { name, email, password, handleRegister, errorMessage };
    }
  };
  </script>
  