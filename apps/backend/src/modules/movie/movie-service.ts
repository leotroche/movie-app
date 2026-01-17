import type { TmdbPaginatedListParams } from '@/shared/tmdb/tmdb-client'
import { movieListMapper } from './movie-mapper'
import { movieRepository } from './movie-repository'

async function getNowPlaying(params?: TmdbPaginatedListParams) {
  const rawMovies = await movieRepository.fetchNowPlaying(params)
  return movieListMapper(rawMovies)
}

async function getPopular(params?: TmdbPaginatedListParams) {
  const rawMovies = await movieRepository.fetchPopular(params)
  return movieListMapper(rawMovies)
}

async function getTopRated(params?: TmdbPaginatedListParams) {
  const rawMovies = await movieRepository.fetchTopRated(params)
  return movieListMapper(rawMovies)
}

async function getUpcoming(params?: TmdbPaginatedListParams) {
  const rawMovies = await movieRepository.fetchUpcoming(params)
  return movieListMapper(rawMovies)
}

export const movieService = {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
}
