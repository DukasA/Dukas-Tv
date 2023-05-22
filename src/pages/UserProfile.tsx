import React, { useEffect, useState } from 'react';
import { FavoriteMovies } from '../components/UserProfileComponents/FavoriteMovies';
import { UserDetails } from '../components/UserProfileComponents/UserDetails';
import WatchLaterMovies from '../components/UserProfileComponents/WatchLaterMovies';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { db } from '../firebase/index';
import { auth } from '../firebase/index';
import { collection, doc, getDocs } from 'firebase/firestore';
import { getMovieById } from '../api/fetchData/movies/getMovieById';
import { Loader } from '../components/Loader/Loader';
import { IMovieDetailsProps } from '../interfaces/MovieDetailsProps/MovieDetailsProps';

export const UserProfile: React.FC = () => {
  const usersRef = collection(db, 'users');
  const userDocRef = doc(usersRef, auth.currentUser?.uid);
  const movieRef = collection(userDocRef, 'favoriteMovies');
  let movieIds: number[] = [];
  const [favoriteMovies, setFavoriteMovies] = useState<IMovieDetailsProps[]>(
    [],
  );

  const getProfileData = async () => {
    const querySnapshot = await getDocs(movieRef);
    movieIds = querySnapshot.docs.map((doc) => doc.data().movie);
    if (movieIds) {
      await getMoviesById(movieIds);
    }
  };

  const getMoviesById = async (movieIds: number[]) => {
    try {
      const movies = await Promise.all(
        movieIds.map((id) => getMovieById(id.toString())),
      );
      const movieData = movies.map((movie) => movie.data);
      setFavoriteMovies(movieData);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  const navigation = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert('Sign out is succesfull');
        navigation('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="text-white pt-12 pb-20 px-6 lg:px-24 xl:px-32">
      <UserDetails onClick={handleSignOut} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {favoriteMovies ? <FavoriteMovies data={favoriteMovies} /> : <Loader />}
        <WatchLaterMovies />
      </div>
    </div>
  );
};
