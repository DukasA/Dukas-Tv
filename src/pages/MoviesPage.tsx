import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesByGenre } from '../api/fetchData/moviesPage/getMoviesByGenre';
import { getTrendingMovies } from '../api/fetchData/moviesPage/getTrendingMovies';
import GenresList from '../components/GenresList/GenresList';
import { Loader } from '../components/Loader/Loader';
import MoviesContainer from '../components/MoviesContainer/MoviesContainer';
/* import { IMovieCardProps } from '../interfaces/MovieCardProps';
import { IMovies } from '../interfaces/MovieDetailsProps/MoviesProps'; */
import { setGenre } from '../store/reducers/genreReducer';
import { loadHomeMovies } from '../store/reducers/moviesReducer';
import { RootState } from '../store/store';

export const MoviesPage: React.FC = () => {
  const dispatch = useDispatch();
  const genreSelector = (state: RootState): string => state.genre.genre;
  const genre: string = useSelector<RootState, string>(genreSelector);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  /* const data: IMovieCardProps[] = useSelector(
    (state: { movies: IMovies }) => state.movies.movies,
  ); */

  useEffect(() => {
    /* if (data.length === 0) {} */ // ЕСЛИ ПУСТОЙ МАССИВ - ДЕЛАЕМ ЗАПРОС
    try {
      setIsLoading(true);
      getTrendingMovies()
        .then((response) => {
          dispatch(loadHomeMovies(response.data.results));
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.log('Error:' + error);
    }
  }, []);

  const handleGenreChange = async (genre: string) => {
    try {
      setIsLoading(true);
      const response = await getMoviesByGenre(genre);
      dispatch(loadHomeMovies(response.data.results));
      dispatch(setGenre(genre));
      console.log(response.data.results);
      setIsLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="w-full h-full p-4 pr-2 lg:pl-[10%] lg:pr-[10%] md:pl-[5%] md:pr-[5%] sm:pr-[5%] sm:pl-[5%]">
      <GenresList onClick={handleGenreChange} value={genre} />
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <MoviesContainer />
      )}
    </div>
  );
};

export default MoviesPage;
