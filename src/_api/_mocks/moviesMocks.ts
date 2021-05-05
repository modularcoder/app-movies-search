// import _ from 'lodash'
import { rest } from 'msw'

import config from '@/_config'

const apiUrl = config.api.url

const userMocks = [
  rest.get(`${apiUrl}/movies`, async (req, res, ctx) => {
    // const limit = parseInt(req.params.limit || '10')
    // const offset = parseInt(req.params.offset || '0')

    const result = {
      books: [],
      count: 0,
    }

    return res(
      // Set custom status
      ctx.status(200),
      // Delay the response
      ctx.delay(500),
      // send JSON response body
      ctx.json(result),
    )
  }),

  rest.get(`${apiUrl}/movies/:movieId`, (req, res, ctx) => {
    // const { movieId } = req.params
    // const user = booksData.byId[bookId]

    const movie = {}

    if (movie) {
      return res(ctx.status(200), ctx.delay(200), ctx.json(movie))
    } else {
      return res(
        ctx.status(404),
        ctx.status(200),
        ctx.json({
          message: 'User not found',
        }),
      )
    }
  }),
]

export default userMocks
