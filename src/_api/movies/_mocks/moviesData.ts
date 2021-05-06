import faker from 'faker'
import { nanoid } from 'nanoid'
import { get as _get, keyBy as _keyBy } from 'lodash'
import moment from 'moment'
import { Movie, MovieActor, MovieGenre } from '@/_types/Movie'

const genres: MovieGenre[] = new Array(10).fill(null).map(() => {
  return {
    id: nanoid(),
    name: faker.music.genre(),
  }
})

const actors: MovieActor[] = new Array(100).fill(null).map(() => {
  return {
    id: nanoid(),
    name: faker.name.title(),
  }
})

const list: Movie[] = new Array(1000).fill(null).map((item, index) => {
  return {
    id: nanoid(),
    img: faker.image.imageUrl(320, 180, undefined, true),
    title: faker.music.genre(),
    isSeries: faker.datatype.boolean(),
    releaseDate: faker.datatype.datetime().toString(),
    genres: [],
    actors: [],
  }
})

const byId: { [key: number]: Movie } = _keyBy(list, 'id')

const moviesData = {
  list,
  byId,
}

export default moviesData
