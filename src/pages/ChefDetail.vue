<template>
    <div>
        <h1>{{ chef.name }}</h1>
        <h2>Spécialités :</h2>
        <ul>
            <li v-for="dish in chef.dishes" :key="dish.id">
                {{ dish.name }}
                <div v-if="authStore.user">
                    <button @click="decreaseQuantity(dish.id)">-</button>
                    <span class="quantity"> {{ quantities[dish.id] || 1 }} </span> 
                    <button @click="increaseQuantity(dish.id)">+</button>
                    <button @click="addToCart(dish)">Ajouter au panier</button>
                </div>
                <div v-else>
                    <router-link to="/login">Connectez-vous pour commander</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { useCartStore } from '../stores/cart';
    import { useAuthStore } from '../stores/auth';
    import chefsData from '../assets/chefs.json';
  
    export default {
        props: ['id'],
        setup() {
        const route = useRoute();
        const cartStore = useCartStore();
        const chef = ref({ name: '', dishes: [] });
        const quantities = ref({});
        const authStore = useAuthStore();
  
        onMounted(() => {
            chef.value = chefsData.find(c => c.id == route.params.id) || { name: 'Chef Inconnu', dishes: [] };
        });
  
        const increaseQuantity = (id) => {
            if (!quantities.value[id]) quantities.value[id] = 1;
            quantities.value[id]++;
        };
      
        const decreaseQuantity = (id) => {
            if (quantities.value[id] && quantities.value[id] > 1) {
                quantities.value[id]--;
            }
        };
  
        const addToCart = (dish) => {
            cartStore.addToCart(dish, quantities.value[dish.id] || 1);
            alert('Plat ajouté au panier !');
        };
  
        return { chef, quantities, increaseQuantity, decreaseQuantity, addToCart, authStore };
        },
    };
</script>
