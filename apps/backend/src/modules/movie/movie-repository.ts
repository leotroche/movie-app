import { tmdbClient } from '@/shared/tmdb/tmdb-client'
import type { MovieListParams } from './movie-model'

async function fetchNowPlaying(params?: MovieListParams) {
  const response = await tmdbClient.movies.getNowPlaying(params)
  return response.data
}

async function fetchPopular(params?: MovieListParams) {
  const response = await tmdbClient.movies.getPopular(params)
  return response.data
}

async function fetchTopRated(params?: MovieListParams) {
  const response = await tmdbClient.movies.getTopRated(params)
  return response.data
}

async function fetchUpcoming(params?: MovieListParams) {
  const response = await tmdbClient.movies.getUpcoming(params)
  return response.data
}

export const movieRepository = {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchUpcoming,
}
