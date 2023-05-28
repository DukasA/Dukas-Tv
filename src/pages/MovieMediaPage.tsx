import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BlockTitle } from '../components/BlockTitle/BlockTitle';

interface ImagesProps {
  backdrops: [{ file_path: string }];
  logos: [{ file_path: string }];
  posters: [{ file_path: string }];
}

interface IMovies {
  images: ImagesProps | null;
}

export const MovieMediaPage: React.FC = () => {
  const movieMedia: ImagesProps | null = useSelector(
    (state: { movieDetails: IMovies }) => state.movieDetails.images,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getPathForPoster = (path: string) => {
    if (!path) {
      return 'https://curia.europa.eu/jcms/upload/docs/image/png/2022-07/no_image.png';
    } else {
      return `https://www.themoviedb.org/t/p/w220_and_h330_face/${path}`;
    }
  };

  console.log(movieMedia);
  return (
    <div className="p-5 md:p-20">
      <div className="flex items-center mb-16 md:mb-10">
        <BlockTitle title="Media" />
      </div>
      {movieMedia && (
        <>
          <div className="flex flex-col overflow-auto mb-10">
            <h3 className="text-white text-2xl mb-5 border-b-2 border-gray-700">
              Posters
            </h3>
            <div className="flex overflow-auto">
              {movieMedia?.posters.map((item) => (
                <img
                  key={item.file_path}
                  src={getPathForPoster(item.file_path)}
                  className="rounded-xl mr-2 shadow-xl"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col overflow-auto mb-10">
            <h3 className="text-white text-2xl mb-5 border-b-2 border-gray-700">
              Backdrops
            </h3>
            <div className="flex overflow-auto">
              {movieMedia?.backdrops.map((item) => (
                <img
                  key={item.file_path}
                  src={getPathForPoster(item.file_path)}
                  className="rounded-xl mr-2 shadow-xl"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col overflow-auto mb-10">
            <h3 className="text-white text-2xl mb-5 border-b-2 border-gray-700">
              Logos
            </h3>
            <div className="flex overflow-auto">
              {movieMedia?.logos.map((item) => (
                <img
                  key={item.file_path}
                  src={getPathForPoster(item.file_path)}
                  className="rounded-xl mr-2 shadow-xl"
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieMediaPage;
