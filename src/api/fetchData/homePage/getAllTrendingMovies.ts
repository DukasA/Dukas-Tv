import axios from 'axios';
import { apiConfig } from '../../apiConfig';

export const getAllTrendingMovies = (page: number) => {
  const response = axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${apiConfig.API_KEY}&language=en-US&page=${page}`,
  );
  return response;
};
