import { tmdbClient, type TmdbPaginatedListParams } from '@/shared/tmdb/tmdb-client'

async function fetchNowPlaying(params?: TmdbPaginatedListParams) {
  const response = await tmdbClient.movies.getNowPlaying(params)
  return response.data
}

async function fetchPopular(params?: TmdbPaginatedListParams) {
  const response = await tmdbClient.movies.getPopular(params)
  return response.data
}

async function fetchTopRated(params?: TmdbPaginatedListParams) {
  const response = await tmdbClient.movies.getTopRated(params)
  return response.data
}

async function fetchUpcoming(params?: TmdbPaginatedListParams) {
  const response = await tmdbClient.movies.getUpcoming(params)
  return response.data
}

export const movieRepository = {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchUpcoming,
}
