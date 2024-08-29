<template>
  <div>
    <h1>{{ offering.title }}</h1>
    <p>{{ offering.description }}</p>
    <p>Target Net IRR: {{ offering.target_net_irr }}%</p>
    <p>Estimated Term: {{ offering.estimated_term_years }} years</p>
    <p>Minimum Investment: ${{ offering.minimum_investment }}</p>
  </div>
</template>

<script>
import apiClient from '../services/api'

export default {
  data() {
    return {
      offering: {}
    }
  },
  created() {
    const id = this.$route.params.id
    apiClient.get(`/offerings/${id}/`)
      .then(response => {
        this.offering = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
