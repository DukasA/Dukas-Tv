import axios from 'axios';
import { IMovieCardProps } from '../../../interfaces/MovieCardProps';
import { apiConfig } from '../../apiConfig';

export const getTrendingMovies = async () => {
  const response = await axios.get<{ results: IMovieCardProps[] }>(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiConfig.API_KEY}&sort_by=popularity.desc&without_genres=16&page=1`,
  );
  return response;
};
