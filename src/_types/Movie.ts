export type MovieGenre = {
  id: string
  name: string
}

export type MovieActor = {
  id: string
  name: string
}

export type Movie = {
  id: string
  title: string
  img: string
  isSeries: boolean
  releaseDate: string
  genres: MovieGenre[]
  actors: MovieActor[]
}
