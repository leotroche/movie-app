import type { Request, Response } from 'express'
import type { MovieListParams } from './movie-model'
import { movieService } from './movie-service'

type MovieListRequest = Request<{}, {}, {}, MovieListParams>

async function getNowPlaying(req: MovieListRequest, res: Response) {
  const nowPlayingMovies = await movieService.getNowPlaying(req.query)
  return res.status(200).json(nowPlayingMovies)
}

async function getPopular(req: MovieListRequest, res: Response) {
  const popularMovies = await movieService.getPopular(req.query)
  return res.status(200).json(popularMovies)
}

async function getTopRated(req: MovieListRequest, res: Response) {
  const topRatedMovies = await movieService.getTopRated(req.query)
  return res.status(200).json(topRatedMovies)
}

async function getUpcoming(req: MovieListRequest, res: Response) {
  const upcomingMovies = await movieService.getUpcoming(req.query)
  return res.status(200).json(upcomingMovies)
}

export const movieHandlers = {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
}
