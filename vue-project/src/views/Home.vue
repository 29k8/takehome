<template>
  <div class="p-8">
    <h1 class="text-center text-2xl font-bold mb-8">Current Offerings</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="offering in offerings" :key="offering.id" class="bg-white rounded-lg p-4 shadow-lg">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold">{{ offering.title }}</h3>
          <div class="flex gap-2">
            <span v-for="tag in offering.tags" :key="tag" class="px-3 py-1 text-xs font-bold rounded-full text-white" :class="tagClass(tag)">
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="mb-4">
          <p class="text-gray-700">{{ offering.description }}</p>
        </div>
        <div class="flex justify-between mb-4">
          <div class="flex-1 flex justify-between px-2 text-sm">
            <span>Estimated Term</span>
            <span>{{ offering.estimated_term_years }}</span>
          </div>
          <div class="flex-1 flex justify-between px-2 text-sm">
            <span>Target Net IRR</span>
            <span>{{ offering.target_net_irr }}%</span>
          </div>
          <div class="flex-1 flex justify-between px-2 text-sm">
            <span>Minimum Investment</span>
            <span>${{ offering.minimum_investment }}K</span>
          </div>
        </div>
        <div class="flex justify-end gap-2">
          <router-link :to="`/offerings/${offering.id}`" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">View Details</router-link>
          <button class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400">Request Allocation</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import apiClient from '../services/api'

export default {
  data() {
    return {
      offerings: []
    }
  },
  created() {
    apiClient.get('/offerings/')
      .then(response => {
        this.offerings = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    tagClass(tag) {
      if (tag === 'Private Credit') return 'bg-gray-400'; // Tailwind's gray color
      if (tag === 'Current Income') return 'bg-yellow-500'; // Tailwind's yellow color
      return 'bg-gray-300'; // Default gray
    }
  }
}
</script>

<style scoped>
.home {
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.offerings-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.offering-card {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.offering-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.tags {
  display: flex;
  gap: 10px;
}

.tag {
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}

.private-credit {
  background-color: #ccc;
  color: #333;
}

.current-income {
  background-color: #f0a500;
  color: white;
}

.offering-body {
  margin-bottom: 20px;
}

.offering-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.detail {
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 14px;
}

.offering-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.view-details,
.request-allocation {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.view-details {
  background-color: #333;
  color: white;
  text-decoration: none;
}

.request-allocation {
  background-color: #f0a500;
  color: white;
}

.view-details:hover,
.request-allocation:hover {
  opacity: 0.9;
}
</style>
