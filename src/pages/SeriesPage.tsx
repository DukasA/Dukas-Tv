import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingSeries } from '../api/fetchData/seriesPage/getTrendingSeries';
import { getTrendingSeriesByGenre } from '../api/fetchData/seriesPage/getTrendingSeriesByGenre';
import GenresList from '../components/GenresList/GenresList';
import MoviesContainer from '../components/MoviesContainer/MoviesContainer';
import { setGenre } from '../store/reducers/genreReducer';
import { loadHomeMovies } from '../store/reducers/moviesReducer';
import { RootState } from '../store/store';

const SeriesPage: React.FC = () => {
  const dispatch = useDispatch();
  const genreSelector = (state: RootState): string => state.genre.genre;
  const genre: string = useSelector<RootState, string>(genreSelector);

  useEffect(() => {
    try {
      getTrendingSeries().then((response) => {
        dispatch(loadHomeMovies(response.data.results));
      });
      dispatch(setGenre('Genre'));
      console.log('rerender');
    } catch (error) {
      alert(error);
    }
  }, []);

  const handleGenreChange = async (genre: string) => {
    const response = await getTrendingSeriesByGenre(genre);
    dispatch(loadHomeMovies(response.data.results));
    dispatch(setGenre(genre));
    console.log(response.data.results);
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

export default SeriesPage;
