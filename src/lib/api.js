import axios from 'axios'

const apiBaseURL = 'https://api.attackontitanapi.com'

export default axios.create({
  baseURL: apiBaseURL
})
