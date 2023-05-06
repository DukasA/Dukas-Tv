import axios from 'axios';
import { apiConfig } from '../../apiConfig';

export const getTrendingSeries = async (page: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiConfig.API_KEY}&without_genres=16&page=${page}`,
  );
  return response;
};
