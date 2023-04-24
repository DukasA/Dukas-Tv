import axios, { AxiosResponse } from 'axios';
import { IMovieDetailsProps } from '../../../interfaces/MovieDetailsProps';
import { apiConfig } from '../../apiConfig';

export const getMovieById = (
  id: string,
): Promise<AxiosResponse<IMovieDetailsProps>> => {
  const response = axios.get<IMovieDetailsProps>(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiConfig.API_KEY}&language=en-Us&append_to_response=credits`,
  );
  return response;
};
