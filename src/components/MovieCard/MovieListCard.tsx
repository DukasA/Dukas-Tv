import React from 'react';
import { Link } from 'react-router-dom';
import { IMovieCardProps } from '../../interfaces/MovieCardProps';

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
          <img
            src={getPathForImage(movie.backdrop_path)}
            alt={movie.title || movie.name}
            className="w-full h-60 md:h-80 object-cover"
          />
          <div className="p-2">
            {/* <p className="text-white opacity-[0.8] font-semibold text-[20px]">
            {movie.name && movie.name.length > 30
              ? movie.name.slice(0, 30) + '...'
              : movie.name}
          </p> */}
            <p className="text-white opacity-[0.8] font-semibold text-[20px]">
              {movie.title && movie.title.length > 30
                ? movie.title.slice(0, 30) + '...'
                : movie.title}
              {/* ЕСЛИ СЕРИАЛ, ТО ПРИХОДИТ ВМЕСТО TITLE - NAME */}
              {movie.name && movie.name.length > 30
                ? movie.name.slice(0, 30) + '...'
                : movie.name}
            </p>
            <p className="text-white text-[12px] opacity-[0.6]">
              {movie.release_date?.slice(0, 4) /* || movie.first_air_date */}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieListCard;
