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
          : 'w-full min-h-[100vh] pt-[125px]'
      }
    >
      <AppRouter />
    </div>
  );
};

export default Layout;
