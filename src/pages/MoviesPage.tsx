import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { apiConfig } from '../api/apiConfig';
import MoviesContainer from '../components/MoviesContainer/MoviesContainer';
import { load } from '../store/reducers/moviesReducer';

export const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<any>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiConfig.API_KEY}&sort_by=popularity.desc&without_genres=16,10751&page=1`,
        );
        // убрать потом useState,тк не нужен в принципе???
        setMovies(response.data.results);
        dispatch(load(response.data.results));
      } catch (error) {
        console.log('Error:' + error);
      }
    };

    getMovies();
  }, []);

  console.log(movies);
  return (
    <div className="">
      <MoviesContainer />
    </div>
  );
};

export default MoviesPage;
