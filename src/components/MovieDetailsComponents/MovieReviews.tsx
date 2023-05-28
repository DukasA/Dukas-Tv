import React from 'react';
import { Link } from 'react-router-dom';
import { IMovieReviewsProps } from '../../interfaces/MovieDetailsProps/MovieReviewsProps';
import { formatDate } from '../../utils/formateDate';
import { BlockTitle } from '../BlockTitle/BlockTitle';

export const MovieReviews: React.FC<IMovieReviewsProps> = ({ results }) => {
  const getPathForReviewerPhoto = (path: string) => {
    if (!path) {
      return 'https://curia.europa.eu/jcms/upload/docs/image/png/2022-07/no_image.png';
    } else {
      return `https://www.themoviedb.org/t/p/w150_and_h150_face/${path}`;
    }
  };
  return (
    <div>
      {results.length > 0 ? (
        <div className="mt-10 mb-10 overflow-hidden">
          <BlockTitle title="Reviews" />
          {/* REVIEW BLOCK */}
          <div className="bg-[#121212] shadow-lg p-5 pt-10 pb-10 rounded-xl mt-10">
            <div>
              <img
                src={getPathForReviewerPhoto(
                  results[0].author_details.avatar_path,
                )}
                alt={`Avatar of ${results[0].author_details.username}`}
                className="rounded-full w-20 h-20 float-left mr-5"
              />
            </div>
            {/* REVIEW HEADER */}
            <div className="flex flex-col">
              <span className="text-3xl">
                A review by{' '}
                <span className="text-[#1F80E0] cursor-pointer hover:text-[#1F80E0]/70">
                  {results[0].author_details?.username}
                </span>
              </span>
              <span className="mb-5">
                Written by{' '}
                <span className="text-[#1F80E0] cursor-pointer hover:text-[#1F80E0]/70">
                  {results[0].author_details?.username}
                </span>{' '}
                on {formatDate(results[0].created_at)}
              </span>
              {/* REVIEW CONTENT */}
              <p className="text-white/50">
                {results[0].content.slice(0, 350) + ' ...'}
              </p>
            </div>
          </div>
          <div className="flex text-[#1F80E0]/80 hover:text-[#1F80E0] relative hover:cursor-pointer mt-2">
            <Link to="/reviews">
              <span className="text-xl">View All Reviews</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-10 mb-10 overflow-hidden">
          <BlockTitle title="Reviews" />
          <div className="bg-[#121212] shadow-lg p-5 pt-10 pb-10 rounded-xl mt-10">
            <span className="text-slate-400">
              No reviews yet for this movie ...
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
