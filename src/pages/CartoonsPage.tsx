import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTrendingCartoons } from '../api/fetchData/cartoons/fetchTrendingCartoons';
import MoviesContainer from '../components/MoviesContainer/MoviesContainer';
import { load } from '../store/reducers/moviesReducer';

export const CartoonsPage: React.FC = () => {
  useEffect(() => {
    fetchTrendingCartoons().then((data) => dispatch(load(data.data.results)));
  }, []);
  const dispatch = useDispatch();
  return (
    <div className="">
      <MoviesContainer />
    </div>
  );
};

export default CartoonsPage;
