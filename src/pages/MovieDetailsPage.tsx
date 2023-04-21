import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'; /*  */
import { getMovieById } from '../api/fetchData/movies/getMovieById';

interface MovieData {
  id: number;
  title: string;
  poster_path: string;
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

  /* const getPathForImage = (path: string) => {
    if (!path) {
      return 'https://curia.europa.eu/jcms/upload/docs/image/png/2022-07/no_image.png';
    } else {
      return `https://www.themoviedb.org/t/p/w220_and_h330_face/${path}`;
    }
  }; */

  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <div>{data.title}</div>
    </div>
  );
};

export default MovieDetailsPage;
