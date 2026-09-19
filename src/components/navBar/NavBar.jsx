import logo from "../../assets/images/logo.png";

import "./navBar.css";

import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

export default function NavBar({ variant = "default" }) {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn") === "true",
  );

  const [openNav, setOpenNav] = useState(false);
  const [openLog, setOpenLog] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setOpenLog(false);
  };

  const handleClick = () => {
    setOpenNav((prev) => !prev);
  };

  useEffect(() => {
    setOpenNav(false);
  }, [location.pathname]);

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn") === "true");
  }, [location.pathname]);

  return (
    <nav className={`navBar navBar--${variant}`}>
      {/* Connexion desktop */}

      <div className="log">
        <button onClick={() => setOpenLog(!openLog)} className="btn-login">
          <i className="fa-solid fa-user"></i>
        </button>

        {openLog && (
          <div className="log-li">
            {isLoggedIn && <Link to="/dashbord">Dashboard</Link>}

            {isLoggedIn ? (
              <Link onClick={handleLogout} to="/login">
                Déconnexion
              </Link>
            ) : (
              <Link to="/login">Connexion</Link>
            )}
          </div>
        )}
      </div>

      {/* Bouton hamburger */}

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
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      {/* Menu mobile */}

      {openNav && (
        <div className="nav-mobile" id="nav-mobile">
          <div className="nav-mobile-content">
            <ul>
              {/* Connexion / Dashboard mobile */}

              {isLoggedIn ? (
                <>
                  <li>
                    <Link to="/dashbord">Dashboard</Link>
                  </li>

                  <li>
                    <Link onClick={handleLogout} to="/login">
                      Déconnexion
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login">Connexion</Link>
                </li>
              )}

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
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
