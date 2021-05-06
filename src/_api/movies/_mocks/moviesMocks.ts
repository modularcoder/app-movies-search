import _ from 'lodash'
import { rest } from 'msw'

import config from '@/_config'
import moviesData from './moviesData'

const apiUrl = config.api.url

const userMocks = [
  rest.get(`${apiUrl}/movies`, async (req, res, ctx) => {
    const limit = parseInt(req.url.searchParams.get('limit') || '10')
    const offset = parseInt(req.url.searchParams.get('offset') || '0')
    const search = req.url.searchParams.get('search')?.toLocaleLowerCase()
    const searchBy = req.url.searchParams.get('searchBy')

    // If there is no searc therm just return the existing data
    if (!search) {
      const moviesMatching = moviesData.list

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

    // There is a search param
    const weightsByMovieId: { [key: string]: number } = {}

    const increaseMovieSearchWeight = (movieId: string, weight = 1) => {
      weightsByMovieId[movieId] =
        typeof weightsByMovieId[movieId] === 'number'
          ? weightsByMovieId[movieId] + weight
          : weight
    }

    // Search by title
    moviesData.list.forEach((movie) => {
      if (movie.title.toLocaleLowerCase().includes(search)) {
        increaseMovieSearchWeight(movie.id, 1)
      }
    })

    // Search by actor
    Object.keys(moviesData.byActor).forEach((actor) => {
      if (actor.toLocaleLowerCase().includes(search)) {
        const actorMovies = moviesData.byActor[actor]

        actorMovies.forEach((movie) => increaseMovieSearchWeight(movie.id, 0.5))
      }
    })

    // Search by genre
    Object.keys(moviesData.byGenre).forEach((genre) => {
      if (genre.toLocaleLowerCase().includes(search)) {
        const genreMovies = moviesData.byGenre[genre]

        genreMovies.forEach((movie) => increaseMovieSearchWeight(movie.id, 0.5))
      }
    })

    const moviesMatching = Object.keys(weightsByMovieId)
      .map((movieId) => {
        return {
          ...moviesData.byId[movieId],
          searchMatchWeight: weightsByMovieId[movieId],
        }
      })
      // Sort by weigths
      .sort(
        (movie1, movie2) => movie2.searchMatchWeight - movie1.searchMatchWeight,
      )

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
  }),

  rest.get(`${apiUrl}/movies/:movieId`, (req, res, ctx) => {
    const { movieId } = req.params
    const movie = moviesData.byId[movieId]

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
