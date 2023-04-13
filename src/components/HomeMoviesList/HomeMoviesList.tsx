import React from 'react';
import CarouselBlock from './CarouselBlock';
// import MovieListCard from './MovieListCard';

interface IMovies {
  id: number;
  title: string;
  release_date: string;
  backdrop_path: string;
}

interface IMovieList {
  listTitle: string;
  movies: IMovies[];
}

export const HomeMoviesList: React.FC<IMovieList> = ({ listTitle, movies }) => {
  return (
    <div className="container mx-auto max-w-screen-xl mb-24 p-4">
      {/* LIST HEADER */}
      <div className="flex justify-between items-center mb-[20px]">
        <span className="text-gray-200 font-semibold text-[36px]">
          {listTitle}
        </span>
        <span className="text-gray-400 text-[20px]">View all</span>
      </div>
      {/* CARDS */}
      <CarouselBlock movies={movies} />
    </div>
  );
};

export default HomeMoviesList;
