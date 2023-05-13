import React from 'react';
import { IMovieDetailsProps } from '../../interfaces/MovieDetailsProps/MovieDetailsProps';
// import { IMovieCardProps } from '../../interfaces/MovieCardProps';

interface Props {
  data: IMovieDetailsProps[];
}

export const FavoriteMovies: React.FC<Props> = ({ data }) => {
  const getPathForPoster = (path: string) => {
    if (!path) {
      return 'https://curia.europa.eu/jcms/upload/docs/image/png/2022-07/no_image.png';
    } else {
      return `https://www.themoviedb.org/t/p/w220_and_h330_face/${path}`;
    }
  };
  return (
    <div className="mt-12 bg-[#121212] p-4 rounded-xl">
      <h3 className="text-2xl font-bold mb-4">List of favorite movies</h3>
      <div className="flex overflow-auto">
        {data.length !== 0 ? (
          data.map((movie) => (
            <img
              src={getPathForPoster(movie.poster_path)}
              alt={movie.name}
              className="rounded-md w-[230px] h-[320px] mr-4"
              key={movie.id}
            />
          ))
        ) : (
          <div>You dont have any favorite movies yet</div>
        )}
      </div>
    </div>
  );
};
