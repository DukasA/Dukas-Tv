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
  media_type: string;
}

interface IMovies {
  movies: IMovie[];
  homePageMovies: IMovie[];
}

export const BannerSlide: React.FC = () => {
  const data: IMovie[] = useSelector(
    (state: { movies: IMovies }) => state.movies.homePageMovies,
  );

  const getRandomMovie = () => {
    return Math.floor(Math.random() * data.length);
  };
  const randomMovieFromData = data[getRandomMovie()];

  const getPathForBackDrop = (path: string) => {
    if (!path) {
      return 'https://curia.europa.eu/jcms/upload/docs/image/png/2022-07/no_image.png';
    } else {
      return `https://www.themoviedb.org/t/p/original/${path}`;
    }
  };

  return (
    <div className="w-full h-full relative">
      {randomMovieFromData ? (
        <>
          <div className=" bg-black/80 w-full h-full absolute top-0 left-0 z-1"></div>
          <img
            src={getPathForBackDrop(randomMovieFromData.backdrop_path)}
            className="w-full h-full object-cover z-0"
          />
          {/* BOTTOM SLIDER NAV */}
          <div className="flex justify-center items-center flex-col w-full md:w-auto md:block absolute bottom-[2%] md:bottom-[20%] left-0 md:pl-20 p-2">
            <span className="text-center text-gray-300 text-3xl md:text-5xl mb-3 md:m-0">
              {randomMovieFromData.title || randomMovieFromData.name}
            </span>
            <div className="">
              {randomMovieFromData.genre_ids.map((id) => (
                <span
                  className="text-white text-[12px] md:text-[14px] opacity-[0.6]"
                  key={id}
                >
                  {id ===
                  randomMovieFromData.genre_ids[
                    randomMovieFromData.genre_ids.length - 1
                  ]
                    ? genresData.find((genre) => genre.id === id)?.name
                    : genresData.find((genre) => genre.id === id)?.name + ','}
                </span>
              ))}
              <span className="text-gray-400 text-sm mr-2 ml-2 md:text-md md:mr-4">
                |
              </span>

              <span className="text-gray-400 text-sm mr-2 md:text-md md:mr-4">
                Duration:{' '}
                {randomMovieFromData.vote_average.toString().slice(0, 3)}
              </span>
            </div>
            <div className="flex justify-center md:justify-start items-center flex-col md:flex-row ">
              <BannerSlideBtn
                movieUrl={
                  randomMovieFromData.media_type === 'tv'
                    ? `/tv/` + randomMovieFromData.id
                    : '/movie/' + randomMovieFromData.id
                }
              />
              <div className="text-white flex flex-col md:ml-10 justify-center items-center">
                <span className="text-gray-300 text-xl pt-9">
                  Rating:{' '}
                  {randomMovieFromData.vote_average.toString().slice(0, 3)}
                </span>
                <StarRatings
                  rating={randomMovieFromData.vote_average}
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
