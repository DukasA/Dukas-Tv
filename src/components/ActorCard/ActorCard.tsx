import React from 'react';

interface IActorCardProps {
  actor: {
    profile_path: string;
    name: string;
  };
}

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
    <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full h-48 object-cover"
        src={getPersonImage(actor.profile_path)}
        alt={`Photo of ${actor.name}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{actor.name}</div>
      </div>
    </div>
  );
};
