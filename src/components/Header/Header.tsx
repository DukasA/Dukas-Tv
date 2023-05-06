import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLink from './NavLink';

export const Header: React.FC = () => {
  const [isMobileHeaderVisible, setIsMobileHeaderVisible] =
    useState<boolean>(false);

  const handleChangeVisible = () => {
    setIsMobileHeaderVisible(!isMobileHeaderVisible);
  };

  const location = useLocation();

  return (
    <div
      className={
        location.pathname.startsWith('/movie/')
          ? 'hidden'
          : 'max-h-[125px] z-10 p-10 lg:pr-20 lg:pl-20 flex justify-between items-center absolute top-0 left-0 w-full flex-col md:flex-row'
      }
    >
      <div className="w-full flex justify-between items-center">
        <div>
          <span className="text-xl md:text-2xl lg:text-3xl text-white font-semibold">
            <Link to="/">Dukas Tv</Link>
          </span>
        </div>
        <img
          onClick={handleChangeVisible}
          className="w-10 h-10 z-40 visible md:hidden"
          src={
            isMobileHeaderVisible
              ? '../../../icons/CloseMenuIcon.svg'
              : '../../../icons/HamburgerMenuIcon.svg'
          }
        />
      </div>
      {/* DESKTOP HEADER */}
      <div className="hidden md:block">
        <nav className="ml-20 flex justify-between items-center flex-col sm:flex-row">
          <ul className="flex justify-between items-center flex-col sm:flex-row">
            <NavLink title="Movies" type="noDropDown" link={'/movies'} />
            <NavLink title="Series" type="noDropDown" link={'/series'} />
            <NavLink title="Cartoons" type="noDropDown" link={'/cartoons'} />
          </ul>
          <ul className="flex justify-between items-center">
            <NavLink title="Subscribe" type="subscribe" link={'/subscribe'} />
            <NavLink title="Log In" type="login" link={'/login'} />
          </ul>
        </nav>
      </div>
      {/* MOBILE HEADER */}
      <div
        className={`${
          isMobileHeaderVisible ? 'visible' : 'hidden'
        } h-[100vh] absolute top-0 left-0 w-[80%] bg-[#1c1c1e] z-30 pt-20`}
      >
        <div className="">
          <nav className="flex flex-col">
            <ul className="flex justify-between items-center flex-col">
              <NavLink
                title="Home"
                type="noDropDown"
                link={'/'}
                onClick={() => setIsMobileHeaderVisible(!isMobileHeaderVisible)}
              />
              <NavLink
                title="Movies"
                type="noDropDown"
                link={'/Movies'}
                onClick={() => setIsMobileHeaderVisible(!isMobileHeaderVisible)}
              />
              <NavLink
                title="Series"
                type="noDropDown"
                link={'/Series'}
                onClick={() => setIsMobileHeaderVisible(!isMobileHeaderVisible)}
              />
              <NavLink
                title="Cartoons"
                type="noDropDown"
                link={'/Cartoons'}
                onClick={() => setIsMobileHeaderVisible(!isMobileHeaderVisible)}
              />
            </ul>
            <ul className="flex justify-between items-center flex-col">
              <NavLink
                title="Subscribe"
                type="subscribe"
                link={'/Subscribe'}
                onClick={() => setIsMobileHeaderVisible(!isMobileHeaderVisible)}
              />
              <NavLink
                title="LOG IN"
                type="noDropDown"
                link={'/Login'}
                onClick={() => setIsMobileHeaderVisible(!isMobileHeaderVisible)}
              />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
