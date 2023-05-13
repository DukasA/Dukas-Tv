import React, { useState } from 'react';
import { auth } from '../firebase/index';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setNewUser } from '../store/reducers/userReducer';

export const LogInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(setNewUser(userCredential.user));
        navigation('/user');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center flex-co">
      <form className="max-w-md mx-auto mt-10 p-5 rounded-md shadow-md bg-gray-700">
        <h2 className="text-xl font-medium text-center mb-5 text-white">
          Log in
        </h2>
        <div className="mb-5">
          <label htmlFor="email" className="block font-medium mb-1 text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-md border-gray-300 bg-gray-800 text-white focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block font-medium mb-1 text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 rounded-md border-gray-300 bg-gray-800 text-white focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-300 w-full"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </form>
    </div>
  );
};
