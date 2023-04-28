import axios from 'axios';
import { apiConfig } from '../../apiConfig';

export const getTrendingMovies = () => {
  const response = axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${apiConfig.API_KEY}&language=en-US&page=1`,
  );
  return response;
};
