import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen((prevMenu) => !prevMenu);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <div className="nav-content">
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <NavLink to="/" className="nav-logo" onClick={handleLinkClick}>
          Home
        </NavLink>
          <NavLink to="/sponsorship" onClick={handleLinkClick}>
            Sponsorship
          </NavLink>
          <NavLink to="/partners" onClick={handleLinkClick}>
            Community Partners
          </NavLink>
          <NavLink to="/team" onClick={handleLinkClick}>
            Team
          </NavLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
