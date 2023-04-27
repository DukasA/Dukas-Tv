import React from 'react';
import { formateNumber } from '../../utils/formateNumber';
import { languageCodes } from '../../utils/languageCodes';

interface IMetaDataBlockProps {
  status: string;
  originalLanguage: string;
  budget: number;
  revenue: number;
}

export const MovieMetaDataBlock: React.FC<IMetaDataBlockProps> = ({
  status,
  originalLanguage,
  budget,
  revenue,
}) => {
  return (
    <div className="bg-[#121212] shadow-lg p-5 pt-10 pb-10 rounded-xl mt-10">
      <ul className="flex justify-center md:justify-between items-center flex-wrap flex-col md:flex-row">
        <li className="flex items-center flex-col mb-2 md:mb-0">
          <span className="text-xl">Status:</span>
          <span className="text-white/50">{status}</span>
        </li>
        <li className="flex flex-col items-center mb-2 md:mb-0">
          <span className="text-xl">Original language:</span>
          <span className="text-white/50">
            {languageCodes[originalLanguage]}
          </span>
        </li>
        <li className="flex flex-col items-center mb-2 md:mb-0">
          <span className="text-xl">Budget:</span>
          <span className="text-white/50">{formateNumber(budget)}</span>
        </li>
        <li className="flex flex-col items-center">
          <span className="text-xl">Revenue:</span>
          <span className="text-white/50">{formateNumber(revenue)}</span>
        </li>
      </ul>
    </div>
  );
};
