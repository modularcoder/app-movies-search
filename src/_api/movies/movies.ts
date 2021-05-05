import { AxiosResponse } from 'axios'
import { Movie } from '@/_types/Movie'
import apiClient from '../client'

export interface MoviesListResponse {
  movies: Movie[]
  count: number
}

export interface MoviesService {
  getOne(movieId: string): Promise<Movie>
  getList(params?: any): Promise<MoviesListResponse>
}

const moviesService: MoviesService = {
  getOne(movieId: string) {
    return apiClient
      .get(`/movies/${movieId}`)
      .then((res: AxiosResponse<Movie>) => res.data)
  },
  getList(params: any) {
    return apiClient
      .get(`/movies`, {
        params,
      })
      .then((res: AxiosResponse<MoviesListResponse>) => res.data)
  },
}

export default moviesService
