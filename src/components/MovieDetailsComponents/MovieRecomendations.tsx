import React from 'react';
import { IMovieSimilarProps } from '../../interfaces/MovieDetailsProps/MovieSimilarProps';
import { BlockTitle } from '../BlockTitle/BlockTitle';
import MovieListCard from '../MovieCard/MovieListCard';

export const MovieSimilar: React.FC<IMovieSimilarProps> = ({ results }) => {
  return (
    <div className="mt-10">
      <div className="mb-10">
        <BlockTitle title="Similiar" />
      </div>
      <div className="w-full">
        {results.map((item) => (
          <MovieListCard movie={item.movie} />
        ))}
      </div>
    </div>
  );
};
