// Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="nav-content">
                <div className="nav-logo">
                    <a href="/">OSSDC X NSHMKC DURGAPUR</a>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <span ></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <a href="/code-of-conduct">Organizer</a>
                    <a href="/code-of-conduct">Code of Conduct</a>
                    <button 
                        className="theme-toggle"
                        onClick={toggleDarkMode}
                    >
                        {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;