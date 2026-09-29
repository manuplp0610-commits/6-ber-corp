import "./hero.css";
import NavBar from "../navBar/NavBar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <NavBar variant="hero" />

      <div className="wrap hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="hero-eyebrow"
        >
          6 Ber Corp - Bar geek à Liège
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 2,
          }}
        >
          Cartes, consoles, PC et bonnes ondes. Le repaire où ton niveau de
          puissance grimpe à chaque partie.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 2.4,
          }}
        >
          <Link to="/shop" className="btn btn-primary">
            Découvrir la boutique
          </Link>

          <Link to="/event" className="btn btn-ghost">
            Voir les prochains tournois
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
