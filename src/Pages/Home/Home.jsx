import React from 'react';
import About from '../../Components/About/About';
import Address from '../../Components/Address/Address';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Interested from '../../Components/Interested/Interested';
import BasicModal from '../../Components/Modal/Modal';
import Navbar from '../../Components/Navbar/Navbar';
import Numbers from '../../Components/Numbers/Numbers';
import Tech from '../../Components/Technologies/Tech';
import Types from '../../Components/Types/Types'
import Why from '../../Components/Why/Why';

const Home = () => {
    return (
      <>
        <Navbar />
        <Header />
        <Numbers />
        <Types />
        <Tech />
        <About />
        <Why />
        <Address />
        <Interested />
        <Footer />
        <BasicModal />
      </>
    );
}

export default Home;
