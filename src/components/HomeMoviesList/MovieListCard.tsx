import React from 'react';

interface IMovies {
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

export const MovieListCard: React.FC<IMovies> = ({ movie }) => {
  return (
    <div className="w-auto mr-2" key={movie.id}>
      <div className="rounded-lg overflow-hidden">
        <img
          src={getPathForImage(movie.backdrop_path)}
          alt={movie.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-2">
          <p className="text-white text-[14px] opacity-[0.6]">
            {movie.release_date}
          </p>
          <p className="text-white opacity-[0.8] font-semibold text-[28px] mb-2">
            {movie.title.slice(0, 20) + '...'}
          </p>
          {/* {genres.map((genre) => (
            <span className="text-white text-[12px] opacity-[0.6]">
              {genre},{' '}
            </span>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default MovieListCard;
