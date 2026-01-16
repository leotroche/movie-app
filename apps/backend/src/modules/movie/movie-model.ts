interface PaginatedList<T> {
  page: number
  results: T[]
  totalPages: number
  totalResults: number
}

export interface Movie {
  backdropPath: string
  genres: MovieGenre[]
  id: number
  overview: string
  popularity: number
  posterPath: string
  releaseDate: string
  title: string
  voteAverage: number
  voteCount: number
  type: 'movie'
}

export interface MovieGenre {
  id: number
  name: string
}

export type MovieList = PaginatedList<Movie>
