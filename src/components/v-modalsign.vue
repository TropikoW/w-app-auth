<template>
      <div class="bg-gray-900 opacity-100 w-full fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div class="h-full absolute"></div>
        <div class="bg-white p-8 rounded-lg shadow-lg w-1/2">
          <h2 class="text-2xl font-semibold mb-4">Iniciar sesión</h2>
          <form>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 mb-2">Correo electrónico</label>
              <input type="email" id="email" class="w-full border border-gray-300 rounded-md py-2 px-4">
            </div>
            <div class="mb-4">
              <label for="password" class="block text-gray-700 mb-2">Contraseña</label>
              <input type="password" id="password" class="w-full border border-gray-300 rounded-md py-2 px-4">
            </div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded w-full">Iniciar sesión</button>
          </form>
          <button class="text-gray-600 text-right mt-4" @click="cancelSign">Cerrar</button>
        </div>
      </div>
  </template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';

@Component
export default class ModalSign extends Vue {
  user = {
    email : '',
    password : ''
  }
  mounted() {
    onAuthStateChanged(auth,async(user)=> {
      if (user) {
        this.$emit("useroldlogged",true)
    } else {
      this.$emit("useroldlogged",false)
    }
    })
  }
  cancelSign = () => {
    this.$emit("cancelBtn",false);
  }
}


</script>