import { asyncHandler } from '@/shared/utils/async-handler'
import express from 'express'
import { movieHandlers } from './movie-handlers'

export const movieRouter = express.Router()

movieRouter.get('/now-playing', asyncHandler(movieHandlers.getNowPlaying))
movieRouter.get('/popular', asyncHandler(movieHandlers.getPopular))
movieRouter.get('/top-rated', asyncHandler(movieHandlers.getTopRated))
movieRouter.get('/upcoming', asyncHandler(movieHandlers.getUpcoming))
