import React from 'react';
import { useLocation } from 'react-router';
import MovieListCard from '../HomeMoviesList/MovieListCard';
import Title from '../Title/Title';

export const MoviesContainer: React.FC = () => {
  const location = useLocation();
  return (
    <div className="w-full h-full p-4 pr-2 lg:pl-[10%] lg:pr-[10%] md:pl-[5%] md:pr-[5%] sm:pr-[5%] sm:pl-[5%]">
      <Title title={location.pathname.slice(1)} />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
        <MovieListCard
          genres={['Action', 'Fantasy', 'Family']}
          title="Avatar"
          imgUrl="https://fwcdn.pl/fpo/91/13/299113/8028716.3.jpg"
          metaInformation="USA, 2010"
        />
        <MovieListCard
          genres={['Action', 'Fantasy', 'Family']}
          title="Avatar"
          imgUrl="https://fwcdn.pl/fpo/91/13/299113/8028716.3.jpg"
          metaInformation="USA, 2010"
        />
        <MovieListCard
          genres={['Action', 'Fantasy', 'Family']}
          title="Avatar"
          imgUrl="https://fwcdn.pl/fpo/91/13/299113/8028716.3.jpg"
          metaInformation="USA, 2010"
        />
        <MovieListCard
          genres={['Action', 'Fantasy', 'Family']}
          title="Avatar"
          imgUrl="https://fwcdn.pl/fpo/91/13/299113/8028716.3.jpg"
          metaInformation="USA, 2010"
        />
        <MovieListCard
          genres={['Action', 'Fantasy', 'Family']}
          title="Avatar"
          imgUrl="https://fwcdn.pl/fpo/91/13/299113/8028716.3.jpg"
          metaInformation="USA, 2010"
        />
        <MovieListCard
          genres={['Action', 'Fantasy', 'Family']}
          title="Avatar"
          imgUrl="https://fwcdn.pl/fpo/91/13/299113/8028716.3.jpg"
          metaInformation="USA, 2010"
        />
      </div>
    </div>
  );
};

export default MoviesContainer;
