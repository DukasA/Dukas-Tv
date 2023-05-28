import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BlockTitle } from '../components/BlockTitle/BlockTitle';
import { IMovieDetailsProps } from '../interfaces/MovieDetailsProps/MovieDetailsProps';
import { formatDate } from '../utils/formateDate';

interface IMovies {
  movieDetails: IMovieDetailsProps | null;
}

export const ReviewsPage: React.FC = () => {
  const movieData: IMovieDetailsProps | null = useSelector(
    (state: { movieDetails: IMovies }) => state.movieDetails.movieDetails,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(movieData);

  const getPathForReviewerPhoto = (path: string) => {
    if (!path) {
      return 'https://curia.europa.eu/jcms/upload/docs/image/png/2022-07/no_image.png';
    } else {
      return `https://www.themoviedb.org/t/p/w150_and_h150_face/${path}`;
    }
  };

  const [expandedReviews, setExpandedReviews] = useState<string[]>([]);

  const toggleReviewExpansion = (reviewId: string) => {
    if (expandedReviews.includes(reviewId)) {
      // Если комментарий уже развернут, удаляем его из списка развернутых
      setExpandedReviews(expandedReviews.filter((id) => id !== reviewId));
    } else {
      // Если комментарий не развернут, добавляем его в список развернутых
      setExpandedReviews([...expandedReviews, reviewId]);
    }
  };

  const reviewsData = movieData?.reviews.results;

  return (
    <div className="p-10 md:p-20">
      <div className="overflow-hidden">
        <BlockTitle title="Reviews" />
        {/* REVIEW BLOCK */}
        {reviewsData &&
          reviewsData.map((review) => (
            <div className="bg-[#121212] shadow-lg p-5 pt-10 pb-10 rounded-xl mt-10 flex flex-col items-center justify-center md:block">
              <div>
                <img
                  src={getPathForReviewerPhoto(
                    review.author_details.avatar_path,
                  )}
                  alt={`Avatar of ${review.author_details.username}`}
                  className="rounded-full w-20 h-20 float-none md:float-left mr-5"
                />
              </div>
              {/* REVIEW HEADER */}
              <div className="flex flex-col">
                <span className="text-3xl text-white">
                  A review by{' '}
                  <span className="text-[#1F80E0] cursor-pointer hover:text-[#1F80E0]/70">
                    {review.author_details.username}
                  </span>
                </span>
                <span className="mb-5 text-white/50">
                  Written by{' '}
                  <span className="text-[#1F80E0] cursor-pointer hover:text-[#1F80E0]/70">
                    {review.author_details?.username}
                  </span>{' '}
                  on {formatDate(review.created_at)}
                </span>
                {/* REVIEW CONTENT */}
                <div>
                  <p className="text-white/50">
                    {expandedReviews.includes(review.id)
                      ? review.content
                      : review.content.slice(0, 200)}
                  </p>
                  <span
                    onClick={() => toggleReviewExpansion(review.id)}
                    className="text-xl text-[#1F80E0] cursor-pointer hover:text-[#1F80E0]/70"
                  >
                    {expandedReviews.includes(review.id)
                      ? 'Collapse'
                      : 'Read full'}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
