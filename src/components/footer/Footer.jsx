import logo from "../../../public/logoSmall.webp";
import "./footer.css";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="newsletter">
        <div>
          <h3>Ne rate aucun événement</h3>
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
            placeholder="6ber.corp@gmail.com"
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
            <img className="logo-footer" src={logo} alt="6 Ber Corp" />
          </a>
          <p>
            Le bar geek où cartes, consoles et PC se retrouvent autour d'un bon
            verre.
          </p>

          <div className="footer-social-links">
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a
              target="_blank"
              href="https://discord.gg/d2Qqt22ne"
              aria-label="Discord"
            >
              <i className="fa-brands fa-discord"></i>
            </a>

            <a href="#" aria-label="TikTok">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Zones</h4>

          <ul>
            <li>
              <a href="">Boutique</a>
            </li>
            <li>
              <a href="">Bar</a>
            </li>
            <li>
              <a href="">PlayStation</a>
            </li>
            <li>
              <a href="">Ordinateurs</a>
            </li>
            <li>
              <a href="">Événements</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Tools and parts</h4>

          <ul>
            <li>
              <a href="#">Authorisations</a>
            </li>
            <li>
              <a href="#">SEO partners</a>
              <span>motcha</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Pratique</h4>

          <ul>
            <li>Mar-Dim · 10h-00h</li>
            <li>Avenue de la closeraie 22/2, 4000 Rocourt</li>
            <li>0471/28.48.70</li>
            <li>6ber.corp@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 6Ber-Corp. Tous droits réservés. Website créé par{" "}
        <a href="">Nova Dev</a>
      </div>
    </footer>
  );
}
