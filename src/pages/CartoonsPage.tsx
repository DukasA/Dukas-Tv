import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchCartoonsByGenre,
  fetchTrendingCartoons,
} from '../api/fetchData/cartoons/fetchTrendingCartoons';
import GenresList from '../components/GenresList/GenresList';
import MoviesContainer from '../components/MoviesContainer/MoviesContainer';
import { load } from '../store/reducers/moviesReducer';

const CartoonsPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTrendingCartoons().then((data) => dispatch(load(data.data.results)));
  }, []);

  const handleGenreChange = async (genre: string) => {
    const response = await fetchCartoonsByGenre(genre);
    dispatch(load(response.data.results));
    console.log(response.data.results);
  };

  return (
    <div>
      <div className="w-full h-full p-4 pr-2 lg:pl-[10%] lg:pr-[10%] md:pl-[5%] md:pr-[5%] sm:pr-[5%] sm:pl-[5%]">
        <GenresList onClick={handleGenreChange} />
        <MoviesContainer />
      </div>
    </div>
  );
};

export default CartoonsPage;
