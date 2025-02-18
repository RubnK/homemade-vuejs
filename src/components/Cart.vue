<template>
    <div>
        <h2>Panier</h2>
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Quantité</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cartStore.items" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>
                        <button @click="cartStore.removeFromCart(item.id)">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import { useCartStore } from '../stores/cart';
    import { onMounted } from 'vue';
    import { initializeCart } from '../stores/cart';
  
    export default {
        setup() {
            const cartStore = useCartStore();
            onMounted(() => {
                initializeCart();
            });
            return { cartStore };
        },
    };
</script>
  