import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ActorCard } from '../components/ActorCard/ActorCard';
import { BlockTitle } from '../components/BlockTitle/BlockTitle';
import { Loader } from '../components/Loader/Loader';
import { IMovieDetailsProps } from '../interfaces/MovieDetailsProps/MovieDetailsProps';

interface IMovies {
  movieDetails: IMovieDetailsProps | null;
}

export const CastAndCrewPage: React.FC = () => {
  const movieData: IMovieDetailsProps | null = useSelector(
    (state: { movieDetails: IMovies }) => state.movieDetails.movieDetails,
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(movieData);
  return (
    <div className="p-5 md:p-20">
      {movieData ? (
        <div className="text-white flex flex-col">
          {/* CAST LIST */}
          <div>
            <div className="mb-10">
              <BlockTitle title="Cast" />
            </div>
            <div className="flex overflow-auto cursor-pointer">
              {movieData.credits.cast.map((actor) => (
                <ActorCard actor={actor} key={actor.id} />
              ))}
            </div>
          </div>
          {/* CREW LIST */}
          <div className="mt-10">
            <div>
              <div className="mb-10">
                <BlockTitle title="Cast" />
              </div>
              <div className="flex overflow-auto cursor-pointer">
                {movieData.credits.crew?.map((actor) => (
                  <ActorCard actor={actor} key={actor.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};
