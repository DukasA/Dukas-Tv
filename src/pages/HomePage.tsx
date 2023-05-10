import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMovieByName } from '../api/fetchData/movies/getMovieByName';
import { getAllTrendingMovies } from '../api/fetchData/homePage/getAllTrendingMovies';
import { getTrendingMoviesByGenre } from '../api/fetchData/homePage/getTrendingMoviesByGenre';
import GenresList from '../components/GenresList/GenresList';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import MoviesContainer from '../components/MoviesContainer/MoviesContainer';
import { loadHomeMovies } from '../store/reducers/moviesReducer';
import { setGenre } from '../store/reducers/genreReducer';
import { RootState } from '../store/store';
import { Pagination } from '../components/Pagination/Pagination';
import { Loader } from '../components/Loader/Loader';

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const scrollElement = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /* РАЗОБРАТЬСЯ С ТИПИЗАЦИЕЙ НА СТОРОНЕ REDUX И ЗДЕСЬ */
  const genreSelector = (state: RootState): string => state.genre.genre;
  const genre: string = useSelector<RootState, string>(genreSelector);

  useEffect(() => {
    /* if (data.length === 0) { */
    try {
      setIsLoading(true);
      getAllTrendingMovies(page)
        .then((response) => {
          dispatch(loadHomeMovies(response.data.results));
          setTotalPages(response.data.total_pages);
          dispatch(setGenre('Genre'));
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.log('Error:' + error);
    }
    /* } */
  }, [page]);

  const handleGenreChange = async (genre: string) => {
    try {
      setIsLoading(true);
      const response = await getTrendingMoviesByGenre(genre);
      dispatch(loadHomeMovies(response.data.results));
      dispatch(setGenre(genre));
      setIsLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  const handleInputMovieName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (value !== '') {
        setIsLoading(true);
        getMovieByName(value)
          .then((response) => {
            dispatch(loadHomeMovies(response.data.results));
            dispatch(setGenre('Genre'));
          })
          .finally(() => {
            setIsLoading(false);
          });
        setValue('');
      } else {
        setValue('Type something!');
      }
    }
  };
  return (
    <div className="bg-[#1c1c1e]">
      <HomeBanner />
      {/* MAIN */}
      <div className="w-full h-full p-4 pr-2 lg:pl-[10%] lg:pr-[10%] md:pl-[5%] md:pr-[5%] sm:pr-[5%] sm:pl-[5%]">
        <div
          ref={scrollElement}
          className="flex justify-between items-center flex-wrap"
        >
          <GenresList onClick={handleGenreChange} value={genre} />
          <div className="flex items-center mb-5 md:mb-0 ">
            <span
              /* СДЕЛАТЬ ПОИСК ПО НАЖАТИЮ/ПРИДУМАТЬ ФУНКЦИЮ КАК СДЕЛАТЬ БЕЗ ПОВТОРА КОДА */
              className="dark:bg-gray-700 text-gray-400 text-sm rounded-l-lg pl-2 pr-2  pt-3 pb-3 outline-none cursor-pointer"
            >
              <img
                src="../../icons/SearchIcon.svg"
                alt="Search Icon"
                className="w-6 h-6"
              />
            </span>
            <input
              type="text"
              id="first_name"
              className="text-md rounded-r-lg p-2 pt-3 pb-3 bg-gray-700 placeholder-gray-400 text-white outline-none cursor-pointer"
              required
              placeholder="Search movies"
              value={value}
              onChange={handleInputMovieName}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
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
        setPage={setPage}
        totalPages={totalPages}
        scrollElement={scrollElement}
      />
    </div>
  );
};

export default HomePage;
