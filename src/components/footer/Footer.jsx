import { useState, useEffect } from "react";
import logo from "../../../public/logoSmall.webp";
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSnapchat,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [seoOpen, setSeoOpen] = useState(false);
  const [businessInfo, setBusinessInfo] = useState({});
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/businessInfo.json`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setBusinessInfo(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <footer id="footer">
      <div className="newsletter">
        <div>
          <h3>Ne rate aucun événement</h3>
          <p>Inscris-toi à la newsletter pour ne rien manquer.</p>
          <p>
            Tournois, soirées à thème et sorties de cartes - directement dans ta
            boîte mail.
          </p>
        </div>

        <form
          className="newsletter-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="newsletter-email" className="visually-hidden">
            Adresse e-mail
          </label>

          <input
            type="email"
            id="newsletter-email"
            placeholder="ton@emial"
            required
          />

          <button type="submit" className="btn btn-NL">
            S'inscrire
          </button>
        </form>
      </div>

      <div className="footer-grid">
        <div className="footer-col footer-brand">
          <a href="#" className="nav-logo">
            <img
              className="logo-footer"
              src={logo}
              alt="6 Ber Corp"
              width="120"
              height="114"
            />
          </a>
          <p>
            Le bar TCG où cartes, consoles et PC se retrouvent autour d'un bon
            verre.
          </p>

          <div className="footer-social-links">
            <a
              target="_blank"
              href="https://www.instagram.com/6ber.corp/"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://www.snapchat.com/add/jazouk1996"
              aria-label="Snapchat"
            >
              <FontAwesomeIcon icon={faSnapchat} />
            </a>

            <a
              target="_blank"
              href="https://discord.gg/d2Qqt22ne"
              aria-label="Discord"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Zones</h4>

          <ul>
            <li>
              <Link to="/shop">Boutique</Link>
            </li>
            <li>
              <Link to="/bar">Bar</Link>
            </li>
            <li>
              <Link to="/console">PlayStation</Link>
            </li>
            <li>
              <Link to="/computer">Ordinateurs</Link>
            </li>
            <li>
              <Link to="/event">Événements</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Tools and parts</h4>

          <ul>
            <li>Authorisations</li>
            <li>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => setSeoOpen(!seoOpen)}
              >
                SEO partners
              </p>
              {seoOpen && (
                <a
                  className="seo-link"
                  target="_blank"
                  href="https://www.motcha-barista.be/"
                >
                  - Motcha-Barista
                </a>
              )}
            </li>
          </ul>
        </div>

        <div className="footer-col footer-col-prat">
          <h4>Pratique</h4>

          <ul>
            <li>{businessInfo[0]?.openHoursCut}</li>
            <li>
              {businessInfo[0]?.adress.rue} {businessInfo[0]?.adress.numero},
              <br /> {businessInfo[0]?.adress.cp}{" "}
              {businessInfo[0]?.adress.ville}
            </li>
            <li>{businessInfo[0]?.phone}</li>
            <li>{businessInfo[0]?.mail}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 6Ber-Corp. Tous droits réservés. Website create by{" "}
        <a href="">Nova Dev</a>
      </div>
    </footer>
  );
}
