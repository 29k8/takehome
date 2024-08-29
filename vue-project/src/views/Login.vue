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
import apiClient from '../services/api'

export default {
  data() {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    login() {
      // Prepare login data
      const loginData = {
        username: this.username,
        password: this.password
      }

      // Send login request
      apiClient.post('/login/', loginData)
        .then(response => {
          // Handle successful login
          console.log('Login successful:', response.data)
          this.$router.push('/offerings')
        })
        .catch(error => {
          // Handle login failure
          console.error('Login failed:', error)
          this.error = 'Invalid username or password. Please try again.'
        })
    }
  }
}
</script>
