import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import MovieListCard from '../MovieCard/MovieListCard';
import Title from '../Title/Title';

interface IMovie {
  id: number;
  title: string;
  release_date: string;
  backdrop_path: string;
}

interface IMovies {
  movies: IMovie[];
}

export const MoviesContainer: React.FC = () => {
  const location = useLocation();
  const data: IMovie[] = useSelector(
    (state: { movies: IMovies }) => state.movies.movies,
  );
  return (
    <div className="w-full h-full p-4 pr-2 lg:pl-[10%] lg:pr-[10%] md:pl-[5%] md:pr-[5%] sm:pr-[5%] sm:pl-[5%]">
      <Title title={location.pathname.slice(1).toUpperCase()} />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
        {data.map((movie) => (
          <MovieListCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MoviesContainer;
