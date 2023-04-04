import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieListCard from './MovieListCard';

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
      items: 1,
    },
  };

  return (
    <Carousel partialVisible={true} responsive={responsive} className="p-4">
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
      <MovieListCard
        genres={['Action', 'Fantasy', 'Family']}
        title="Avatar"
        imgUrl="https://fwcdn.pl/fpo/91/13/299113/8028716.3.jpg"
        metaInformation="USA, 2010"
      />
    </Carousel>
  );
};

export default CarouselBlock;
