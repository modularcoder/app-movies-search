import _ from 'lodash'
import { rest } from 'msw'

import config from '@/_config'
import moviesData from './moviesData'

const apiUrl = config.api.url

const userMocks = [
  rest.get(`${apiUrl}/movies`, async (req, res, ctx) => {
    const limit = parseInt(req.url.searchParams.get('limit') || '10')
    const offset = parseInt(req.url.searchParams.get('offset') || '0')
    const search = req.url.searchParams.get('search')
    const searchBy = req.url.searchParams.get('searchBy')

    const moviesMatching = moviesData.list

    const result = {
      movies: moviesMatching.slice(offset, offset + limit),
      count: moviesMatching.length,
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
