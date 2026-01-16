import type { TmdbMovieList, TmdbMovieListItem } from '@/shared/tmdb/tmdb-types'
import type { Movie, MovieGenre, MovieList } from './movie-model'

export function movieListMapper(movies: TmdbMovieList): MovieList {
  const results = movies.results.map(movieListItemMapper)

  return {
    page: movies.page,
    results,
    totalPages: movies.total_pages,
    totalResults: movies.total_results,
  }
}

function movieListItemMapper(movie: TmdbMovieListItem): Movie {
  const genres = movie.genre_ids.map(movieGenreMapper)

  return {
    backdropPath: movie.backdrop_path,
    genres,
    id: movie.id,
    overview: movie.overview,
    popularity: movie.popularity,
    posterPath: movie.poster_path,
    releaseDate: movie.release_date,
    title: movie.title,
    type: 'movie',
    voteAverage: movie.vote_average,
    voteCount: movie.vote_count,
  }
}

function movieGenreMapper(genreId: number): MovieGenre {
  return { id: genreId, name: 'unknown' }
}
