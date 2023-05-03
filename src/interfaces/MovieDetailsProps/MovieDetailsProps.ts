import { IMovieCreditsProps } from './MovieCreditsProps';
import { IMovieGenresProps } from './MovieGenresProps';
import { IMovieImagesPorps } from './MovieImagesProps';
import { IMovieReviewsProps } from './MovieReviewsProps';
import { IMovieSimilarProps } from './MovieSimilarProps';
import { IMovieVideosPorps } from './MovieVideosPorps';

export interface IMovieDetailsProps {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  runtime: number;
  release_date: string;
  status: string;
  revenue: number;
  budget: number;
  original_language: string;
  reviews: IMovieReviewsProps;
  genres: IMovieGenresProps[];
  images?: IMovieImagesPorps;
  videos: IMovieVideosPorps;
  credits: IMovieCreditsProps;
  similar: IMovieSimilarProps;
}
