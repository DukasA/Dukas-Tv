import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="p-10 md:p-20 flex justify-center items-center flex-col shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
      <div className="opacity-[0.8] mb-5 flex justify-between items-center">
        <span className="text-sm md:text-md text-white m-2 md:m-4">
          Privacy & Policy
        </span>
        <span className="text-sm md:text-md text-white m-2 md:m-4">
          About Us
        </span>
        <span className="text-sm md:text-md text-white m-2 md:m-4">
          Support
        </span>
      </div>
      <div className="opacity-[0.7]">
        <span className="text-md text-white m-4">
          &#169;{new Date().getFullYear().toString()} Dukas Tv
        </span>
      </div>
    </div>
  );
};

export default Footer;
