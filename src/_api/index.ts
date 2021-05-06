import config from '@/_config'

import instance from './client'
import movies from './movies/movies'

const init = async (): Promise<void> => {
  if (config.api.useMocks) {
    const apiMocks = await import('./_mocks/')
    // Remove all SW caches
    const cachesNames = await caches.keys()

    await Promise.all(cachesNames.map((name) => caches.delete(name)))
    await apiMocks.default.init()
  }
}

export default { instance, movies, init }
export { init, instance, movies }
