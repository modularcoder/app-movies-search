import _, { replace } from 'lodash'
import { rest } from 'msw'

import config from '@/_config'
import moviesDataSetAll, { createSearchMoviesDataSet } from './moviesData'

const apiUrl = config.api.url

const userMocks = [
  rest.get(`${apiUrl}/movies`, async (req, res, ctx) => {
    const limit = parseInt(req.url.searchParams.get('limit') || '10')
    const offset = parseInt(req.url.searchParams.get('offset') || '0')
    const search = req.url.searchParams
      .get('search')
      ?.toLocaleLowerCase()
      ?.replace(/[^a-zA-Z0-9\s]/gi, '')
    const searchBy = req.url.searchParams.get('searchBy')
    const searchKeywords = search
      ? search.split(' ').map((keyword) => keyword.trim())
      : []

    // If there is no searc therm just return the existing data
    if (!searchKeywords.length) {
      const moviesMatching = moviesDataSetAll.list

      const result = {
        movies: moviesMatching.slice(offset, offset + limit),
        count: moviesMatching.length,
      }

      return res(
        // Set custom status
        ctx.status(200),
        // Delay the response
        ctx.delay(200),
        // send JSON response body
        ctx.json(result),
      )
    }

    // For each keyword create a subset matching the keyword
    const moviesDataSet = searchKeywords.reduce((moviesDataSet, keyword) => {
      const moviesDataSetMatching = createSearchMoviesDataSet(moviesDataSet, {
        keyword,
      })

      return moviesDataSetMatching
    }, moviesDataSetAll)

    const result = {
      movies: moviesDataSet.list.slice(offset, offset + limit),
      count: moviesDataSet.list.length,
    }

    return res(
      // Set custom status
      ctx.status(200),
      // Delay the response
      ctx.delay(200),
      // send JSON response body
      ctx.json(result),
    )
  }),

  rest.get(`${apiUrl}/movies/:movieId`, (req, res, ctx) => {
    const { movieId } = req.params
    const movie = moviesDataSetAll.byId[movieId]

    if (movie) {
      return res(ctx.status(200), ctx.delay(200), ctx.json(movie))
    } else {
      return res(
        ctx.status(404),
        ctx.status(200),
        ctx.json({
          message: 'Movie not found',
        }),
      )
    }
  }),
]

export default userMocks
