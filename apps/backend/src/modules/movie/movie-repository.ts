import { tmdbClient } from '@/shared/tmdb/tmdb-client'
import type { TmdbMovieList } from '@/shared/tmdb/tmdb-types'

async function findPopular() {
  const { data } = await tmdbClient.get<TmdbMovieList>('/movie/popular')
  return data
}

export const movieRepository = {
  findPopular,
}
