import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SiAltiumdesigner } from "react-icons/si";
import Hamburger from "hamburger-react";
import "./Navbar.css";
import {Button} from "../button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  },[])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <SiAltiumdesigner className="hamburger" /> DeSIGN
          </Link>
          <div className="menu-icon">
            <Hamburger color="white" toggled={isOpen} toggle={setIsOpen} />
          </div>
          <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/arts" className="nav-links" onClick={closeMobileMenu}>
                Arts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>MORE INFO</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
