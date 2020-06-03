import React, { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode, toggleMode] = useDarkMode('darkModeSelect', {
    darkMode:false
  });
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          name='darkModeSelect'
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
