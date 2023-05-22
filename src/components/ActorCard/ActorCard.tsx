import React from 'react';
import { Link } from 'react-router-dom';
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
    <Link to={`/person/${actor.id.toString()}`}>
      <div className="min-w-[150px] h-full rounded-lg overflow-hidden mr-3 bg-black/25 mb-4 hover:opacity-70">
        <img
          className="w-[100%] object-cover"
          src={getPersonImage(actor.profile_path)}
          alt={`Photo of ${actor.name}`}
        />
        <div className="flex flex-col p-2">
          <span className="font-bold text-md mb-1">{actor.name}</span>
          <span className="font-bold text-sm opacity-80">
            {actor.character}
          </span>
        </div>
      </div>
    </Link>
  );
};
