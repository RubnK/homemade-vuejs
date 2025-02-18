import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
    }),
    actions: {
        login(email, password) {
            // Simule une base de données d'utilisateurs
            const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
            const user = storedUsers.find(u => u.email === email && u.password === password);
            
            if (user) {
                this.user = { name: user.name, email };
                localStorage.setItem('user', JSON.stringify(this.user));
                return true;
            }
            return false;
        },
        register(name, email, password) {
            const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      
            // Vérifier si l'utilisateur existe déjà
            if (storedUsers.find(u => u.email === email)) {
                return false;
            }

            storedUsers.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(storedUsers));

            this.user = { name, email };
            localStorage.setItem('user', JSON.stringify(this.user));
            return true;
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
        }
    }
});
