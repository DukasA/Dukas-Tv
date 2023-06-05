import React, { useEffect, useState } from 'react';

interface IModalProps {
  messageCharacter: string; // character for message (Error, Success, Info ...)
  message: string; // modal message
  onClick: () => void; // function for open/close our modal
}

interface IColors {
  [key: string]: string;
}

export const Modal: React.FC<IModalProps> = ({
  message,
  messageCharacter,
  onClick,
}) => {
  const colors: IColors = {
    Success: '#69F0AE',
    Info: '#1F80E0',
    Error: '#FF5252',
  };

  const [currentColor, setCurrentColor] = useState<string>('');

  useEffect(() => {
    setCurrentColor(colors[messageCharacter]);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[100%] z-50 bg-black/70 flex justify-center items-center p-5 md:p-0">
      <div className="max-w-[400px] p-5 md:p-10 md:pt-10 md:pb-10 bg-[#1c1c1e] rounded-xl flex justify-center items-center flex-col text-center">
        {/* MODAL TITLE */}
        <h3
          style={{ color: currentColor }}
          className={`text-[${currentColor}] text-xl mb-10`}
        >
          {messageCharacter}
        </h3>
        <h1 className="text-white/70 text-2xl">{message}</h1>
        <button
          onClick={onClick}
          style={{ background: currentColor }}
          className={`rounded-md max-h-[70px] p-2 pl-20 pr-20 mt-10 font-bold text-xl text-white`}
        >
          Close
        </button>
      </div>
    </div>
  );
};
