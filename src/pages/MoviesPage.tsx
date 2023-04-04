import React from 'react';
import MoviesContainer from '../components/MoviesContainer/MoviesContainer';

export const MoviesPage: React.FC = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <MoviesContainer />
    </div>
  );
};

export default MoviesPage;
