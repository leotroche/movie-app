import type { Request, Response } from 'express'
import { movieService } from './movie-service'

async function getPopular(_req: Request, res: Response) {
  const popularMovies = await movieService.getPopular()
  res.status(200).json(popularMovies)
}

export const movieHandlers = {
  getPopular,
}
