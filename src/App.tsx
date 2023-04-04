import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    //  container
    <div className="w-full h-[100%] bg-[#1c1c1e]">
      <BrowserRouter>
        <Header />
        <Layout />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
