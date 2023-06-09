import React from 'react';
import MoviesContainer from '../components/MoviesContainer/MoviesContainer';

export const AnimePage: React.FC = () => {
  return (
    <div className="">
      <div className="w-full h-full p-4 pr-2 lg:pl-[10%] lg:pr-[10%] md:pl-[5%] md:pr-[5%] sm:pr-[5%] sm:pl-[5%]">
        <div className="text-white">Bojevik</div>
        <MoviesContainer />
      </div>
    </div>
  );
};

export default AnimePage;
