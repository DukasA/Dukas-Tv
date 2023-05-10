import React from 'react';
import BannerSlide from './BannerSlide';

export const HomeBanner: React.FC = () => {
  return (
    <div
      className={`w-full h-[80vh] shadow-[0px_22px_30px_4px_rgba(0,0,0,0.56)]`}
    >
      <BannerSlide />
    </div>
  );
};

export default HomeBanner;
