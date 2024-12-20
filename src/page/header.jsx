import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          { }
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/layanan" onClick={toggleMenu}>Layanan</Link></li>
          <li><Link to="/reservasi" onClick={toggleMenu}>Reservasi</Link></li>
          <li><Link to="/bantuan" onClick={toggleMenu}>Bantuan</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;