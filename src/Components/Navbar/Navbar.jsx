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

  const openGoogleForm = (e, url) => {
    e.preventDefault(); // Prevents navigation
    window.open(url, "_blank"); // Opens Google Form in a new tab
  };

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <div className="nav-content">
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <NavLink to="/" className="nav-logo" onClick={handleLinkClick}>
            Home
          </NavLink>
          <a href="https://forms.gle/fxAjMr6v2UEQBhd69" onClick={(e) => openGoogleForm(e, "https://forms.gle/fxAjMr6v2UEQBhd69")}>
            Sponsorship
          </a>
          <a href="https://forms.gle/b7ar32kRcjqjJZh99" onClick={(e) => openGoogleForm(e, "https://forms.gle/b7ar32kRcjqjJZh99")}>
            Community Partners
          </a>
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
