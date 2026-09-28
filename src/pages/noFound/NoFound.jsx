import { Link } from "react-router-dom";
import logoLarge from "../../../public/logoLarg.webp";
import "./noFound.css";

export default function NoFound() {
  return (
    <main className="not-found">
      <div className="not-found-content">
        <img src={logoLarge} alt="6 Ber Corp" className="not-found-logo" />

        <div className="not-found-error">404</div>

        <h1>Page introuvable</h1>

        <p>Oups... cette page n'existe pas ou n'est plus disponible.</p>

        <Link to="/" className="not-found-button">
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
