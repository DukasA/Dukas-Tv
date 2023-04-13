import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiConfig } from '../api/apiConfig';
// import { movieType, tmdbApi } from '../api/tmdbApi';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import HomeMoviesList from '../components/HomeMoviesList/HomeMoviesList';

export const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        /* `${apiConfig.baseUrl}movie/popular?api_key=${apiConfig.API_KEY}$with_genres=16`, */
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiConfig.API_KEY}&with_genres=16`,
      );
      setMovies(response.data.results.slice(0, 10));
      console.log(movies);
    };
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div className="bg-[#1c1c1e]">
      <HomeBanner />
      {/* MAIN */}
      <div className="pt-20">
        <HomeMoviesList listTitle="Trending" movies={movies} />
      </div>
    </div>
  );
};

export default HomePage;
