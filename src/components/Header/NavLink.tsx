import React from 'react';
import { Link } from 'react-router-dom';

interface ILinkProps {
  type?: string;
  title: string;
  link: string;
}

export const NavLink: React.FC<ILinkProps> = ({ title, type, link }) => {
  if (type === 'login') {
    return (
      <li
        className="text-white text-[24px] mr-10 hover:cursor-pointer p-2 flex justify-between items-center"
        aria-labelledby="dropdownHoverButton"
      >
        <Link to={link}>{title}</Link>
      </li>
    );
  } else if (type === 'subscribe') {
    return (
      <li className="text-white text-[24px] mr-10 border-[1px] p-2 pl-4 pr-4 hover:cursor-pointer hover:bg-[#1F80E0] ease-out duration-300 rounded-3xl">
        <Link to={link}>{title}</Link>
      </li>
    );
  }
  return (
    <li
      className="text-white text-[24px] mr-10 hover:cursor-pointer p-2 flex justify-between items-center"
      aria-labelledby="dropdownHoverButton"
    >
      <Link to={link}>{title}</Link>
      <img src="../../icons/DropdownIcon.svg" className="w-5 h-5 ml-1 mt-2" />
    </li>
  );
};

export default NavLink;
