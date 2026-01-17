import type { Request, Response } from 'express'
import { movieService } from './movie-service'

async function getNowPlaying(req: Request, res: Response) {
  const params = req.query
  const nowPlayingMovies = await movieService.getNowPlaying(params)
  res.status(200).json(nowPlayingMovies)
}

async function getPopular(req: Request, res: Response) {
  const params = req.query
  const popularMovies = await movieService.getPopular(params)
  res.status(200).json(popularMovies)
}

async function getTopRated(req: Request, res: Response) {
  const params = req.query
  const topRatedMovies = await movieService.getTopRated(params)
  res.status(200).json(topRatedMovies)
}

async function getUpcoming(req: Request, res: Response) {
  const params = req.query
  const upcomingMovies = await movieService.getUpcoming(params)
  res.status(200).json(upcomingMovies)
}

export const movieHandlers = {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
}
