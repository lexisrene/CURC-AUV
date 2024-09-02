import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header-container'>
      <div className="header">
        <Link to="/" className='team-name'>
          ROAR-AUV
        </Link>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link className="home-nav" to="/">Home</Link>
          <Link className="team-nav" to="/team">Team</Link>
          <Link className="vehicle-nav" to="/vehicle">Vehicle</Link>
          <Link className="join-nav" to="/join">Join</Link>
        </div>
        <div className="dropdown-icon" onClick={toggleDropdown}>
          ☰
        </div>
      </div>
    </div>
  );
}

export default Header;
