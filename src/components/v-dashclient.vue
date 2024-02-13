<template>
    <div class="container mx-auto h-screen p-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-semibold">Dashboard</h1>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">Sign Out</button>
      </div>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  
        <div class="bg-white p-4 rounded-md shadow-md">
          <h2 class="text-xl font-semibold mb-2">Nota 1</h2>
          <p class="text-gray-600">Contenido de la Nota 1...</p>
        </div>
  
      </div>
    </div>
  </template>

<script lang="ts">
    import {Component,Vue} from 'vue-property-decorator';

    @Component
    export default class Dashclient extends Vue {
        
    }
</script>