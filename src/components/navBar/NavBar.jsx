import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import "./navBar.css";

export default function NavBar({ variant = "default" }) {
  return (
    <nav className={`navBar navBar--${variant}`}>
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

      {/* Bouton mobile */}
      <button
        className="nav-toggle"
        aria-label="Ouvrir le menu"
        aria-expanded="false"
        aria-controls="nav-mobile"
      >
        ☰
      </button>

      {/* Menu mobile */}
      <div className="nav-mobile" id="nav-mobile">
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
    </nav>
  );
}
