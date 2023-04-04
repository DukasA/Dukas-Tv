import React from 'react';
import BannerSlideBtn from '../Buttons/BannerSlideBtn';

interface ISlideProps {
  imageUrl: string;
  movieUrl: string;
  title: string;
  genres: string[];
  duration: string;
  rating: string;
}

export const BannerSlide: React.FC<ISlideProps> = ({
  imageUrl,
  movieUrl,
  title,
  genres,
  duration,
  rating,
}) => {
  return (
    <div className="w-full h-full relative">
      <div className=" bg-black/[0.7] w-full h-full absolute top-0 left-0 z-1"></div>
      <img src={imageUrl} className="w-full h-full object-cover z-0" />
      {/* BOTTOM SLIDER NAV */}
      <div className="absolute bottom-[10%] left-0 pl-20 pr-2 0">
        <span className="text-gray-300 text-[60px]">{title}</span>
        <div className="flex justify-between items-center">
          {genres.map((genre) => (
            <span className="text-gray-400 text-md mr-4">{genre}</span>
          ))}
          <span className="text-gray-400 text-md mr-4">|</span>
          <span className="text-gray-400 text-[sm]">Duration: {duration}</span>
        </div>
        <div className="flex justify-between items-center">
          <BannerSlideBtn movieUrl={movieUrl} />
          <div className="text-white w-full flex justify-center items-center">
            <span className="text-gray-300 text-lg pt-9">Rating: {rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlide;
