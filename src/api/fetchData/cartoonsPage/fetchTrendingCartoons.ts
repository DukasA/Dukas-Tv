import axios from 'axios';
import { apiConfig } from '../../apiConfig';

export const fetchTrendingCartoons = async (page: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiConfig.API_KEY}&language=en-US&with_genres=16&without_genres=35,10749&page=${page}`,
  );
  return response;
};
