import React from 'react';
import { useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { genresData } from '../../utils/genresData';
import BannerSlideBtn from '../Buttons/BannerSlideBtn';
import { Loader } from '../Loader/Loader';

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

export const BannerSlide: React.FC = () => {
  const data: IMovie[] = useSelector(
    (state: { movies: IMovies }) => state.movies.homePageMovies,
  );

  const getPathForBackDrop = (path: string) => {
    if (!path) {
      return 'https://curia.europa.eu/jcms/upload/docs/image/png/2022-07/no_image.png';
    } else {
      return `https://www.themoviedb.org/t/p/original/${path}`;
    }
  };

  return (
    <div className="w-full h-full relative">
      {data[0] ? (
        <>
          <div className=" bg-black/80 w-full h-full absolute top-0 left-0 z-1"></div>
          <img
            src={getPathForBackDrop(data[0].backdrop_path)}
            className="w-full h-full object-cover z-0"
          />
          {/* BOTTOM SLIDER NAV */}
          <div className="flex justify-center items-center flex-col w-full md:w-auto md:block absolute bottom-[10%] left-0 md:pl-20 p-2">
            <span className="text-center text-gray-300 text-5xl md:text-5xl mb-6 md:m-0">
              {data[0].title || data[0].name}
            </span>
            <div className="">
              {data[0].genre_ids.map((id) => (
                <span
                  className="text-white text-[12px] md:text-[14px] opacity-[0.6]"
                  key={id}
                >
                  {id === data[0].genre_ids[data[0].genre_ids.length - 1]
                    ? genresData.find((genre) => genre.id === id)?.name
                    : genresData.find((genre) => genre.id === id)?.name + ','}
                </span>
              ))}
              <span className="text-gray-400 text-sm mr-2 ml-2 md:text-md md:mr-4">
                |
              </span>

              <span className="text-gray-400 text-sm mr-2 md:text-md md:mr-4">
                Duration: {data[0].vote_average.toString().slice(0, 3)}
              </span>
            </div>
            <div className="flex justify-center md:justify-start items-center flex-col md:flex-row ">
              <BannerSlideBtn movieUrl={`/movie/${data[0].id}`} />
              <div className="text-white flex flex-col md:ml-10 justify-center items-center">
                <span className="text-gray-300 text-xl pt-9">
                  Rating: {data[0].vote_average.toString().slice(0, 3)}
                </span>
                <StarRatings
                  rating={data[0].vote_average}
                  starRatedColor="#1F80E0"
                  starEmptyColor="gray"
                  numberOfStars={10}
                  name="rating"
                  starDimension="28px"
                  starSpacing="0px"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default BannerSlide;
