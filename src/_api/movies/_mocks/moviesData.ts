import faker from 'faker'
import { nanoid } from 'nanoid'
import { get as _get, keyBy as _keyBy } from 'lodash'
import moment from 'moment'
import { Movie } from '@/_types/Movie'

const list: Movie[] = new Array(1000).fill(null).map((item, index) => {
  return {
    id: nanoid(),
    img: faker.image.cats(),
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
