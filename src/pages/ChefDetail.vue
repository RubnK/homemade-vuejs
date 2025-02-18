<template>
    <div>
      <h1>{{ chef.name }}</h1>
      <h2>Spécialités :</h2>
      <ul>
        <li v-for="dish in chef.dishes" :key="dish.id">
          {{ dish.name }}
          <div>
            <button @click="decreaseQuantity(dish.id)">-</button>
            <span>{{ quantities[dish.id] || 1 }}</span>
            <button @click="increaseQuantity(dish.id)">+</button>
            <button @click="addToCart(dish)">Ajouter au panier</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useCartStore } from '../stores/cart';
  
  export default {
    props: ['id'],
    setup() {
      const route = useRoute();
      const cartStore = useCartStore();
      const chef = ref({ name: '', dishes: [] });
      const quantities = ref({});
  
      onMounted(() => {
        const chefsData = {
          1: { name: 'Chef Pierre', dishes: [{ id: 1, name: 'Risotto' }, { id: 2, name: 'Pâtes Carbonara' }] },
          2: { name: 'Chef Marie', dishes: [{ id: 3, name: 'Boeuf Bourguignon' }, { id: 4, name: 'Gratin Dauphinois' }] }
        };
        chef.value = chefsData[route.params.id] || { name: 'Chef Inconnu', dishes: [] };
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
      };
  
      return { chef, quantities, increaseQuantity, decreaseQuantity, addToCart };
    },
  };
  </script>
