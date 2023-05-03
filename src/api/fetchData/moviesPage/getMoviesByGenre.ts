import axios from 'axios';
import { apiConfig } from '../../apiConfig';

export const getMoviesByGenre = async (genre: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiConfig.API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genre}&without_genres=16&page=1`,
  );
  return response;
};
