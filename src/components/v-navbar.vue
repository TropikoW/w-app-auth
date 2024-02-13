<template>
  <div class="container mx-auto h-screen flex flex-col justify-center items-center">
    <h1 class="text-3xl font-semibold mb-4">Dashboard</h1>
    
    <div class="flex space-x-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="signIn">Sign In</button>
      <button class="bg-green-500 text-white px-4 py-2 rounded">Sign Up</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component,Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
  signin =  false;
  signup = false;

  public signIn (event? : MouseEvent) : void {
    if(event) {
      this.signin = true;
    }
  }
}
</script>