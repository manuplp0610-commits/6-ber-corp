import logoLarge from "../../../public/logoLarg.webp";
import logoSmall from "../../../public/logoSmall.webp";

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
  const [openMobileLog, setOpenMobileLog] = useState(false);
  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setOpenLog(false);
    setOpenMobileLog(false);
  };

  const handleClick = () => {
    setOpenNav((prev) => !prev);
    setOpenLog(false);
    setOpenMobileLog(false);
  };
  const closeNav = () => {
    setOpenNav(false);
    setOpenLog(false);
    setOpenMobileLog(false);
  };
  useEffect(() => {
    setOpenNav(false);
  }, [location.pathname]);

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn") === "true");
  }, [location.pathname]);

  return (
    <nav className={`navBar navBar--${variant}`}>
      <div className="log">
        <button onClick={() => setOpenLog(!openLog)} className="btn-login">
          <i className="fa-solid fa-user"></i>
        </button>

        {openLog && (
          <div className="log-li">
            {isLoggedIn && (
              <Link onClick={closeNav} to="/dashbord">
                Dashboard
              </Link>
            )}

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

      <Link
        to="/"
        className={`logo-link logo-link--left ${
          openNav ? "logo-link--mobile-open" : ""
        }`}
      >
        <img
          className={`logo-left logo-left--${variant}`}
          src={logoSmall}
          alt="6 Ber Corp"
        />
      </Link>

      <div className={`nav-inner nav-inner--${variant}`}>
        <div className={`nav-links nav-links--${variant}`}>
          {/* Groupe gauche */}
          <div className={`sind-nav sind-nav--left sind-nav--${variant}`}>
            <Link onClick={closeNav} to="/shop">
              Boutique
            </Link>
            <Link onClick={closeNav} to="/bar">
              Bar
            </Link>
            <Link onClick={closeNav} to="/console">
              Consoles
            </Link>
          </div>

          {/* Logo central */}
          <Link to="/" className="logo-link logo-link--center">
            <img
              fetchpriority="high"
              className={`logo-center logo-center--${variant}`}
              src={logoLarge}
              alt="6 Ber Corp"
            />
          </Link>

          {/* Groupe droit */}
          <div className={`sind-nav sind-nav--right sind-nav--${variant}`}>
            <Link onClick={closeNav} to="/computer">
              PC
            </Link>
            <Link onClick={closeNav} to="/event">
              Événements
            </Link>
            <Link onClick={closeNav} to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {openNav && (
        <div className="nav-mobile" id="nav-mobile">
          <div className="nav-mobile-content">
            <div className="mobile-login">
              <button
                onClick={() => setOpenMobileLog(!openMobileLog)}
                className="btn-login"
                aria-label={
                  openMobileLog
                    ? "Fermer le menu utilisateur"
                    : "Ouvrir le menu utilisateur"
                }
              >
                <i className="fa-solid fa-user"></i>
              </button>

              {openMobileLog && (
                <div className="log-li">
                  {isLoggedIn && (
                    <Link onClick={closeNav} to="/dashbord">
                      Dashboard
                    </Link>
                  )}

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

            <ul>
              <li>
                <Link onClick={closeNav} to="/shop">
                  Boutique
                </Link>
              </li>

              <li>
                <Link onClick={closeNav} to="/bar">
                  Bar
                </Link>
              </li>

              <li>
                <Link onClick={closeNav} to="/console">
                  Consoles
                </Link>
              </li>

              <li>
                <Link onClick={closeNav} to="/computer">
                  PC
                </Link>
              </li>

              <li>
                <Link onClick={closeNav} to="/event">
                  Événements
                </Link>
              </li>

              <li>
                <Link onClick={closeNav} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
