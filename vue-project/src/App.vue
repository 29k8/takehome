<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import apiClient from './services/api';

const isAuthenticated = ref(!!localStorage.getItem('access_token'));

const router = useRouter();

async function logout() {
  try {

    const response = await apiClient.post('/logout/', {
      refresh_token: localStorage.getItem('refresh_token')
    });

    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    isAuthenticated.value = false;

    router.push('/');
  } catch (error) {
    console.error('Logout failed', error);
  }
}
</script>

<template>
  <header class="bg-gray-800 p-4 text-center">
    <div class="flex justify-center">
      <nav class="flex gap-8">
        <RouterLink to="/" class="text-white font-bold" active-class="text-yellow-500">Home</RouterLink>
        <RouterLink to="/about" class="text-white font-bold" active-class="text-yellow-500">About</RouterLink>
        <RouterLink v-if="!isAuthenticated" to="/login" class="text-white font-bold" active-class="text-yellow-500">Login</RouterLink>
        <button v-else @click="logout" class="text-white font-bold hover:text-yellow-500">Logout</button>
      </nav>
    </div>
  </header>

  <main class="p-8 bg-gray-100">
    <RouterView />
  </main>
</template>
