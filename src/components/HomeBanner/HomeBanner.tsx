import React from 'react';
import BannerSlide from './BannerSlide';

export const HomeBanner: React.FC = () => {
  return (
    <div
      className={`w-full h-[80vh] shadow-[0px_22px_30px_4px_rgba(0,0,0,0.56)]`}
    >
      <BannerSlide
        imageUrl="../../../images/banner.jpg"
        movieUrl="/"
        title="The Last of Us"
        genres={['Fantasy', 'Family', 'Horror']}
        duration="1h 52m"
        rating="4.5"
      />
    </div>
  );
};

export default HomeBanner;
