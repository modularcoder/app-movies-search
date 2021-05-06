import faker from 'faker'
import { nanoid } from 'nanoid'
import { get as _get, keyBy as _keyBy } from 'lodash'
import { Movie } from '@/_types/Movie'

import moviesDataRaw from './moviesDataRaw.json'
import moviesService from '../movies'

const moviesById: { [key: string]: Movie } = {}
const moviesByActor: { [key: string]: Movie[] } = {}
const moviesByGenre: { [key: string]: Movie[] } = {}

const list: Movie[] = moviesDataRaw.map((item, index) => {
  const movie = {
    id: nanoid(),
    img: item.posterurl,
    title: item.title,
    isSeries: faker.datatype.boolean(),
    releaseDate: item.releaseDate,
    genres: item.genres,
    actors: item.actors,
  }

  movie.genres.forEach((genre) => {
    moviesByGenre[genre] = moviesByGenre[genre] || []
    moviesByGenre[genre].push(movie)
  })

  movie.actors.forEach((actor) => {
    moviesByActor[actor] = moviesByActor[actor] || []
    moviesByActor[actor].push(movie)
  })

  return movie
})

const moviesData = {
  list,
  byId: moviesById,
  byActor: moviesByActor,
  byGentre: moviesByGenre,
}

export default moviesData
