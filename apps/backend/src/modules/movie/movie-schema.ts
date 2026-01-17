import { z } from 'zod'
import { MovieListLanguageEnum } from './movie-model'

const movieListQuery = z.object({
  query: z.object({
    language: z.enum(MovieListLanguageEnum).optional(),
    page: z.coerce.number().min(1).optional(),
  }),
})

export const movieSchema = {
  movieListQuery,
}
