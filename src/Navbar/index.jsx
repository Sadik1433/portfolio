import React, { useState } from "react";
import "./index.css";
import { GiFeatheredWing } from "react-icons/gi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLight, setDarkMode] = useState(false);

  return (
    <nav className={`navbar ${isLight ? "light" : " "}`}>
      <div className="logo">
        <GiFeatheredWing />
        Sadik{" "}
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <select className="theme" onChange={() => setDarkMode(!isLight)}>
          <option value={isLight}>Dark</option>
          <option value={!isLight}>Light</option>
        </select>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
