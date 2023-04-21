import axios from 'axios';
import { apiConfig } from '../../apiConfig';

export const fetchTrendingCartoons = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiConfig.API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=16&without_genres=35,10749`,
  );
  return response;
};

export const fetchCartoonsByGenre = async (genre: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiConfig.API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=16,28,${genre}&page=1`,
  );
  return response;
};
