<template>
  <div>

    <div>
      <div class="container mx-auto h-screen flex flex-col justify-center items-center">
      <h1 class="text-3xl font-semibold mb-4">Dashboard</h1>
    
        <div class="flex space-x-4">
          <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="signIn">Sign In</button>
          <button class="bg-green-500 text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </div>
    </div>

  <div>
    <ModalSign @cancelBtn="deleteModal" @useroldlogged="approved" v-if="statusModalSign"></ModalSign>
  </div>

  <div>
    
  </div>

  </div>
</template>

<script lang="ts">
import { Component,Vue,Watch,Prop } from 'vue-property-decorator';
import ModalSign from './v-modalsign.vue'

@Component({
  components : {
    ModalSign
  }
})
export default class DashSign extends Vue {

  public statusModalSign = false;
  public statusUser = false;

  signIn() {
    this.statusModalSign = true;
  }

  deleteModal(cancelSign : boolean) {
    this.statusModalSign = cancelSign;
    console.log('button x');
  }

  approved(useroldlogged : boolean) {
    this.statusUser = useroldlogged;
  }

  @Watch('statusModalSign')
  onStatusModalSignChange(newValue: boolean, oldValue: boolean): void {
    console.log(`statusModalSign changed from ${oldValue} to ${newValue}`);
  }

  @Watch('statusUser')
  onStatusUserChange(newValue: boolean, oldValue: boolean): void {
    console.log(`statusUser changed from ${oldValue} to ${newValue}`);
    this.emitUserState = this.statusUser;
  }
  @Prop({default:false,type:Boolean}) emitUserState : boolean;

  constructor() {
    super();
    this.emitUserState = false;
  }
}
</script>