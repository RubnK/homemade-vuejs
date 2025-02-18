<template>
    <div>
        <h1>Nos Chefs</h1>
        <ul>
            <li v-for="chef in chefs" :key="chef.id">
                <router-link class="chefs" :to="`/chefs/${chef.id}`">{{ chef.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import { ref, onMounted } from 'vue';
  
    export default {
        setup() {
            const chefs = ref([]);
  
            onMounted(() => {
                chefs.value = [
                    { id: 1, name: 'Chef Pierre' },
                    { id: 2, name: 'Chef Marie' }
                ];
            });

            return { chefs };
        }
    };
</script>