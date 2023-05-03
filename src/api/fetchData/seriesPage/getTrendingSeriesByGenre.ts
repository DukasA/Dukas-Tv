import axios from 'axios';
import { apiConfig } from '../../apiConfig';

export const getTrendingSeriesByGenre = async (genre: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=${apiConfig.API_KEY}&with_genres=${genre}&page=1
    `,
  );
  return response;
};
