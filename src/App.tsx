import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../src/views/home/Home'
import About from '../src/views/about/About'
import Contact from '../src/views/contact/Contact'
import Gallery from '../src/views/gallery/Gallery'
import SignUP from '../src/views/registration/SignUp'
import Testimonials from '../src/views/testimonials/Testimonials'
import Activities from '../src/views/activities/Activities'

import Header from '../src/layout/header/Header'
import Footer from '../src/layout/footer/Footer'
import '@fontsource/oswald';
const  App = () => {
  return (
    <div style={{ fontFamily: 'Oswald, sans-serif' }}>
       <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/signUP" element={<SignUP />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        <Footer />
       </Router>
     </div>
  );
}

export default App;
