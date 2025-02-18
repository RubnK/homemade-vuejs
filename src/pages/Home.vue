<template>
    <div class="home">
        <h2>Bienvenue sur HomeMade 🍽️</h2>
        <p v-if="authStore.user">Bienvenue, {{ authStore.user.name }}</p>
        <p>
            Découvrez une sélection de plats préparés avec passion par nos chefs talentueux. <br>
            Chez HomeMade, nous mettons à l’honneur le goût du fait-maison, avec des recettes savoureuses, des ingrédients de qualité et une expérience simple et agréable.
        </p>
        <p>
            👨‍🍳 Choisissez votre chef préféré<br>
            🥗 Commandez des plats faits avec amour<br>
            🚀 Savourez où que vous soyez
        </p>
        <p v-if="!authStore.user">
            Inscrivez-vous dès maintenant et laissez-vous tenter par une cuisine authentique et gourmande !
        </p>
        
        <button v-if="authStore.user" @click="authStore.logout">Se déconnecter</button>
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
  