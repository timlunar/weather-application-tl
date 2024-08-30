import axiosClient from 'axios'

const axios = axiosClient.create({
  baseURL: import.meta.env.VITE_API_URL
})

export default axios
