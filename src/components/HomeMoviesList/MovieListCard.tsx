import React from 'react';

interface ICardProps {
  imgUrl: string;
  genres: string[];
  title: string;
  metaInformation: string;
}

export const MovieListCard: React.FC<ICardProps> = ({
  imgUrl,
  genres,
  title,
  metaInformation,
}) => {
  return (
    <div className="w-auto">
      <div className="rounded-lg overflow-hidden">
        <img src={imgUrl} alt={title} className="w-full h-80 object-cover" />
        <div className="p-2">
          <p className="text-white text-[14px] opacity-[0.6]">
            {metaInformation}
          </p>
          <p className="text-white opacity-[0.8] font-semibold text-[28px] mb-2">
            {title}
          </p>
          {genres.map((genre) => (
            <span className="text-white text-[12px] opacity-[0.6]">
              {genre},{' '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListCard;
