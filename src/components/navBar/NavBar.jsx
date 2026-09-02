import logo from "../../assets/images/logo.png";
import "./navBar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar({ variant = "default" }) {
  const location = useLocation();

  const [openNav, setOpenNav] = useState(false);

  const handleClick = () => {
    setOpenNav((prev) => !prev);
  };

  useEffect(() => {
    setOpenNav(false);
  }, [location.pathname]);

  return (
    <nav className={`navBar navBar--${variant}`}>
      {/* Bouton mobile */}
      <button
        onClick={handleClick}
        className="nav-toggle"
        aria-label={openNav ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={openNav}
        aria-controls="nav-mobile"
      >
        ☰
      </button>
      {/* Logo gauche - desktop */}
      <Link to="/" className="logo-link logo-link--left">
        <img
          className={`logo-left logo-left--${variant}`}
          src={logo}
          alt="6 Ber Corp"
        />
      </Link>

      <div className={`nav-inner nav-inner--${variant}`}>
        <div className={`nav-links nav-links--${variant}`}>
          {/* Groupe gauche */}
          <div className={`sind-nav sind-nav--left sind-nav--${variant}`}>
            <Link to="/shop">Boutique</Link>
            <Link to="/bar">Bar</Link>
            <Link to="/console">Consoles</Link>
          </div>

          {/* Logo central */}
          <Link to="/" className="logo-link logo-link--center">
            <img
              className={`logo-center logo-center--${variant}`}
              src={logo}
              alt="6 Ber Corp"
            />
          </Link>

          {/* Groupe droit */}
          <div className={`sind-nav sind-nav--right sind-nav--${variant}`}>
            <Link to="/computer">PC</Link>
            <Link to="/event">Événements</Link>
            <a href="#footer">Contact</a>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {openNav && (
        <div className="nav-mobile" id="nav-mobile">
          <div className="nav-mobile-content">
            <ul>
              <li>
                <Link to="/shop">Boutique</Link>
              </li>
              <li>
                <Link to="/bar">Bar</Link>
              </li>
              <li>
                <Link to="/console">Consoles</Link>
              </li>
              <li>
                <Link to="/computer">PC</Link>
              </li>
              <li>
                <Link to="/event">Événements</Link>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
