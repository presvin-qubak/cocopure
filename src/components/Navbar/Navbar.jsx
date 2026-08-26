import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* LOGO */}

        <NavLink
          to="/"
          end
          className="logo"
          onClick={closeMenu}
          aria-label="CocoPure Home"
        >
          <span className="logo-icon">
            🥥
          </span>

          <span className="logo-text">
            Coco<span>Pure</span>
          </span>
        </NavLink>


        {/* DESKTOP NAVIGATION */}

        <div className="nav-links">

          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/benefits">
            Benefits
          </NavLink>

          <NavLink to="/products">
            Products
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </div>


        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* MOBILE NAVIGATION */}

        <div
          className={`mobile-nav ${
            menuOpen ? "mobile-nav-open" : ""
          }`}
        >

          <NavLink
            to="/"
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/benefits"
            onClick={closeMenu}
          >
            Benefits
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeMenu}
          >
            Products
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;