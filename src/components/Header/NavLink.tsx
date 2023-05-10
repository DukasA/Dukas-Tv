import React from 'react';
import { Link } from 'react-router-dom';
import { ILinkProps } from '../../interfaces/NavLinkProps';

export const NavLink: React.FC<ILinkProps> = ({
  title,
  type,
  link,
  onClick,
}) => {
  if (type === 'noDropDown') {
    return (
      <li
        className="text-white sm:text-sm md:text-lg lg:text-2xl mr-2 lg:mr-8 hover:cursor-pointer p-2 flex justify-between items-center"
        onClick={onClick}
      >
        <Link to={link}>{title}</Link>
      </li>
    );
  } else if (type === 'subscribe' || type === 'login') {
    return (
      <li
        className="flex max-w-[100px] justify-center items-center whitespace-nowrap text-white mb-2 md:mb-0 sm:text-sm md:text-xl lg:text-2xl md:mr-2 lg:mr-8 border-[1px] p-2 pl-4 pr-4 hover:cursor-pointer hover:bg-[#1F80E0] ease-out duration-300 rounded-3xl"
        onClick={onClick}
      >
        <Link to={link}>{title}</Link>
      </li>
    );
  }
  return (
    <li
      className="text-white sm:text-sm md:text-xl lg:text-2xl mr-2 lg:mr-8 hover:cursor-pointer p-2 flex justify-between items-center"
      onClick={onClick}
    >
      <Link to={link}>{title}</Link>
    </li>
  );
};

export default NavLink;
