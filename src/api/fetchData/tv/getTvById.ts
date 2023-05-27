import axios, { AxiosResponse } from 'axios';
import { IMovieDetailsProps } from '../../../interfaces/MovieDetailsProps/MovieDetailsProps';
import { apiConfig } from '../../apiConfig';

export const getTvById = (
  id: string,
): Promise<AxiosResponse<IMovieDetailsProps>> => {
  const response = axios.get<IMovieDetailsProps>(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${apiConfig.API_KEY}&language=en-US&append_to_response=credits,videos,similar,original_language,reviews`,
  );
  return response;
};
