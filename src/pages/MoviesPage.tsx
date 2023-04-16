import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiConfig } from '../api/apiConfig';
import MoviesContainer from '../components/MoviesContainer/MoviesContainer';
import { load } from '../store/reducers/moviesReducer';

export const MoviesPage: React.FC = () => {
  const dispatch = useDispatch();
  interface IMovie {
    movie: {
      id: number;
      title: string;
      release_date: string;
      backdrop_path: string;
    };
  }
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get<{ results: IMovie[] }>(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiConfig.API_KEY}&sort_by=popularity.desc&without_genres=16,10751&page=1`,
        );
        dispatch(load(response.data.results));
      } catch (error) {
        console.log('Error:' + error);
      }
    };

    getMovies();
  }, []);

  return (
    <div className="">
      <MoviesContainer />
    </div>
  );
};

export default MoviesPage;
