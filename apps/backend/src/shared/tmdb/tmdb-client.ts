import { env } from '@/config/env'
import axios from 'axios'

export const tmdbClient = axios.create({
  baseURL: env.TMDB_BASE_URL,
  params: {
    api_key: env.TMDB_API_KEY,
    page: 1,
    language: 'en-US',
  },
  timeout: 5000,
})
