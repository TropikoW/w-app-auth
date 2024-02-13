    <template>
      <div id="app">
        <NavBar @handlestatesignin="handleDashClient" v-if="!statebtnsignin"></NavBar>
        <Dashclient v-if="statebtnsignin"></Dashclient>
      </div>
    </template>

    <script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import NavBar from './components/v-navbar.vue';
    import Dashclient from './components/v-dashclient.vue'


    @Component({
      components: {
        NavBar,
        Dashclient
      },
    })
    export default class App extends Vue {
      public statebtnsignin = false;
      handleDashClient(signIn : boolean) {
        this.statebtnsignin = signIn;
      }
    }
    </script>