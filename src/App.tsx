/* import { onAuthStateChanged } from '@firebase/auth'; */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout';
import { store } from './store/store';

const App: React.FC = () => {
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
