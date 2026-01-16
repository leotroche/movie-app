import { asyncHandler } from '@/shared/utils/async-handler'
import express from 'express'
import { movieHandlers } from './movie-handlers'

const movieRouter = express.Router()

movieRouter.get('/popular', asyncHandler(movieHandlers.getPopular))

export { movieRouter }
