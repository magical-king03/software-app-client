import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="">
      <Nav />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/services' Component={Services} />
          <Route exact path='/contact' Component={Contact} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
