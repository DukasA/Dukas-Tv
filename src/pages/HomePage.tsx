import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiConfig } from '../api/apiConfig';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import MoviesContainer from '../components/MoviesContainer/MoviesContainer';
import { load } from '../store/reducers/moviesReducer';

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/week?api_key=${apiConfig.API_KEY}&language=en-US&page=1`,
        );
        dispatch(load(response.data.results));
      } catch (error) {
        console.log('Error:' + error);
      }
    };

    getMovies();
  }, []);

  return (
    <div className="bg-[#1c1c1e]">
      <HomeBanner />
      {/* MAIN */}
      <div className="pt-20">
        <MoviesContainer />
      </div>
    </div>
  );
};

export default HomePage;
