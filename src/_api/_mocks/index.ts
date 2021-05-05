import { setupWorker } from 'msw'
import { setupServer } from 'msw/node'
import moviesMocks from './moviesMocks'

const start =
  process.env.NODE_ENV !== 'test'
    ? setupWorker(...moviesMocks).start
    : setupServer(...moviesMocks)

export default {
  init: start,
}
