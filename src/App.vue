    <template>
      <div id="app">
        <DashSign v-if="!stateUser" @userLogged="toggleUserState"></DashSign>
        <DashClient v-if="stateUser"></DashClient>
      </div>
    </template>

    <script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import DashSign from './components/v-dashsign.vue';
    import DashClient from './components/v-dashclient.vue'


    @Component({
      components: {
        DashSign,
        DashClient
      },
    })
    export default class App extends Vue {
      public stateUser = false;

      toggleUserState(onAuthStateChanged : boolean) {
        if(onAuthStateChanged) {
          this.stateUser = onAuthStateChanged
        } else {
          this.stateUser = !onAuthStateChanged
        }
      }
    }
    </script>