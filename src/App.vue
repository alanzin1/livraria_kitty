<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <router-view></router-view>
  </div>
</template>

<script>
import "./styles/styles.css";
import HeaderBar from './components/Header.vue';

export default {
  name: 'App',
  components: {
    HeaderBar
  },
}
</script>
