<template>
    <div class="bg-gray-900 opacity-100 w-full fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div class="h-full absolute"></div>
      <div class="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <h2 class="text-2xl font-semibold mb-4">Registrarse</h2>
        <form @submit.prevent="senDataUser">
          <div class="mb-4">
            <label for="firstName" class="block text-gray-700 mb-2">Nombres</label>
            <input type="text" id="firstName" v-model="userInput.name" class="w-full border border-gray-300 rounded-md py-2 px-4">
          </div>
          <div class="mb-4">
            <label for="lastName" class="block text-gray-700 mb-2">Apellidos</label>
            <input type="text" id="lastName" v-model="userInput.lastName" class="w-full border border-gray-300 rounded-md py-2 px-4">
          </div>
          <div class="mb-4">
            <label for="username" class="block text-gray-700 mb-2">Nombre de usuario</label>
            <input type="text" id="username" v-model="userInput.nickname" class="w-full border border-gray-300 rounded-md py-2 px-4">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 mb-2">Correo electrónico</label>
            <input type="email" id="email" v-model="userInput.email" class="w-full border border-gray-300 rounded-md py-2 px-4">
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 mb-2">Contraseña</label>
            <input type="password" id="password" v-model="userInput.password" class="w-full border border-gray-300 rounded-md py-2 px-4">
          </div>
          <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded w-full">Registrarse</button>
        </form>
        <button class="text-gray-600 text-right mt-4" @click="btnCancel">Cerrar</button>
      </div>
    </div>
  </template>

<script>
import { Component,Vue} from 'vue-property-decorator';

import { createUser } from '../app/SignUp.ts';
import { addNewUsers } from '../app/AddUsers.ts'

@Component
export default class ModalSignUp extends Vue {
    userInput = {
        name : '',
        lastname : '',
        nickname : '',
        email : '',
        password : ''
    }

    btnCancel() {
        this.$emit("emitBtnCancelFromModalSignUp",false)
    }
    async senDataUser() {
        await createUser(this.userInput.email,this.userInput.password)
        await addNewUsers(this.userInput.name,this.userInput.lastName,this.userInput.nickname,this.userInput.email,this.userInput.password)
    }
}
</script>