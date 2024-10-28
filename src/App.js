import React from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom"
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      {/* <Services /> */}
      <Work />
      <Contact />
      <div className='text-end'>
        <p style={{color:"grey", fontSize:"13px"}}>Inspired by Cristian Mihai</p>
      </div>
    </div>
  );
};

export default App;
