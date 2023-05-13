import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLink from './NavLink';
import { auth } from '../../firebase';
import { onAuthStateChanged, User } from '@firebase/auth';

export const Header: React.FC = () => {
  const [isMobileHeaderVisible, setIsMobileHeaderVisible] =
    useState<boolean>(false);

  const handleChangeVisible = () => {
    setIsMobileHeaderVisible(!isMobileHeaderVisible);
  };

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log('app user:', user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    return () => {
      unsubscribe();
    };
  });

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
          {user !== null ? (
            <ul className="flex justify-center items-center">
              <NavLink title="Profile" type="login" link={'/user'} />
            </ul>
          ) : (
            <ul className="flex justify-between items-center">
              <NavLink title="Sign In" type="subscribe" link={'/sign_up'} />
              <NavLink title="Log In" type="login" link={'/log_in'} />
            </ul>
          )}
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
                link={'/movies'}
                onClick={() => setIsMobileHeaderVisible(!isMobileHeaderVisible)}
              />
              <NavLink
                title="Series"
                type="noDropDown"
                link={'/series'}
                onClick={() => setIsMobileHeaderVisible(!isMobileHeaderVisible)}
              />
              <NavLink
                title="Cartoons"
                type="noDropDown"
                link={'/cartoons'}
                onClick={() => setIsMobileHeaderVisible(!isMobileHeaderVisible)}
              />
            </ul>
            {user !== null ? (
              <NavLink
                title="Profile"
                type="login"
                link={'/user'}
                onClick={() => setIsMobileHeaderVisible(!isMobileHeaderVisible)}
              />
            ) : (
              <ul className="flex flex-col md:flex-row justify-center md:justify-between items-center">
                <NavLink
                  title="Sign In"
                  type="subscribe"
                  link={'/sign_up'}
                  onClick={() =>
                    setIsMobileHeaderVisible(!isMobileHeaderVisible)
                  }
                />
                <NavLink
                  title="Log In"
                  type="login"
                  link={'/log_in'}
                  onClick={() =>
                    setIsMobileHeaderVisible(!isMobileHeaderVisible)
                  }
                />
              </ul>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
