import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

export const Header: React.FC = () => {
  return (
    <div className="max-h-[125px] z-10 p-10 pr-20 pl-20 flex justify-between items-center absolute top-0 left-0 w-[100%]">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-[24px] text-white font-semibold">
            <Link to="/">Dukas Tv</Link>
          </span>
        </div>
      </div>
      <div>
        <nav className="ml-20 flex justify-between items-center">
          <ul className="flex justify-between items-center">
            <NavLink title="Movies" link={'/Movies'} />
            <NavLink title="Series" link={'/Series'} />
            <NavLink title="Cartoons" link={'/Cartoons'} />
            <NavLink title="Anime" link={'/Anime'} />
          </ul>
          <ul className="flex justify-between items-center">
            <NavLink title="Subscribe" type="subscribe" link={'/Subscribe'} />
            <NavLink title="LOG IN" type="login" link={'/Login'} />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
