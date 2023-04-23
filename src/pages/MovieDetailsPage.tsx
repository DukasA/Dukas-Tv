import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'; /*  */
import { getMovieById } from '../api/fetchData/movies/getMovieById';
import { ActorCard } from '../components/ActorCard/ActorCard';

interface MovieData {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  genres: [
    genre: {
      id: number;
      name: string;
    },
  ];
  overview: string;
  vote_average: number;
  runtime: number;
  release_date: string;
  credits: {
    cast: [
      {
        name: string;
        profile_path: string;
      },
    ];
  };
}

const MovieDetailsPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const movieId = params.id;
  const [data, setData] = useState<MovieData | null>(null);

  useEffect(() => {
    if (movieId) {
      getMovieById(movieId).then((res) => {
        setData(res.data);
      });
    }
  }, []);

  console.log(data);

  const getPathForBackDrop = (path: string) => {
    if (!path) {
      return 'https://curia.europa.eu/jcms/upload/docs/image/png/2022-07/no_image.png';
    } else {
      return `https://www.themoviedb.org/t/p/original/${path}`;
    }
  };

  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <div className="absolute top-0 left-0 w-full ">
      {/* HERO SECTION */}
      <div
        className={`w-full h-full md:h-[80vh] shadow-[0px_22px_30px_4px_rgba(0,0,0,0.56)]`}
      >
        <div className="w-full h-full relative">
          <div className=" bg-black/[0.8] w-full h-full absolute top-0 left-0 z-1"></div>
          <img
            src={getPathForBackDrop(data.backdrop_path)}
            className="w-full h-full z-0 object-cover"
          />
          {/* DESCRIPTION */}
          <div className="w-full p-10 md:w-[700px] absolute bottom-0 left-0 md:pl-20 md:pr-20 pt-10 pb-10 md:rounded-xl text-white bg-[black]/70">
            <h1 className="text-3xl md:text-5xl text-[#1F80E0] font-bold mb-5 opacity-[0.9]">
              {data.title}
            </h1>
            <p className="text-[14px] md:text-lg mb-5 md:mb-10 opacity-[0.9]">
              {data.overview}
            </p>
            <div className="flex items-center mb-3">
              <span className="mr-5 p-2 pt-[2px] pb-[2px] bg-[#1F80E0] rounded-md">
                {data.runtime} min
              </span>
              <span className="opacity-[0.9]">James Cameron</span>
            </div>
            <div className="flex flex-wrap items-center mb-3">
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
                    : `${genre.name + ','}`}
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
      <div className="text-zinc-50 ">
        {/* LEFT SIDE */}
        <div>
          <h3>Cast</h3>
          <div className="flex items-center">
            {data.credits.cast.slice(0, 7).map((actor) => (
              <ActorCard actor={actor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
