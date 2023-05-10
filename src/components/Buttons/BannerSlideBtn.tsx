import React from 'react';
import { Link } from 'react-router-dom';
import { IBannerBtnProps } from '../../interfaces/BannerButtonProps';

export const BannerSlideBtn: React.FC<IBannerBtnProps> = ({ movieUrl }) => {
  return (
    <Link to={movieUrl}>
      <button className="bg-gray-900 rounded-md max-h-[70px] p-2 pl-20 pr-20 mt-10">
        <img src="../../icons/PlayIcon.svg" className="w-[50px] h-[50px]" />
      </button>
    </Link>
  );
};

export default BannerSlideBtn;
