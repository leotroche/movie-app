interface PaginatedList<T> {
  page: number
  results: T[]
  totalPages: number
  totalResults: number
}

// ------------------------------------------------------------
// Movie List Models
// ------------------------------------------------------------

export interface Movie {
  backdropPath: string
  genres: MovieGenre[]
  id: number
  mediaType: 'movie'
  overview: string
  popularity: number
  posterPath: string
  releaseDate: string
  title: string
  voteAverage: number
  voteCount: number
}

export interface MovieGenre {
  id: number
  name: string
}

export type MovieList = PaginatedList<Movie>

// ------------------------------------------------------------
// Movie List Params
// ------------------------------------------------------------

export const MovieListLanguageEnum = ['en-US', 'es-MX'] as const

export type MovieListLanguage = (typeof MovieListLanguageEnum)[number]

export interface MovieListParams {
  language?: MovieListLanguage
  page?: number
}
