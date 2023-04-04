import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  const navigation = useNavigate();
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center flex-col">
      <h1 className="text-3xl text-white opacity-[0.8]">Page Not Found</h1>
      <ul className="flex justify-center items-center">
        <li className="text-xl mr-8 text-white opacity-[0.8] underline">
          <Link to="/">Go Home</Link>
        </li>
        <li
          onClick={() => navigation(-1)}
          className="text-xl text-white opacity-[0.8] underline"
        >
          Go Back
        </li>
      </ul>
    </div>
  );
};

export default NotFoundPage;
