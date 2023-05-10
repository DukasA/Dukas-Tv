import React from 'react';

interface IBtnProps {
  onClick: () => void;
}

export const UserDetails: React.FC<IBtnProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center md:justify-between items-center bg-[#121212] p-4 rounded-xl flex-wrap flex-col md:flex-row">
      {/* USER DATA */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        <img
          src="https://pbs.twimg.com/media/ExQ4jZXWEAAmHs4?format=jpg&name=4096x4096"
          alt="User avatar"
          className="w-20 h-20 rounded-full md:mr-6 object-cover"
        />
        <div className="">
          <h2 className="text-2xl font-semibold mt-2 text-center md:text-start">
            John Doe
          </h2>
          <div className="flex flex-col text-white/25">
            <span>Email: admina@gmail.com</span>
          </div>
        </div>
      </div>
      {/* USER ACTIONS */}
      <div className="flex justify-center items-center flex-col md:flex-row">
        <button className="bg-[#1F80E0] rounded-full px-4 py-2 mt-2 w-full whitespace-nowrap md:mr-2">
          Change Password
        </button>
        <button className="bg-[#4CAF50] rounded-full px-4 py-2 mt-2 w-full whitespace-nowrap md:mr-2">
          Change Name
        </button>
        <button
          onClick={onClick}
          className="bg-red-600 rounded-full px-4 py-2 mt-2 w-full whitespace-nowrap"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};
