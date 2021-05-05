import config from '@/_config'

import instance from './client'
import movies from './movies/movies'

let apiMocks: any

if (config.api.useMocks || process.env.NODE_ENV === 'test') {
  apiMocks = require('./_mocks/')
}

const init = async (): Promise<void> => {
  if (apiMocks) {
    // Remove all SW caches
    const cachesNames = await caches.keys()

    await Promise.all(cachesNames.map((name) => caches.delete(name)))

    await apiMocks.default.init()
  }
}

export default { instance, movies, init }
export { init, instance, movies }
