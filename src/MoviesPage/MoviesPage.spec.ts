import { nextTick } from 'vue'
import { render, fireEvent, waitFor } from '@testing-library/vue'
import { setupServer } from 'msw/node'

import moviesMocks from '@/_api/movies/_mocks/moviesMocks'
import MoviesPage from './MoviesPage.vue'

const server = setupServer(...moviesMocks)

beforeAll(() => {
  server.listen()
})
afterAll(() => server.close())

describe('<MoviesPage />', () => {
  it('should search movies', async () => {
    const searchPhrase = 'dark Knight'
    const screen = render(MoviesPage)
    const searchInput = screen.getByPlaceholderText(/search movies.../i)

    await fireEvent.update(searchInput, searchPhrase)

    await waitFor(() => {
      const results = screen.container.querySelectorAll('.BaseCard')
      expect(results.length).toBe(4)
    })
  })
})
