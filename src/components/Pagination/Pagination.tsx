import React from 'react';
import { IPaginationProps } from '../../interfaces/PaginationProps';

export const Pagination: React.FC<IPaginationProps> = ({
  page,
  setPage,
  totalPages,
  scrollElement,
}) => {
  const nextPage = () => {
    setPage(page + 1);
    scrollElement.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const prevPage = () => {
    setPage(page - 1);
    scrollElement.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="flex justify-center items-center mt-20 mb-20 ">
      {/* PREV BUTTON */}
      <span
        onClick={prevPage}
        className={`${
          page === 1 ? 'opacity-50 cursor-not-allowed pointer-events-none ' : ''
        }inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer`}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        Previous
      </span>
      {/* CENTER */}
      <div className="flex justify-center items-center flex-col md:flex-row">
        <span
          className={`inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
        >
          {page}
        </span>
        <span className=" text-gray-500 mr-3">out of</span>
        <span className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          {totalPages}
        </span>
      </div>
      {/* NEXT BUTTON */}
      <span
        onClick={nextPage}
        className={`${
          page === totalPages
            ? 'opacity-50 cursor-not-allowed pointer-events-none '
            : ''
        }inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer`}
      >
        Next
        <svg
          aria-hidden="true"
          className="w-5 h-5 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
    </div>
  );
};
