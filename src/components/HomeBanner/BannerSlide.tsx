import React from 'react';
import StarRatings from 'react-star-ratings';
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
      <div className="flex justify-center items-center flex-col w-full md:w-auto md:block absolute bottom-[10%] left-0 md:pl-20 p-2">
        <span className="text-center text-gray-300 text-5xl md:text-5xl mb-6 md:m-0">
          {title}
        </span>
        <div className="">
          {genres.map((genre) => (
            <span className="text-gray-400 text-sm mr-2 md:text-md md:mr-4">
              {genre},
            </span>
          ))}
          <span className="text-gray-400 text-sm mr-2 md:text-md md:mr-4">
            |
          </span>
          <span className="text-gray-400 text-sm mr-2 md:text-md md:mr-4">
            Duration: {duration}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <BannerSlideBtn movieUrl={movieUrl} />
          <div className="text-white w-full flex flex-col ml-5 md:ml-10 justify-center items-center">
            <span className="text-gray-300 text-xl pt-9">Rating: {rating}</span>
            <StarRatings
              rating={4}
              starRatedColor="#1F80E0"
              starEmptyColor="gray"
              numberOfStars={5}
              name="rating"
              starDimension="28px"
              starSpacing="0px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlide;
