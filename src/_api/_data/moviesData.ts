import { get as _get, keyBy as _keyBy } from 'lodash'
// import moment from 'moment'
import { Movie } from '@/_types/Movie'

const list: Movie[] = []

const byId: { [key: number]: Movie } = _keyBy(list, 'id')

const moviesData = {
  list,
  byId,
}

export default moviesData
