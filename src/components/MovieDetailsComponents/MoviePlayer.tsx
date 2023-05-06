import React from 'react';
import { IMovieVideosPorps } from '../../interfaces/MovieDetailsProps/MovieVideosPorps';
import { BlockTitle } from '../BlockTitle/BlockTitle';

export const MoviePlayer: React.FC<IMovieVideosPorps> = ({ results }) => {
  return (
    <div>
      <div className="mb-10">
        <BlockTitle title="Trailer" />
      </div>
      <div className="w-full">
        <iframe
          allowFullScreen
          src={`https://www.youtube.com/embed/${
            results.length > 0 ? results[results.length - 1].key : '00'
          }`}
          className="w-full h-[400px] md:h-[500px] rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default MoviePlayer;
