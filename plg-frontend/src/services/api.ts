import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333/launches'
})

export { api }
