import axios from 'axios'
import config from '../_config'

const apiService = axios.create({
  baseURL: config.api.url,
})

export default apiService
