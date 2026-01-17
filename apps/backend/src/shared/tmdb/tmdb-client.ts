import { env } from '@/config/env'
import axios from 'axios'
import type { TmdbMovieList } from './tmdb-types'

// ------------------------------------------------------------
// Axios Client Configuration
// ------------------------------------------------------------

export const client = axios.create({
  baseURL: env.TMDB_BASE_URL,
  params: {
    api_key: env.TMDB_API_KEY,
  },
  timeout: 5000,
})

// ------------------------------------------------------------
// TMDB Client
// ------------------------------------------------------------

export const tmdbClient = {
  movies: {
    getNowPlaying: (params: any) => client.get<TmdbMovieList>('/movie/now_playing', { params }),

    getPopular: (params: any) => client.get<TmdbMovieList>('/movie/popular', { params }),

    getTopRated: (params: any) => client.get<TmdbMovieList>('/movie/top_rated', { params }),

    getUpcoming: (params: any) => client.get<TmdbMovieList>('/movie/upcoming', { params }),
  },
}
