import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
        <Footer />

    </main>
  )
}

export default Home
