import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getPersonById } from '../api/fetchData/persons/getPersonById';
import { Loader } from '../components/Loader/Loader';
import { IPersonProps } from '../interfaces/PersonPorps';

export const PersonDetailsPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const [personData, setPersonData] = useState<IPersonProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      const personId = params.id;
      setIsLoading(true);
      getPersonById(personId)
        .then((response) => {
          setPersonData(response.data);
          console.log(response.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getPathForImage = (path: string) => {
    if (!path) {
      return 'https://curia.europa.eu/jcms/upload/docs/image/png/2022-07/no_image.png';
    } else {
      return `https://www.themoviedb.org/t/p/w220_and_h330_face/${path}`;
    }
  };

  if (isLoading) {
    return (
      <div className="p-5 md:p-20">
        <Loader />
      </div>
    );
  }
  return (
    <div className="p-5 pt-16 md:p-20">
      {personData && (
        <div className="flex justify-between flex-col md:flex-row">
          {/* LEFT COL */}
          <div className="">
            {/* AVATAR */}
            <div className="w-full h-[350px] md:h-[450px] flex justify-center items-center md:block">
              <img
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${personData.profile_path}`}
                alt={`Profile Image of ${personData.name}`}
                className="w-[250px] md:min-w-[300px] h-full rounded-lg"
              />
            </div>
            {/* PERSONAL INFO */}
            <div className="bg-[#121212] p-2 rounded-xl overflow-hidden flex flex-col justify-between items-center md:justify-start md:items-start text-white mt-10">
              <h1 className="text-4xl font-semibold visible mb-10 md:invisible">
                {personData.name}
              </h1>
              <h3 className="text-3xl font-semibold mb-4">Personal info</h3>
              {/* KNOWN FOR */}
              <div className="mb-2 text-center md:text-start">
                <h4 className="text-2xl font-semibold">Known For</h4>
                <span className="text-xl opacity-80">
                  {personData.known_for_department}
                </span>
              </div>
              {/* KNOWN CREDITS */}
              <div className="mb-2 text-center md:text-start">
                <h4 className="text-2xl font-semibold">Known Credits</h4>
                <span className="text-xl opacity-80">
                  {personData.combined_credits.cast.length}
                </span>
              </div>
              {/* GENDER */}
              <div className="mb-2 text-center md:text-start">
                <h4 className="text-2xl font-semibold">Gender</h4>
                <span className="text-xl opacity-80">
                  {personData.gender === 1 ? 'Female' : 'Male'}
                </span>
              </div>
              {/* BIRTHDAY */}
              <div className="mb-2 text-center md:text-start">
                <h4 className="text-2xl font-semibold">Birthday</h4>
                <span className="text-xl opacity-80">
                  {personData.birthday}
                </span>
              </div>
              {/* PLACE OF BIRTH */}
              <div className="mb-2 text-center md:text-start">
                <h4 className="text-2xl font-semibold">Place of Birth</h4>
                <span className="text-xl opacity-80">
                  {personData.place_of_birth}
                </span>
              </div>
              {/* KNOWN AS */}
              <div className="text-center md:text-start">
                <h4 className="text-2xl font-semibold">Also Known As</h4>
                <div className="flex flex-col">
                  {personData.also_known_as.map((name) => (
                    <span className="text-xl opacity-80">{name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* RIGTH COL */}
          <div className="text-white justify-center items-center md:ml-10 overflow-hidden">
            <h1 className="text-4xl font-semibold invisible md:visible">
              {personData.name}
            </h1>
            {/* BIOGRAPHY */}
            <div className="mt-10">
              <div className="bg-[#121212] p-2 rounded-xl overflow-hidden">
                <h3 className="text-2xl mb-4">Biography</h3>
                <p>
                  {personData.biography.length === 0
                    ? 'There is no biography for this person('
                    : personData.biography}
                </p>
              </div>
            </div>
            {/* KNOWN FOR */}
            <div className="mt-10">
              <div className="bg-[#121212] p-2 rounded-xl overflow-hidden">
                <h3 className="text-2xl mb-4">Known for</h3>
                <div className="flex overflow-auto">
                  {personData.combined_credits.cast
                    .slice(0, 15)
                    .map((movie) => (
                      <Link
                        to={
                          movie.media_type === 'tv'
                            ? '/tv/' + movie.id
                            : '/movie/' + movie.id
                        }
                      >
                        <div className="w-[150px] mr-2">
                          <img
                            src={getPathForImage(movie.poster_path)}
                            className="rounded-xl shadow-xl object-cover w-[220px] h-[200px] mr-2 hover:opacity-70"
                          />
                          <h5>{movie.name && movie.name}</h5>
                          <h5>{movie.title && movie.title}</h5>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
