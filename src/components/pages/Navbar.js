import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 900) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              BESPOKE
            </Link>
            <div className="menu-icon" onClick={handleClick}>
            
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Recipes" className="nav-links" onClick={closeMobileMenu}>
                  Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Profile" className="nav-links" onClick={closeMobileMenu}>
                  Profile
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link
                    to="/Form"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    
                  </Link>
                ) : (
                  <Link
                    to="/Form"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    
                      LOGIN
                   
                  </Link>
                )}
              </li>

              <li className="nav-btn">
                {button ? (
                  <Link
                    to="/sign-up"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    
                  </Link>
                ) : (
                  <Link
                    to="/sign-up"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                      SIGN UP
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
    </>
  );
}

export default Navbar;