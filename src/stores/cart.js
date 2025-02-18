import { defineStore } from 'pinia';
import { useAuthStore } from './auth';

export const useCartStore = defineStore('cart', {
    state: () => ({ items: [] }),
    actions: {
        addToCart(item, quantity) {
            if (quantity <= 0) return;
            const authStore = useAuthStore();
            if (!authStore.user) return;
            
            let cartData = JSON.parse(localStorage.getItem(`cart_${authStore.user.email}`)) || [];
            const existingItem = cartData.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cartData.push({ ...item, quantity });
            }
            localStorage.setItem(`cart_${authStore.user.email}`, JSON.stringify(cartData));
            this.items = cartData;
        },
        removeFromCart(itemId) {
            const authStore = useAuthStore();
            if (!authStore.user) return;
            
            let cartData = JSON.parse(localStorage.getItem(`cart_${authStore.user.email}`)) || [];
            cartData = cartData.filter(i => i.id !== itemId);
            localStorage.setItem(`cart_${authStore.user.email}`, JSON.stringify(cartData));
            this.items = cartData;
        },
        loadCart() {
            const authStore = useAuthStore();
            if (!authStore.user) return;
            this.items = JSON.parse(localStorage.getItem(`cart_${authStore.user.email}`)) || [];
        },
        clearCart() {
            const authStore = useAuthStore();
            if (!authStore.user) return;
            localStorage.removeItem(`cart_${authStore.user.email}`);
            this.items = [];
        }
    },
});

export const initializeCart = () => {
    const authStore = useAuthStore();
    const cartStore = useCartStore();
    if (authStore.user) {
        cartStore.loadCart();
    }
};