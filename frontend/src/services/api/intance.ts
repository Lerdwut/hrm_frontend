import axios, { type AxiosInstance } from 'axios'
export const instance: AxiosInstance = axios.create({
  baseURL: ' http://127.0.0.1:3000',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
