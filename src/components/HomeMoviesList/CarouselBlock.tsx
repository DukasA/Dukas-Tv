import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';
import MovieListCard from '../MovieCard/MovieListCard';

export const CarouselBlock: React.FC = () => {
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
      items: 2,
    },
  };

  const movies = useSelector((state: any) => state.movies.movies);

  return (
    <Carousel partialVisible={true} responsive={responsive} className="ml-2">
      {movies.map((movie: any) => (
        <MovieListCard movie={movie} key={movie.title} />
      ))}
    </Carousel>
  );
};

export default CarouselBlock;
