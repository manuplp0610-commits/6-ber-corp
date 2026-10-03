import logoLarge from "../../../public/logoLarg.webp";
import logoSmall from "../../../public/logoSmall.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
  const [showLogoLeft, setShowLogoLeft] = useState(false);

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

  useEffect(() => {
    if (location.pathname !== "/" || openNav) {
      setShowLogoLeft(true);
      return;
    }

    const handleScroll = () => {
      setShowLogoLeft(window.scrollY >= 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, openNav]);

  return (
    <nav className={`navBar navBar--${variant}`}>
      <div className="log">
        <button onClick={() => setOpenLog(!openLog)} className="btn-login">
          <FontAwesomeIcon icon={faUser} />
        </button>

        {openLog && (
          <div className="log-li">
            {isLoggedIn && (
              <Link onClick={closeNav} to="/dashboard">
                Dashboard
              </Link>
            )}

            {isLoggedIn ? (
              <Link onClick={handleLogout} to="/login">
                Déconnexion
              </Link>
            ) : (
              <Link onClick={closeNav} to="/login">
                Connexion
              </Link>
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

      {/* Logo small */}
      <Link
        to={location.pathname === "/" ? "/#top" : "/"}
        onClick={(event) => {
          if (location.pathname === "/") {
            event.preventDefault();

            document.getElementById("top")?.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
        className={`logo-link logo-link--left ${
          openNav || showLogoLeft ? "logo-link--visible" : ""
        } ${openNav ? "logo-link--mobile-open" : ""}`}
      >
        <img
          className={`logo-left logo-left--${variant}`}
          src={logoSmall}
          alt="6 Ber Corp"
          width="120"
          height="114"
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
              width="300"
              height="287"
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
                <FontAwesomeIcon icon={faUser} />
              </button>

              {openMobileLog && (
                <div className="log-li">
                  {isLoggedIn && (
                    <Link onClick={closeNav} to="/dashboard">
                      Dashboard
                    </Link>
                  )}

                  {isLoggedIn ? (
                    <Link onClick={handleLogout} to="/login">
                      Déconnexion
                    </Link>
                  ) : (
                    <Link onClick={closeNav} to="/login">
                      Connexion
                    </Link>
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
