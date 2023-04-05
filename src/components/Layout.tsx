import React from 'react';
import { useLocation } from 'react-router';
import AppRouter from './AppRouter';

export const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === '/'
          ? 'w-full min-h-[100vh]'
          : 'w-full min-h-[100vh] pt-[50px] md:pt-[125px]'
      }
    >
      <div className="w-full min-h-[100vh]">
        <AppRouter />
      </div>
    </div>
  );
};

export default Layout;
