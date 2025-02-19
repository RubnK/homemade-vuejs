import { defineStore } from 'pinia';
import chefsData from '../assets/chefs.json';

export const useSearchStore = defineStore('search', {
  state: () => ({
    results: []
  }),
  actions: {
    search(query) {
      if (!query.trim()) {
        this.results = [];
        return;
      }

      this.results = chefsData.flatMap(chef =>
        chef.dishes
          .filter(dish => dish.name.toLowerCase().includes(query.toLowerCase()))
          .map(dish => ({
            id: dish.id,
            name: dish.name,
            chef: chef.name,
            chefId: chef.id
          }))
      );
    }
  }
});
