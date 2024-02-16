<template>
  <div>

    <div>
      <div class="container mx-auto h-screen flex flex-col justify-center items-center">
      <h1 class="text-3xl font-semibold mb-4">Dashboard</h1>
    
        <div class="flex space-x-4">
          <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="actModalSignIn">Sign In</button>
          <button class="bg-green-500 text-white px-4 py-2 rounded" @click="actModalSignUp">Sign Up</button>
        </div>
      </div>
    </div>

  <div>
    <ModalSign v-if="stateBtnSignIn" @emitBtnCancelFromModalSignIn="deleteModalSignIn"></ModalSign>
  </div>

  <div>
    <ModalSignUp v-if="stateBtnSignUp" @emitBtnCancelFromModalSignUp="deleteModalSignUp"></ModalSignUp>
  </div>

  </div>
</template>

<script lang="ts">
import { Component,Vue } from 'vue-property-decorator';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'

import ModalSign from './v-modalsign.vue'
import ModalSignUp from './v-modalsignup.vue'

@Component({
  components : {
    ModalSign,
    ModalSignUp
  }
})
export default class DashSign extends Vue {
  public stateBtnSignIn = false;
  public stateBtnSignUp = false;

  actModalSignIn() {
    this.stateBtnSignIn = true;
  }
  actModalSignUp() {
    this.stateBtnSignUp = true;
    console.log(`se activo el actmodalsignup : ${this.stateBtnSignUp}`)
  }
  deleteModalSignIn(btnCancel : boolean) {
    this.stateBtnSignIn = btnCancel
  }
  deleteModalSignUp(btnCancel : boolean) {
    this.stateBtnSignUp = btnCancel
  }
  mounted() {
    onAuthStateChanged(auth,async(user)=>{
      if(user) {
        this.$emit("userLogged",true)
      } else {
        //
      }
    })
  }
}
</script>