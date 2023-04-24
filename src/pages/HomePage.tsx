import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiConfig } from '../api/apiConfig';
import { fetchCartoonsByGenre } from '../api/fetchData/cartoons/fetchTrendingCartoons';
import GenresList from '../components/GenresList/GenresList';
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

  const handleGenreChange = async (genre: string) => {
    const response = await fetchCartoonsByGenre(genre);
    dispatch(load(response.data.results));
  };

  return (
    <div className="bg-[#1c1c1e]">
      <HomeBanner />
      {/* MAIN */}
      <div className="w-full h-full p-4 pr-2 lg:pl-[10%] lg:pr-[10%] md:pl-[5%] md:pr-[5%] sm:pr-[5%] sm:pl-[5%]">
        <GenresList onClick={handleGenreChange} />
        <MoviesContainer />
      </div>
    </div>
  );
};

export default HomePage;
