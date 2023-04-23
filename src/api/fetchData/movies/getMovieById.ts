import axios, { AxiosResponse } from 'axios';
import { apiConfig } from '../../apiConfig';

interface MovieData {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  genres: [
    genre: {
      id: number;
      name: string;
    },
  ];
  overview: string;
  vote_average: number;
  runtime: number;
  release_date: string;
  credits: {
    cast: [
      {
        name: string;
        profile_path: string;
      },
    ];
  };
}

export const getMovieById = (id: string): Promise<AxiosResponse<MovieData>> => {
  const response = axios.get<MovieData>(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiConfig.API_KEY}&language=en-Us&append_to_response=credits`,
  );
  return response;
};
