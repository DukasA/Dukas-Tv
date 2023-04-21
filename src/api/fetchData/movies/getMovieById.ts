import axios, { AxiosResponse } from 'axios';
import { apiConfig } from '../../apiConfig';

interface MovieData {
  id: number;
  title: string;
  poster_path: string;
}

export const getMovieById = (id: string): Promise<AxiosResponse<MovieData>> => {
  const response = axios.get<MovieData>(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiConfig.API_KEY}&language=en-Us`,
  );
  return response;
};
