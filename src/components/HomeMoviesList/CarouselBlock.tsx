import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieListCard from './MovieListCard';

interface IMovies {
  id: number;
  title: string;
  release_date: string;
  backdrop_path: string;
}

interface IMovieList {
  movies: IMovies[];
}

export const CarouselBlock: React.FC<IMovieList> = ({ movies }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 750 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel partialVisible={true} responsive={responsive} className="ml-2">
      {movies.map((movie) => (
        <MovieListCard movie={movie} />
      ))}
    </Carousel>
  );
};

export default CarouselBlock;
