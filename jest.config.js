module.exports = {
  rootDir: 'src',
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },
  testMatch: ['**//*.[jt]s?(x)', '**/?(*.)+(spec).[jt]s?(x)'],
}
