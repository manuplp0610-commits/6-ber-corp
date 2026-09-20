import "./console.css";
import HeaderPages from "../../components/headerPages/HeaderPages";
import { useEffect, useState } from "react";

export default function Console() {
  const [consoles, setConsoles] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/consoles.json`)
      .then((reponse) => {
        return reponse.json();
      })
      .then((result) => {
        setConsoles(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="console-page">
      <HeaderPages
        title="Espace Console"
        subTitle="Jouez seul ou entre amis sur nos consoles et profitez d’une sélection de jeux dans un espace dédié."
      />

      <section className="console-intro">
        <span className="console-intro-icon">🎮</span>

        <div>
          <span className="console-kicker">L'expérience 6 Ber-Corp</span>
          <h2>Votre prochaine partie commence ici</h2>
          <p>
            Profitez d’un espace confortable, d’une sélection de consoles et
            d’un catalogue de jeux pensé pour jouer seul ou entre amis.
          </p>
        </div>
      </section>

      <section className="console-section">
        <div className="section-heading">
          <div>
            <span className="console-kicker">Nos plateformes</span>
            <h2>Choisissez votre console</h2>
          </div>

          <p>
            {consoles.length} plateforme{consoles.length > 1 ? "s" : ""}{" "}
            disponible
            {consoles.length > 1 ? "s" : ""}
          </p>
        </div>

        <div className="console-list">
          {consoles.map((consoleItem) => (
            <article className="console-card" key={consoleItem.name}>
              <div className="console-card-top">
                <div className="console-icon">🕹️</div>

                <div className="console-card-title">
                  <h3>{consoleItem.name}</h3>
                  <p>{consoleItem.description}</p>
                </div>

                <div className="console-price">
                  <strong>{consoleItem.price} €</strong>
                  <span>par heure</span>
                </div>
              </div>

              <div className="console-card-divider"></div>

              <div className="games-section">
                <div className="games-heading">
                  <h4>Jeux disponibles</h4>
                  <span>{consoleItem.games.length} jeux</span>
                </div>

                <div className="games-grid">
                  {consoleItem.games.map((game) => (
                    <div className="game-card" key={game.name}>
                      <img src={game.image} alt={game.name} loading="lazy" />

                      <div className="game-overlay">
                        <span>{game.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="console-how">
        <div className="section-heading">
          <div>
            <span className="console-kicker">Simple et rapide</span>
            <h2>Comment ça fonctionne ?</h2>
          </div>
        </div>

        <div className="console-steps">
          <article className="console-step">
            <span>01</span>
            <h3>Choisissez</h3>
            <p>Sélectionnez la console et le jeu de votre choix.</p>
          </article>

          <article className="console-step">
            <span>02</span>
            <h3>Installez-vous</h3>
            <p>Prenez place dans notre espace gaming.</p>
          </article>

          <article className="console-step">
            <span>03</span>
            <h3>Jouez</h3>
            <p>Profitez de votre session seul ou entre amis.</p>
          </article>

          <article className="console-step">
            <span>04</span>
            <h3>Savourez</h3>
            <p>Une boisson est incluse pour chaque session.</p>
          </article>
        </div>
      </section>

      <section className="console-info">
        <div className="console-info-icon">💡</div>

        <div>
          <h2>Un tarif simple et transparent</h2>
          <p>
            Le prix est calculé par console et par heure, quel que soit le
            nombre de joueurs. Venez seul, en duo ou en équipe : le tarif reste
            identique.
          </p>
        </div>
      </section>
    </section>
  );
}
