import axios from 'axios';
import { apiConfig } from '../../apiConfig';

export const getTrendingSeries = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiConfig.API_KEY}&without_genres=16`,
  );
  return response;
};
