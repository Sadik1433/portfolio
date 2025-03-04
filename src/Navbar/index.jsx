import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./index.css";
import { GiFeatheredWing } from "react-icons/gi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isLight, setDarkMode] = useState(false);

  return (
    // <nav className={`navbar ${isLight ? "light" : " "}`}>
    <nav className="navbar">
      <div className="logo">
        <GiFeatheredWing />
        Sadik{" "}
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {/* <select className="theme" onChange={() => setDarkMode(!isLight)}>
          <option value={isLight}>Dark</option>
          <option value={!isLight}>Light</option>
        </select> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
        
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
