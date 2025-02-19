<template>
  <div>
    <Header />
    <Search />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Search from './components/Search.vue';

export default {
  components: { Header, Footer, Search }
};
</script>