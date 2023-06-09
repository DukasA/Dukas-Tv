import React from 'react';
import CarouselBlock from './CarouselBlock';

interface IMovieList {
  listTitle: string;
}

export const HomeMoviesList: React.FC<IMovieList> = ({ listTitle }) => {
  return (
    <div className="container mx-auto mb-24">
      {/* LIST HEADER */}
      <div className="flex justify-between items-center mb-[20px]">
        <span className="text-gray-200 font-semibold text-[36px]">
          {listTitle}
        </span>
        <span className="text-gray-400 text-[20px]">View all</span>
      </div>
      {/* CARDS */}
      <CarouselBlock />
    </div>
  );
};

export default HomeMoviesList;
