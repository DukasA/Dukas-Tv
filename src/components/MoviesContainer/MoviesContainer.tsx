import React from 'react';
import { useSelector } from 'react-redux';
import MovieListCard from '../MovieCard/MovieListCard';

interface IMovie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  name?: string;
  genre_ids: number[];
  vote_average: number;
  first_air_date?: string;
  backdrop_path: string;
}

interface IMovies {
  movies: IMovie[];
  homePageMovies: IMovie[];
}

const MoviesContainer: React.FC = () => {
  const data: IMovie[] = useSelector(
    (state: { movies: IMovies }) => state.movies.homePageMovies,
  );

  if (data.length === 0) {
    return <h1 className="text-3xl text-white">Nothing not found</h1>;
  }

  console.log(data);
  return (
    <div className="">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
        {data.map((movie) => (
          <MovieListCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MoviesContainer;
