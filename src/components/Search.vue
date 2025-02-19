<template>
  <div>
    <input
      type="text"
      v-model="query"
      @input="search"
      placeholder="Rechercher un plat..."
      class="search-input"
    />
    
    <ul v-if="searchStore.results.length">
      <router-link
        v-for="result in searchStore.results"
        :key="result.id"
        :to="`/chefs/${result.chefId}`">
        <li>{{ result.name }} (par {{ result.chef }})</li>
      </router-link>
    </ul>

    <p v-else>🔍 Aucun résultat trouvé.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSearchStore } from '../stores/search';

const searchStore = useSearchStore();
const query = ref('');

const search = () => {
  searchStore.search(query.value);
};
</script>

<style scoped>
.search-input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
