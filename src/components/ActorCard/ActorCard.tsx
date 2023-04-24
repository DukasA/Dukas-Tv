import React from 'react';
import { IActorCardProps } from '../../interfaces/ActorCardProps';

/* https://www.themoviedb.org/t/p/w138_and_h175_face/3bOGNsHlrswhyW79uvIHH1V43JI.jpg */

const getPersonImage = (path: string) => {
  if (!path) {
    return 'https://curia.europa.eu/jcms/upload/docs/image/png/2022-07/no_image.png';
  } else {
    return `https://www.themoviedb.org/t/p/w138_and_h175_face/${path}`;
  }
};

export const ActorCard: React.FC<IActorCardProps> = ({ actor }) => {
  return (
    <div className="mx-auto rounded-lg overflow-hidden w-28 mb-5">
      <img
        className="w-full object-cover h-50"
        src={getPersonImage(actor.profile_path)}
        alt={`Photo of ${actor.name}`}
      />
      <div className="flex flex-col">
        <span className="font-bold text-md mb-1 mt-2">{actor.name}</span>
        <span className="font-bold text-sm opacity-80">{actor.character}</span>
      </div>
    </div>
  );
};
