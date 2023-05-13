import React, { useEffect /* , useState */ } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../utils/routes';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/index';
import { useSelector } from 'react-redux';
import type { User } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setNewUser } from '../store/reducers/userReducer';

export const AppRouter: React.FC = () => {
  /* const [user, setUser] = useState<User | null>(null); */
  const dispatch = useDispatch();
  useEffect(() => {
    /* console.log(user); */
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        /* setUser(user); */
        /* console.log(user);
        const refreshTokenInterval = setInterval(() => {
          user.getIdToken(true);
          console.log('refresh');
        }, 20000);
        return () => clearInterval(refreshTokenInterval); */
        const signOutTimer = setTimeout(() => {
          auth.signOut();
          dispatch(setNewUser(null));
          alert('signout');
        }, 60 * 3600);

        return () => clearTimeout(signOutTimer);
      }
    });
    return unsubscribe;
  }, []);
  const user: User = useSelector((state: { user: User }) => state.user);
  console.log('user:', user);
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
