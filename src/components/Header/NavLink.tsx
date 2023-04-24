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
        className="text-white sm:text-sm md:text-xl lg:text-2xl mr-2 lg:mr-8 hover:cursor-pointer p-2 flex justify-between items-center"
        aria-labelledby="dropdownHoverButton"
        onClick={onClick}
      >
        <Link to={link}>{title}</Link>
      </li>
    );
  } else if (type === 'subscribe') {
    return (
      <li
        className="text-white sm:text-sm md:text-xl lg:text-2xl mr-2 lg:mr-8 border-[1px] p-2 pl-4 pr-4 hover:cursor-pointer hover:bg-[#1F80E0] ease-out duration-300 rounded-3xl"
        onClick={onClick}
      >
        <Link to={link}>{title}</Link>
      </li>
    );
  }
  return (
    <li
      className="text-white sm:text-sm md:text-xl lg:text-2xl mr-2 lg:mr-8 hover:cursor-pointer p-2 flex justify-between items-center"
      aria-labelledby="dropdownHoverButton"
      onClick={onClick}
    >
      <Link to={link}>{title}</Link>
      <img src="../../icons/DropdownIcon.svg" className="w-5 h-5 ml-1 mt-2" />
    </li>
  );
};

export default NavLink;
