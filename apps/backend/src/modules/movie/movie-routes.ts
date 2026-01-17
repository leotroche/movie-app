import { schemaValidator } from '@/shared/middlewares/schema-validator'
import { asyncHandler } from '@/shared/utils/async-handler'
import express from 'express'
import { movieHandlers } from './movie-handlers'
import { movieSchema } from './movie-schema'

export const movieRouter = express.Router()

movieRouter.get(
  '/now-playing',
  schemaValidator(movieSchema.movieListQuery),
  asyncHandler(movieHandlers.getNowPlaying),
)
movieRouter.get(
  '/popular',
  schemaValidator(movieSchema.movieListQuery),
  asyncHandler(movieHandlers.getPopular),
)
movieRouter.get(
  '/top-rated',
  schemaValidator(movieSchema.movieListQuery),
  asyncHandler(movieHandlers.getTopRated),
)
movieRouter.get(
  '/upcoming',
  schemaValidator(movieSchema.movieListQuery),
  asyncHandler(movieHandlers.getUpcoming),
)
