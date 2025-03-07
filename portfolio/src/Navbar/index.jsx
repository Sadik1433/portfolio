import {Link} from 'react-scroll'
import { useState } from 'react';
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
        <Link to="profile" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="project" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
        
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
