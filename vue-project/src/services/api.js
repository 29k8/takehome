import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: false, // Adjust as needed
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default apiClient
