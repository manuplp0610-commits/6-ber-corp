import logo from "../../assets/images/logo.png";
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
            placeholder="ton@email.com"
            required
          />

          <button type="submit" className="btn btn-primary">
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

          <div className="socials">
            <a href="#" aria-label="Instagram">
              <i className="fa fa-instagram"></i>
            </a>

            <a href="#" aria-label="Facebook">
              <i className="fa fa-facebook-f"></i>
            </a>

            <a href="#" aria-label="Discord">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Zones</h4>

          <ul>
            <li>
              <a href="#boutique">Boutique</a>
            </li>
            <li>
              <a href="#bar">Bar</a>
            </li>
            <li>
              <a href="#playstation">PlayStation</a>
            </li>
            <li>
              <a href="#pc">Ordinateurs</a>
            </li>
            <li>
              <a href="#events">Événements</a>
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
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Pratique</h4>

          <ul>
            <li>Mar-Dim · 10h-00h</li>
            <li>Rue de l'Arcade 12</li>
            <li>0476/91.44.56</li>
            <li>contact@6ber-corp.be</li>
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
