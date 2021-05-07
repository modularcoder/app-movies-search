import faker from 'faker'
import { nanoid } from 'nanoid'
import { get as _get, keyBy as _keyBy } from 'lodash'
import { Movie } from '@/_types/Movie'

import moviesDataRaw from './moviesDataRaw'

export type MoviesDataSet = {
  list: Movie[]
  byId: MoviesDictionary
  byActor: MoviesDictionaryGroup
  byGenre: MoviesDictionaryGroup
}

export type MoviesDictionary = { [key: string]: Movie }
export type MoviesDictionaryGroup = { [key: string]: Movie[] }

const moviesAll: Movie[] = moviesDataRaw.map((item: any) => {
  const movie = {
    id: nanoid(),
    img: item.posterurl,
    title: item.title,
    isSeries: faker.datatype.boolean(),
    releaseDate: item.releaseDate,
    genres: item.genres,
    actors: item.actors,
  }
  return movie
})

/**
 * Creates a movies data set (see MoviesDataSet type)
 *
 * @param movies
 * @returns MoviesDataSet
 */
export const createMoviesDataSet = (movies = moviesAll): MoviesDataSet => {
  const moviesById: MoviesDictionary = {}
  const moviesByActor: MoviesDictionaryGroup = {}
  const moviesByGenre: MoviesDictionaryGroup = {}

  movies.forEach((movie) => {
    moviesById[movie.id] = movie

    movie.genres.forEach((genre: string) => {
      moviesByGenre[genre] = moviesByGenre[genre] || []
      moviesByGenre[genre].push(movie)
    })

    movie.actors.forEach((actor: string) => {
      moviesByActor[actor] = moviesByActor[actor] || []
      moviesByActor[actor].push(movie)
    })
  })

  const moviesDataSet = {
    list: movies,
    byId: moviesById,
    byActor: moviesByActor,
    byGenre: moviesByGenre,
  }

  return moviesDataSet
}

/**
 * Creates a MoviesDataSet whwere movies mathch the keyword
 *
 * @param {object} moviesDataSet
 * @param {object} options
 * @returns {object} MoviesDataSet
 */

type CreateSearchMoviesDataSetOptions = {
  keyword?: string
  searchByTitle?: boolean
  searchByActor?: boolean
  searchByGenre?: boolean
}

export const createSearchMoviesDataSet = (
  moviesDataSet: MoviesDataSet,
  {
    keyword,
    searchByTitle,
    searchByActor,
    searchByGenre,
  }: CreateSearchMoviesDataSetOptions = {
    keyword: '',
    searchByTitle: true,
    searchByActor: true,
    searchByGenre: true,
  },
): MoviesDataSet => {
  if (!keyword) {
    return moviesDataSet
  }

  const weightsByMovieId: { [key: string]: number } = {}

  const increaseMovieSearchWeight = (movieId: string, weight = 1) => {
    weightsByMovieId[movieId] =
      typeof weightsByMovieId[movieId] === 'number'
        ? weightsByMovieId[movieId] + weight
        : weight
  }

  // Search by title
  searchByTitle &&
    moviesDataSet.list.forEach((movie) => {
      if (movie.title.toLocaleLowerCase().includes(keyword)) {
        increaseMovieSearchWeight(movie.id, 1)
      }
    })

  // Search by actor
  searchByActor &&
    Object.keys(moviesDataSet.byActor).forEach((actor) => {
      if (actor.toLocaleLowerCase().includes(keyword)) {
        const actorMovies = moviesDataSet.byActor[actor]

        actorMovies.forEach((movie) => increaseMovieSearchWeight(movie.id, 0.5))
      }
    })

  // Search by genre
  searchByGenre &&
    Object.keys(moviesDataSet.byGenre).forEach((genre) => {
      if (genre.toLocaleLowerCase().includes(keyword)) {
        const genreMovies = moviesDataSet.byGenre[genre]

        genreMovies.forEach((movie) => increaseMovieSearchWeight(movie.id, 0.5))
      }
    })

  const moviesMatching = Object.keys(weightsByMovieId).map(
    (movieId) => moviesDataSet.byId[movieId],
  )

  return createMoviesDataSet(moviesMatching)
}

const moviesData = createMoviesDataSet(moviesAll)

export default moviesData
