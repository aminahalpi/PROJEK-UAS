import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/instagram-icon.svg" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/facebook-icon.svg" alt="Facebook" className="social-icon" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/youtube-icon.svg" alt="YouTube" className="social-icon" />
        </a>
      </div>
      <p className="copyright">2025 © GiCare UAD.</p>
    </footer>
  );
};

export default Footer;