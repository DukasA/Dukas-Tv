import React from 'react';
import { Link } from 'react-router-dom';
import { IMovieCardProps } from '../../interfaces/MovieCardProps';
import { genresData } from '../../utils/genresData';

const getPathForImage = (path: string) => {
  if (!path) {
    return 'https://curia.europa.eu/jcms/upload/docs/image/png/2022-07/no_image.png';
  } else {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${path}`;
  }
};

export const MovieListCard: React.FC<IMovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movie/` + movie.id}>
      <div className="w-[160px] sm:mr-2 md:w-auto" key={movie.id}>
        <div className="rounded-lg overflow-hidden">
          <div className="w-full h-60 md:h-80 relative">
            <img
              src={getPathForImage(movie.poster_path)}
              alt={movie.title || movie.name}
              className="w-full h-full object-cover"
            />
            {/* CARD BUTTONS */}
            {/* <div className="rounded-l-xl w-8 h-8 absolute top-0 right-[-2px]">
              <img className="" src="../../../icons/bookmark.svg" />
            </div> */}
          </div>
          <div className="p-2 flex flex-col">
            <p className="text-white opacity-[0.8] font-semibold text-[20px]">
              {movie.title && movie.title.length > 30
                ? movie.title.slice(0, 30) + '...'
                : movie.title}
              {/* ЕСЛИ СЕРИАЛ, ТО ПРИХОДИТ ВМЕСТО TITLE - NAME */}
              {movie.name && movie.name.length > 30
                ? movie.name.slice(0, 30) + '...'
                : movie.name}
            </p>
            <div className="flex flex-col">
              <span className="text-white text-[12px] md:text-[14px] opacity-[0.6]">
                {movie.release_date?.slice(0, 4) ||
                  movie.first_air_date.slice(0, 4)}{' '}
              </span>
              <div className="flex flex-wrap">
                {movie.genre_ids.map((id) => (
                  <span
                    className="text-white text-[12px] md:text-[14px] opacity-[0.6]"
                    key={id}
                  >
                    {id === movie.genre_ids[movie.genre_ids.length - 1]
                      ? genresData.find((genre) => genre.id === id)?.name
                      : genresData.find((genre) => genre.id === id)?.name + ','}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieListCard;
