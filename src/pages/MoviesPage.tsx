import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiConfig } from '../api/apiConfig';
import { fetchCartoonsByGenre } from '../api/fetchData/cartoons/fetchTrendingCartoons';
import GenresList from '../components/GenresList/GenresList';
import MoviesContainer from '../components/MoviesContainer/MoviesContainer';
import { IMovieCardProps } from '../interfaces/MovieCardProps';
import { load } from '../store/reducers/moviesReducer';

export const MoviesPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get<{ results: IMovieCardProps[] }>(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiConfig.API_KEY}&sort_by=popularity.desc&without_genres=16,10751&page=1`,
        );
        dispatch(load(response.data.results));
      } catch (error) {
        console.log('Error:' + error);
      }
    };

    getMovies();
  }, []);

  const handleGenreChange = async (genre: string) => {
    const response = await fetchCartoonsByGenre(genre);
    dispatch(load(response.data.results));
    console.log(response.data.results);
  };

  return (
    <div className="w-full h-full p-4 pr-2 lg:pl-[10%] lg:pr-[10%] md:pl-[5%] md:pr-[5%] sm:pr-[5%] sm:pl-[5%]">
      <GenresList onClick={handleGenreChange} />
      <MoviesContainer />
    </div>
  );
};

export default MoviesPage;
