import { movieListMapper } from './movie-mapper'
import { movieRepository } from './movie-repository'

async function getPopular() {
  const rawMovies = await movieRepository.findPopular()
  return movieListMapper(rawMovies)
}

export const movieService = {
  getPopular,
}
