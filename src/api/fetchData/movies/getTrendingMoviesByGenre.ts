import axios from 'axios';
import { apiConfig } from '../../apiConfig';

export const getTrendingMoviesByGenre = (genre: string) => {
  const response = axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiConfig.API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genre}&page=1`,
  );
  return response;
};
