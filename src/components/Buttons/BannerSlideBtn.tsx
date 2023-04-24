import React from 'react';
import { IBannerBtnProps } from '../../interfaces/BannerButtonProps';

export const BannerSlideBtn: React.FC<IBannerBtnProps> = ({ movieUrl }) => {
  return (
    <button className="bg-gray-900 rounded-md max-h-[70px] p-2 pl-20 pr-20 mt-10">
      <a href={movieUrl}></a>
      <img src="../../icons/PlayIcon.svg" className="w-[50px] h-[50px]" />
    </button>
  );
};

export default BannerSlideBtn;
