import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { apiConfig } from '../api/apiConfig';
import { getMovieById } from '../api/fetchData/movies/getMovieById';
import { MovieMetaDataBlock } from '../components/MovieDetailsComponents/MovieMetaDataBlock';
import { MovieMediaList } from '../components/MovieDetailsComponents/MovieMediaList';
import MoviePlayer from '../components/MovieDetailsComponents/MoviePlayer';
import { MovieReviews } from '../components/MovieDetailsComponents/MovieReviews';
import { IMovieDetailsProps } from '../interfaces/MovieDetailsProps/MovieDetailsProps';
import MovieCastList from '../components/MovieDetailsComponents/MovieCastList';
// import { MovieSimilar } from '../components/MovieDetailsComponents/MovieRecomendations';

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

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <MoviePlayer results={data.videos.results} />
          {/* MEDIA */}
          <MovieMediaList
            posters={images.posters}
            backdrops={images.backdrops}
          />
          {/* <MovieSimilar results={data.similar.results} /> */}{' '}
          {/* ЧТО-ТО С ПРОПСАМИ! ГЛЯНУТЬ ПОЗЖЕ */}
        </div>
        {/* RIGHT SIDE */}
        <div>
          {/* CAST */}
          <MovieCastList cast={data.credits.cast} />
          {/* META DATA */}
          <MovieMetaDataBlock
            status={data.status}
            originalLanguage={data.original_language}
            revenue={data.revenue}
            budget={data.budget}
          />
          {/* REVIEWS */}
          <MovieReviews results={data.reviews.results} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
