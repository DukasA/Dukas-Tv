import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartoonsByGenre } from '../api/fetchData/cartoonsPage/fetchCartoonsByGenre';
import { fetchTrendingCartoons } from '../api/fetchData/cartoonsPage/fetchTrendingCartoons';
import GenresList from '../components/GenresList/GenresList';
import MoviesContainer from '../components/MoviesContainer/MoviesContainer';
import { IMovieCardProps } from '../interfaces/MovieCardProps';
import { setGenre } from '../store/reducers/genreReducer';
import { loadHomeMovies } from '../store/reducers/moviesReducer';
import { setPageName } from '../store/reducers/moviesReducer';
import { RootState } from '../store/store';

interface IMovies {
  movies: IMovieCardProps[];
  pageName: string;
}

const CartoonsPage: React.FC = () => {
  const dispatch = useDispatch();
  const genreSelector = (state: RootState): string => state.genre.genre;
  const genre: string = useSelector<RootState, string>(genreSelector);
  const pageName = useSelector(
    (state: { movies: IMovies }) => state.movies.pageName,
  );

  useEffect(() => {
    fetchTrendingCartoons().then((data) =>
      dispatch(loadHomeMovies(data.data.results)),
    );
    dispatch(setPageName('cartoonsPage'));
  }, []);
  console.log(pageName);

  const handleGenreChange = async (genre: string) => {
    const response = await fetchCartoonsByGenre(genre);
    dispatch(loadHomeMovies(response.data.results));
    dispatch(setGenre(genre));
  };

  return (
    <div>
      <div className="w-full h-full p-4 pr-2 lg:pl-[10%] lg:pr-[10%] md:pl-[5%] md:pr-[5%] sm:pr-[5%] sm:pl-[5%]">
        <GenresList onClick={handleGenreChange} value={genre} />
        <MoviesContainer />
      </div>
    </div>
  );
};

export default CartoonsPage;
