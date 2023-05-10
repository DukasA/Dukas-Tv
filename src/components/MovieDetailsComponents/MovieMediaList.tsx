import React, { useState } from 'react';
import { IMovieImagesPorps } from '../../interfaces/MovieDetailsProps/MovieImagesProps';
import { BlockTitle } from '../BlockTitle/BlockTitle';

export const MovieMediaList: React.FC<IMovieImagesPorps> = ({
  posters,
  backdrops,
}) => {
  const [backdropsIsVisible, setBackdropsIsVisible] = useState<boolean>(true);
  const [postersIsVisible, setPostersIsVisible] = useState<boolean>(false);

  const getPathForPoster = (path: string) => {
    if (!path) {
      return 'https://curia.europa.eu/jcms/upload/docs/image/png/2022-07/no_image.png';
    } else {
      return `https://www.themoviedb.org/t/p/w220_and_h330_face/${path}`;
    }
  };

  const changeBackdropsVisibility = () => {
    setBackdropsIsVisible(true);
    setPostersIsVisible(false);
  };

  const changePostersVisibility = () => {
    setBackdropsIsVisible(false);
    setPostersIsVisible(true);
  };
  return (
    <div className="mt-10 relative">
      <div className="flex items-center mb-16 md:mb-10">
        <BlockTitle title="Media" />
        <span
          className={`ml-10 text-sm md:text-xl cursor-pointer ${
            backdropsIsVisible ? 'border-b-2' : 'border-none'
          }`}
          onClick={changeBackdropsVisibility}
        >
          Backdrops <span className="text-white/50">{backdrops.length}</span>
        </span>
        <span
          className={`ml-10 text-sm md:text-xl cursor-pointer ${
            postersIsVisible ? 'border-b-2' : 'border-none'
          }`}
          onClick={changePostersVisibility}
        >
          Posters <span className="text-white/50">{posters.length}</span>
        </span>
        <span className="absolute top-12 right-0 md:top-2 text-[#1F80E0] cursor-pointer">
          {backdropsIsVisible && !postersIsVisible
            ? 'View All Backdrops'
            : !backdropsIsVisible && postersIsVisible
            ? 'View All Posters'
            : ''}
        </span>
      </div>
      <div className="flex overflow-auto">
        {postersIsVisible &&
          posters
            .slice(0, 10)
            .map((item) => (
              <img
                key={item.file_path}
                src={getPathForPoster(item.file_path)}
                className="rounded-xl mr-2 shadow-xl"
              />
            ))}
        {backdropsIsVisible &&
          backdrops
            .slice(0, 10)
            .map((item) => (
              <img
                key={item.file_path}
                src={getPathForPoster(item.file_path)}
                className="rounded-xl mr-2 shadow-xl"
              />
            ))}
      </div>
    </div>
  );
};
