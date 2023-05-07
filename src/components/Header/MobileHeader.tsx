import React from 'react';
// import { Link } from 'react-router-dom';
import NavLink from './NavLink';

export const MobileHeader: React.FC = () => {
  return (
    <div
      className={`h-[100vh] absolute top-0 left-0 w-[80%] bg-[#1c1c1e] z-30 pt-20`}
    >
      <div className="flex flex-col">
        <nav className="ml-20 flex flex-col">
          <ul className="flex justify-between items-center flex-col">
            <NavLink title="Movies" link={'/movies'} />
            <NavLink title="Series" link={'/series'} />
            <NavLink title="Cartoons" link={'/cartoons'} />
          </ul>
          <ul className="flex justify-between items-center flex-col">
            <NavLink title="Subscribe" type="subscribe" link={'/subscribe'} />
            <NavLink title="LOG IN" type="login" link={'/auth'} />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileHeader;
