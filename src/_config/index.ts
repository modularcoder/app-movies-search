interface Config {
  navigationType: 'hash' | 'history'
  useSampleData?: boolean
  api: {
    useMocks?: boolean
    url: string
  }
}

const config: Config = {
  navigationType: 'hash',
  useSampleData: true,
  api: {
    useMocks: true,
    url: '/api',
  },
}

export default config
