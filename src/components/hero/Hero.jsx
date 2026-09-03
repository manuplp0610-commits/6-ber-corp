import "./hero.css";
import NavBar from "../navBar/NavBar";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <NavBar variant="hero" />

      <div className="wrap hero-content">
        <h1 className="hero-eyebrow">6 Ber Corp - Bar geek à Liège</h1>

        <p className="hero-tagline">
          Cartes, consoles, PC et bonnes ondes. Le repaire où ton niveau de
          puissance grimpe à chaque partie.
        </p>

        <div className="hero-cta">
          <Link to="/shop" className="btn btn-primary">
            Découvrir la boutique
          </Link>

          <Link to="/event" className="btn btn-ghost">
            Voir les prochains tournois
          </Link>
        </div>
      </div>
    </section>
  );
}
