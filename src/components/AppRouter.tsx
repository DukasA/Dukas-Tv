import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../utils/routes';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/index';
import type { User } from 'firebase/auth';

export const AppRouter: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        /* const refreshTokenInterval = setInterval(() => {
          user.getIdToken(true);
          console.log('refresh');
        }, 20000);
        return () => clearInterval(refreshTokenInterval); */
        /* const signOutTimer = setTimeout(() => {
          auth.signOut();
          console.log('signout');
        }, 2000); */

        /* return () => clearTimeout(signOutTimer); */
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      {user &&
        privateRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
