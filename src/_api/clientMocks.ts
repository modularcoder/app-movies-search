import { setupWorker } from 'msw'
import moviesMocks from './movies/_mocks/moviesMocks'

export default {
  init: setupWorker(...moviesMocks).start,
  movies: moviesMocks,
  all: [...moviesMocks],
}
