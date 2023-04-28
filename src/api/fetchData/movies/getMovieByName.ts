import axios from 'axios';
import { apiConfig } from '../../apiConfig';

export const getMovieByName = (query: string) => {
  const response = axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiConfig.API_KEY}&query="${query}"`,
  );
  return response;
};
