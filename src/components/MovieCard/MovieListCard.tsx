import React from 'react';

interface IMovie {
  movie: {
    id: number;
    title: string;
    release_date: string;
    backdrop_path: string;
  };
}

const getPathForImage = (path: string) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${path}`;
};

export const MovieListCard: React.FC<IMovie> = ({ movie }) => {
  return (
    <div className="w-[160px] sm:mr-2 md:w-auto" key={movie.id}>
      <div className="rounded-lg overflow-hidden">
        <img
          src={getPathForImage(movie.backdrop_path)}
          alt={movie.title || movie.title}
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
          </p>
          <p className="text-white text-[12px] opacity-[0.6]">
            {movie.release_date?.slice(0, 4) /* || movie.first_air_date */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieListCard;
