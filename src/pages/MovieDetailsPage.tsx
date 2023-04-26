import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { apiConfig } from '../api/apiConfig';
import { getMovieById } from '../api/fetchData/movies/getMovieById';
import { ActorCard } from '../components/ActorCard/ActorCard';
import { BlockTitle } from '../components/BlockTitle/BlockTitle';
import { IMovieDetailsProps } from '../interfaces/MovieDetailsProps';
import { formatDate } from '../utils/formateDate';
import { formateNumber } from '../utils/formateNumber';
import { languageCodes } from '../utils/languageCodes';

interface ImagesProps {
  backdrops: [{ file_path: string }];
  logos: [{ file_path: string }];
  posters: [{ file_path: string }];
}

const MovieDetailsPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const movieId = params.id;
  const [data, setData] = useState<IMovieDetailsProps | null>(null);
  const [images, setImages] = useState<ImagesProps | null>(null);

  useEffect(() => {
    if (movieId) {
      try {
        getMovieById(movieId)
          .then((res) => {
            setData(res.data);
            return axios.get(
              `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiConfig.API_KEY}`,
            );
          })
          .then((response) => {
            setImages(response.data);
          });
      } catch (error) {
        alert(error);
      }
    }
  }, []);

  console.log(data);
  console.log(images);

  const getPathForBackDrop = (path: string) => {
    if (!path) {
      return 'https://curia.europa.eu/jcms/upload/docs/image/png/2022-07/no_image.png';
    } else {
      return `https://www.themoviedb.org/t/p/original/${path}`;
    }
  };

  const getPathForPoster = (path: string) => {
    if (!path) {
      return 'https://curia.europa.eu/jcms/upload/docs/image/png/2022-07/no_image.png';
    } else {
      return `https://www.themoviedb.org/t/p/w220_and_h330_face/${path}`;
    }
  };

  const getPathForReviewerPhoto = (path: string) => {
    if (!path) {
      return 'https://curia.europa.eu/jcms/upload/docs/image/png/2022-07/no_image.png';
    } else {
      return `https://www.themoviedb.org/t/p/w150_and_h150_face/${path}`;
    }
  };

  const navigation = useNavigate();

  if (!data || !images) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="text-3xl text-white">LOADING ...</h1>
      </div>
    );
  }

  return (
    <div className="">
      {/* HERO SECTION */}
      <div
        className={
          'w-full h-full md:h-[80vh] shadow-[0px_22px_30px_4px_rgba(0,0,0,0.56)]'
        }
      >
        <div
          className="absolute top-5 left-5 md:top-20 md:left-20 z-50 rounded-full overflow-hidden opacity-70 hover:opacity-100 hover:cursor-pointer"
          onClick={() => navigation(-1)}
        >
          <img src="../../icons/back-button.svg" className="w-10 h-10" />
        </div>
        <div className="w-full h-[80vh] relative">
          <div className=" bg-black/[0.4] w-full h-full absolute top-0 left-0 z-1"></div>
          <img
            src={getPathForBackDrop(data.backdrop_path)}
            className="w-full h-full z-0 object-cover"
          />
          {/* DESCRIPTION */}
          <div className="w-full p-5 md:w-[700px] absolute bottom-0 left-0 md:pl-20 md:pr-20 md:rounded-xl text-white bg-[black]/70">
            <h1 className="text-2xl md:text-5xl text-[#1F80E0] font-bold mb-2 md:mb-5 opacity-[0.9]">
              {data.title}
            </h1>
            <p className="text-[11px] md:text-lg mb-2 md:mb-10 opacity-[0.9]">
              {data.overview}
            </p>
            <div className="flex flex-wrap items-center mb-2 md:mb-10">
              <span className="mr-5 p-2 pt-[2px] pb-[2px] bg-[#1F80E0] rounded-md">
                {data.runtime} min
              </span>
              <span className="opacity-[0.9]">James Cameron</span>
            </div>
            <div className="flex flex-wrap items-center mb-2 md:mb-10">
              <span className="opacity-[0.9]">
                {data.release_date.slice(0, 4)}
              </span>
              <span className="m-5 mb-0 mt-0 text-[24px] text-[#1F80E0]">
                &#x2022;
              </span>
              {data.genres.map((genre) => (
                <span key={genre.id} className="mr-2 opacity-[0.9]">
                  {data.genres[data.genres.length - 1] === genre
                    ? genre.name
                    : genre.name + ','}
                </span>
              ))}
            </div>
            <div className="flex">
              <span className="text-[#1F80E0] text-[32px] font-bold mr-2">
                {data.vote_average.toString().slice(0, 3)}
              </span>
              <span className="mt-2 text-gray-400 opacity-[0.9]">
                <span className="text-gray-400">/</span> 10
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* DETAILS SECTION */}
      <div className="text-white p-5 md:p-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        {/* LEFT SIDE */}
        <div>
          {/* CAST */}
          <div>
            <BlockTitle title="Cast" />
            <div className="flex overflow-auto">
              {data.credits.cast.slice(0, 15).map((actor) => (
                <ActorCard actor={actor} key={actor.profile_path} />
              ))}
            </div>
            <div className="flex text-[#1F80E0]/80 hover:text-[#1F80E0] relative hover:cursor-pointer mt-2">
              <span className="text-xl">Full Cast & Crew</span>
            </div>
          </div>
          {/* META DATA */}
          <div className="bg-[#121212] shadow-lg p-5 pt-10 pb-10 rounded-xl mt-10">
            <ul className="flex justify-between items-center flex-wrap">
              <li className="flex flex-col">
                <span className="text-xl">Status:</span>
                <span className="text-white/50">{data.status}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xl">Original Language:</span>
                <span className="text-white/50">
                  {languageCodes[data.original_language]}
                </span>
              </li>
              <li className="flex flex-col">
                <span className="text-xl">Budget:</span>
                <span className="text-white/50">
                  {formateNumber(data.budget)}
                </span>
              </li>
              <li className="flex flex-col">
                <span className="text-xl">Revenue:</span>
                <span className="text-white/50">
                  {formateNumber(data.revenue)}
                </span>
              </li>
            </ul>
          </div>
          {/* REVIEWS */}
          <div className="mt-10 mb-10">
            <BlockTitle title="Reviews" />
            {/* REVIEW BLOCK */}
            <div className="bg-[#121212] shadow-lg p-5 pt-10 pb-10 rounded-xl mt-10">
              <div>
                <img
                  src={getPathForReviewerPhoto(
                    data.reviews.results[0].author_details.avatar_path,
                  )}
                  alt={`Avatar of ${data.reviews.results[0].author_details.username}`}
                  className="rounded-full w-20 h-20 float-left mr-5"
                />
              </div>
              {/* REVIEW HEADER */}
              <div className="flex flex-col">
                <span className="text-3xl">
                  A review by {data.reviews.results[0].author_details.username}
                </span>
                <span className="mb-5">
                  Written by {data.reviews.results[0].author_details.username}{' '}
                  on {formatDate(data.reviews.results[0].created_at)}
                </span>
                {/* REVIEW CONTENT */}
                <p className="text-white/50">
                  {data.reviews.results[0].content.slice(0, 500) + ' ...'}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div>
          <BlockTitle title="Trailer" />
          <div className="w-full">
            <iframe
              /* src={`https://www.youtube.com/embed/${
                data?.videos.results.filter(
                  (video) => video.name === 'Official Trailer',
                )[0].key
              }`} */
              src={`https://www.youtube.com/embed/${
                data.videos.results.length > 0
                  ? data.videos.results[data.videos.results.length - 1].key
                  : '00'
              }`}
              className="w-full h-[400px] md:h-[500px] rounded-xl"
            ></iframe>
          </div>
          {/* MEDIA */}
          <div className=" mt-10">
            <BlockTitle title="Media" />
            <div className="flex overflow-auto p-2">
              {images?.posters.slice(0, 10).map((item) => (
                <img
                  key={item.file_path}
                  src={getPathForPoster(item.file_path)}
                  className="rounded-xl mr-2 shadow-xl"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
