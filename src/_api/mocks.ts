import { setupWorker } from 'msw'
// import { setupServer } from 'msw/node'
import moviesMocks from './movies/_mocks/moviesMocks'

const start =
  import.meta.env.MODE !== 'test'
    ? setupWorker(...moviesMocks).start
    : setupWorker(...moviesMocks).start // @ToDo hanle server case setupServer(...moviesMocks)

export default {
  init: start,
}
