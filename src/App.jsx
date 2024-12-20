import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './page/header'; 
import Footer from './page/footer'; 
import Home from './page/home'; 
import Layanan from './page/layanan'; 
import Reservasi from './page/reservasi'; 
import Bantuan from './page/bantuan'; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/reservasi" element={<Reservasi />} />
          <Route path="/bantuan" element={<Bantuan />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;