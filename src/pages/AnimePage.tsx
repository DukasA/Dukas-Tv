import React from 'react';
import MoviesContainer from '../components/MoviesContainer/MoviesContainer';

export const AnimePage: React.FC = () => {
  return (
    <div className="w-full min-h-[100vh]">
      {/* CONTAINER FOR CENTRING */}
      <MoviesContainer />
    </div>
  );
};

export default AnimePage;
