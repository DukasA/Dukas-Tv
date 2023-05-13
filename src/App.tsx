/* import { onAuthStateChanged } from '@firebase/auth'; */
import React /* , { useEffect } */ from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout';
/* import { auth } from './firebase'; */
import { store } from './store/store';

/* СДЕЛАТЬ СТОР И СОХРАНЯТЬ ТУДА ЮЗЕРА, ПОСМОТРЕТЬ ИСПРАВИТСЯ ЛИ ПОВЕДЕНИЕ НАВИГАЦИИ */

const App: React.FC = () => {
  /* useEffect(() => {
    console.log(auth.currentUser);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
        const refreshTokenInterval = setInterval(() => {
          user.getIdToken(true);
          console.log('refresh');
        }, 20000);
        return () => clearInterval(refreshTokenInterval);
         const signOutTimer = setTimeout(() => {
          auth.signOut();
          alert('signout');
        }, 60 * 3600);

        return () => clearTimeout(signOutTimer);
      }
    });
    return unsubscribe;
  }, []); */
  return (
    //  container
    <div className="w-full h-[100%] bg-[#1c1c1e]">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Layout />
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
