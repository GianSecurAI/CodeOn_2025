import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { logoCodeON } from '../assets/images';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cierra el menú móvil cuando el usuario hace clic en un enlace
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="/" className="navbar-logo-container">
            <img src={logoCodeON} alt="CodeON 2025" className="navbar-logo" />
          </a>
        </div>
        
        <div className="hamburger-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></div>
        </div>
        
        <div className={`navbar-right ${mobileMenuOpen ? 'show' : ''}`}>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/agenda" className="nav-link" onClick={closeMenu}>Agenda</Link>
            </li>
            <li className="nav-item">
              <Link to="/faqs" className="nav-link" onClick={closeMenu}>FAQs</Link>
            </li>
            <li className="nav-item">
              <Link to="/codigo-de-conducta" className="nav-link" onClick={closeMenu}>Código de Conducta</Link>
            </li>
          </ul>
          <div className="nav-buttons">
            <a href="https://strong-prince-450.notion.site/24bdd0196ce28009b763f5d91bf3d943?pvs=105" className="nav-button sponsor-button" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Quiero ser patrocinador</a>
            <a href="https://lu.ma/dt831ksd" className="nav-button register-button" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Obtener entrada</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
