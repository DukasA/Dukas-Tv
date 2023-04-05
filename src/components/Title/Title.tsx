import React from 'react';

interface ITitleProps {
  title: string;
}

export const Title: React.FC<ITitleProps> = ({ title }) => {
  return (
    <div className="mt-20 mb-8">
      <h1 className="text-white text-3xl font-semibold">{title}</h1>
      {/* <hr className="h-[2px] my-8 border-0 dark:bg-gray-900 " /> */}
    </div>
  );
};

export default Title;
