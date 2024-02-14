    <template>
      <div id="app">
        <DashSign @handleDashSign="toggleDashSigIn" @approvedSignIn="userLogged" v-if="!statebtnsignin"></DashSign>
        <DashClient @handleDashClient="toggleDashClient" v-if="statebtnsignin"></DashClient>
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
      public statebtnsignin = false;
      public statebtnsignup = false;
      toggleDashSigIn(signIn : boolean) {
        this.statebtnsignin = signIn;
      }
      toggleDashClient(signOut : boolean) {
        this.statebtnsignin = signOut
      }
      userLogged(approvedSignIn : boolean) {
        this.statebtnsignin = approvedSignIn;
      }
    }
    </script>