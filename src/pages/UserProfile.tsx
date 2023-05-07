import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';

export const UserProfile: React.FC = () => {
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
    <div className="flex text-white text-3xl justify-center items-center flex-col">
      <h1>User Profile</h1>
      <h1 onClick={handleSignOut} className="cursor-pointer">
        Exit
      </h1>
    </div>
  );
};
