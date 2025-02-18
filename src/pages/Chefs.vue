<template>
    <div>
        <h1>Nos Chefs</h1>
        <ul>
            <li v-for="chef in chefs" :key="chef.id">
                <router-link class="chefs" :to="`/chefs/${chef.id}`">{{ chef.name }}<br><p>{{ chef.description }}</p></router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import { ref, onMounted } from 'vue';
    import { chefsData } from '../data/chefs';
  
    export default {
        setup() {
            const chefs = ref([]);
  
            onMounted(() => {
                chefs.value = chefsData;
            });

            return { chefs };
        }
    };
</script>