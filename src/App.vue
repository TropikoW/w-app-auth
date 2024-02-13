<template>
  <div id="app">
    <NavBar></NavBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from './components/v-navbar.vue';


@Component({
  components: {
    NavBar,
  },
})
export default class App extends Vue {}
</script>