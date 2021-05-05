import React, { useState, useEffect } from 'react';
import '../assets/css/NavBar.css';

function NavBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <h3 className="nav__logo">AstroSplash</h3>

      <span className="nav__link">NASA APOD API</span>
    </div>
  );
}

export default NavBar;
