import React from 'react';
import { IMovieCreditsProps } from '../../interfaces/MovieDetailsProps/MovieCreditsProps';
import { ActorCard } from '../ActorCard/ActorCard';
import { BlockTitle } from '../BlockTitle/BlockTitle';

export const MovieCastList: React.FC<IMovieCreditsProps> = ({ cast }) => {
  return (
    <div className="mt-10 md:m-0">
      <div className="mb-10">
        <BlockTitle title="Cast" />
      </div>
      <div className="flex overflow-auto">
        {cast.slice(0, 15).map((actor) => (
          <ActorCard actor={actor} key={actor.name} />
        ))}
      </div>
      <div className="flex text-[#1F80E0]/80 hover:text-[#1F80E0] relative hover:cursor-pointer mt-2">
        <span className="text-xl">Full Cast & Crew</span>
      </div>
    </div>
  );
};

export default MovieCastList;
