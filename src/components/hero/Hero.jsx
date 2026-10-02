import "./hero.css";

import NavBar from "../navBar/NavBar";

import { Link } from "react-router-dom";

import { motion } from "motion/react";

import InfoFlashBanner from "../infoFlashBanner/InfoFlashBanner";

export default function Hero() {
  const heroContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const heroItem = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const heroButtons = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="hero">
      <InfoFlashBanner
        variant={"hero"}
        title={"Ouverture prochaine"}
        link={"Inscrivez-vous à notre newsletter pour ne rien manquer."}
      />

      <div className="overlay"></div>

      <NavBar variant="hero" />

      <motion.div
        className="wrap hero-content"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-eyebrow" variants={heroItem}>
          6 Ber Corp - Bar geek à Liège
        </motion.h1>

        <motion.p className="hero-tagline" variants={heroItem}>
          Cartes, consoles, PC et bonnes ondes. Le repaire où ton niveau de
          puissance grimpe à chaque partie.
        </motion.p>

        <motion.div className="hero-cta" variants={heroButtons}>
          <Link to="/shop" className="btn btn-primary">
            Découvrir la boutique
          </Link>

          <Link to="/event" className="btn btn-ghost">
            Voir les prochains tournois
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
