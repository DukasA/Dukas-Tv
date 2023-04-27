import React from 'react';

interface IBlockTitleProps {
  title: string;
}

export const BlockTitle: React.FC<IBlockTitleProps> = ({ title }) => {
  return <h3 className="text-3xl ">{title}</h3>;
};
