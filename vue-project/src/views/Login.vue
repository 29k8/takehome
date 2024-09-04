<template>
  <div class="max-w-md mx-auto p-6 border border-gray-300 rounded-lg">
    <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label for="username" class="block mb-2 font-medium">Username:</label>
        <input
          type="text"
          id="username"
          v-model="username"
          required
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block mb-2 font-medium">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div v-if="error" class="text-red-500 mb-4">
        {{ error }}
      </div>
      <button
        type="submit"
        class="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import apiClient from '../services/api';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await apiClient.post('/token/', {
          username: this.username,
          password: this.password
        });

        // Store the JWT tokens in localStorage
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);

        this.$router.push({ name: 'Home' });
      } catch (err) {
        this.error = 'Invalid username or password.' + err;
      }
    }
  }
};
</script>
