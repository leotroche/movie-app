import { movieListMapper } from './movie-mapper'
import type { MovieListParams } from './movie-model'
import { movieRepository } from './movie-repository'

async function getNowPlaying({ language = 'en-US', page = 1 }: MovieListParams = {}) {
  const rawMovies = await movieRepository.fetchNowPlaying({ language, page })
  return movieListMapper(rawMovies)
}

async function getPopular({ language = 'en-US', page = 1 }: MovieListParams = {}) {
  const rawMovies = await movieRepository.fetchPopular({ language, page })
  return movieListMapper(rawMovies)
}

async function getTopRated({ language = 'en-US', page = 1 }: MovieListParams = {}) {
  const rawMovies = await movieRepository.fetchTopRated({ language, page })
  return movieListMapper(rawMovies)
}

async function getUpcoming({ language = 'en-US', page = 1 }: MovieListParams = {}) {
  const rawMovies = await movieRepository.fetchUpcoming({ language, page })
  return movieListMapper(rawMovies)
}

export const movieService = {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
}
