import React from 'react';
import { useNavigate } from 'react-router';

export const GoBackButton: React.FC = () => {
  const navigation = useNavigate();
  return (
    <div
      className="absolute top-5 left-5 md:top-20 md:left-20 z-50 rounded-full overflow-hidden opacity-70 hover:opacity-100 hover:cursor-pointer"
      onClick={() => navigation(-1)}
    >
      <img src="../../icons/back-button.svg" className="w-10 h-10" />
    </div>
  );
};
