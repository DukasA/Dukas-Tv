import React from 'react';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import HomeMoviesList from '../components/HomeMoviesList/HomeMoviesList';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-[#1c1c1e]">
      <HomeBanner />
      {/* MAIN */}
      <div className="pt-20">
        <HomeMoviesList listTitle="Trending" />
      </div>
    </div>
  );
};

export default HomePage;
