<template>
  <div class="p-8">
    <h1 class="text-center text-3xl font-bold mb-8">Current Offerings</h1>
    
    <!-- Display login prompt if the user is not authenticated -->
    <div v-if="!isAuthenticated" class="text-center text-red-600 font-bold">
      Login required to see offerings.
    </div>

    <!-- Display offerings if the user is authenticated -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="offering in offerings" :key="offering.id" class="bg-white rounded-lg p-6 shadow-lg">
        <!-- Offering Title and Tags -->
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-semibold text-gray-800">{{ offering.title }}</h3>
          <div class="flex gap-2">
            <span v-for="tag in offering.tags" :key="tag" class="px-3 py-1 text-xs font-bold rounded-full text-white" :class="tagClass(tag)">
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Offering Description -->
        <div class="mb-4">
          <p class="text-gray-600">{{ offering.description }}</p>
        </div>

        <!-- Offering Details -->
        <div class="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-700">
          <div class="flex flex-col">
            <span class="font-semibold">Estimated Term</span>
            <span>{{ offering.estimated_term_years }} years</span>
          </div>
          <div class="flex flex-col">
            <span class="font-semibold">Target Net IRR</span>
            <span>{{ offering.target_net_irr }}%</span>
          </div>
          <div class="flex flex-col">
            <span class="font-semibold">Minimum Investment</span>
            <span>${{ offering.minimum_investment }}K</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-end gap-4">
          <router-link :to="`/offerings/${offering.id}`" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
            View Details
          </router-link>
          <button class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400">
            Request Allocation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from '../services/api';

export default {
  data() {
    return {
      offerings: [],
      isAuthenticated: false, // Track if the user is authenticated
    };
  },
  created() {
    // Check if the user is authenticated by checking the token in localStorage
    const token = localStorage.getItem('access_token');
    
    if (token) {
      this.isAuthenticated = true;
      // Fetch offerings if the user is authenticated
      apiClient.get('/offerings/')
        .then(response => {
          this.offerings = response.data;
        })
        .catch(error => {
          console.error('Error fetching offerings:', error);
        });
    }
  },
  methods: {
    tagClass(tag) {
      if (tag === 'Private Credit') return 'bg-gray-400';
      if (tag === 'Current Income') return 'bg-yellow-500';
      return 'bg-gray-300';
    }
  }
};
</script>

<style scoped>
/* Optional: Add additional styling if needed */
</style>
