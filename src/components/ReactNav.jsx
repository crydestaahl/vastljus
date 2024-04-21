import React, { useState } from 'react';
import styles from './nav.module.css'; // Import CSS Module
import logo from '../assets/img/logo.png'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navigation}>
      <a href='#' to="/" className={styles.logo}>
        <img src={logo} />
      </a>
      <ul
        className={`nav-links hide ${
          isMobileMenuOpen ? styles.active : styles.hidden
        }`}
      >
        <li>
        <a href='#'>Home</a>
        </li>
        <li>
        <a href='#'>About</a>
        </li>
        <li>
        <a href='#'>Contact</a>
        </li>
        {/* Add more navigation links here */}
      </ul>
      <button className='menu-toggle' onClick={toggleMobileMenu}>
        <i className="fas fa-bars"></i> {/* Font Awesome icon for menu */}
      </button>
    </nav>
  );
};

export default Navigation;
