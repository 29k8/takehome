<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-gray-800 p-4 text-center">
    <div class="flex justify-center">
      <nav class="flex gap-8">
        <RouterLink to="/" class="text-white font-bold" active-class="text-yellow-500">Home</RouterLink>
        <RouterLink to="/about" class="text-white font-bold" active-class="text-yellow-500">About</RouterLink>
      </nav>
    </div>
  </header>

  <main class="p-8 bg-gray-100">
    <RouterView />
  </main>
</template>
