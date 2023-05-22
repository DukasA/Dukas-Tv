import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingSeries } from '../api/fetchData/seriesPage/getTrendingSeries';
import { getTrendingSeriesByGenre } from '../api/fetchData/seriesPage/getTrendingSeriesByGenre';
import GenresList from '../components/GenresList/GenresList';
import { Loader } from '../components/Loader/Loader';
import MoviesContainer from '../components/MoviesContainer/MoviesContainer';
import { Pagination } from '../components/Pagination/Pagination';
import { setGenre } from '../store/reducers/genreReducer';
import { loadHomeMovies } from '../store/reducers/moviesReducer';
import { RootState } from '../store/store';

const SeriesPage: React.FC = () => {
  const dispatch = useDispatch();
  const genreSelector = (state: RootState): string => state.genre.genre;
  const genre: string = useSelector<RootState, string>(genreSelector);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const scrollElement = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      getTrendingSeries(page)
        .then((response) => {
          dispatch(loadHomeMovies(response.data.results));
          setTotalPages(response.data.total_pages);
        })
        .finally(() => {
          setIsLoading(false);
        });
      dispatch(setGenre('Genre'));
    } catch (error) {
      alert(error);
    }
  }, [page]);

  const handleGenreChange = async (genre: string) => {
    try {
      setIsLoading(true);
      const response = await getTrendingSeriesByGenre(genre);
      dispatch(loadHomeMovies(response.data.results));
      dispatch(setGenre(genre));
      setIsLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <div className="w-full h-full p-4 pr-2 lg:pl-[10%] lg:pr-[10%] md:pl-[5%] md:pr-[5%] sm:pr-[5%] sm:pl-[5%]">
        <div ref={scrollElement}></div>
        <GenresList onClick={handleGenreChange} value={genre} />
        {/* SCROLL ELEMENT */}
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <MoviesContainer />
        )}
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        scrollElement={scrollElement}
      />
    </div>
  );
};

export default SeriesPage;
