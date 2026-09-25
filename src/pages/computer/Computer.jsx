import "./computer.css";
import HeaderPages from "../../components/headerPages/HeaderPages";
import { useEffect, useState } from "react";

export default function Computer() {
  const [dataComputer, setDataComputer] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/computers.json`)
      .then((reponse) => {
        return reponse.json();
      })
      .then((result) => {
        setDataComputer(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="pc-page">
      <HeaderPages
        title="Espace PC Gaming"
        subTitle="Installez-vous sur nos setups gaming et profitez d’une expérience performante dans une ambiance dédiée aux joueurs."
      />

      <section className="pc-intro">
        <div className="pc-intro-icon">🖥️</div>

        <div>
          <span className="pc-kicker">Performance et confort</span>
          <h2>Votre setup vous attend</h2>
          <p>
            Que vous veniez pour grimper dans le classement, lancer quelques
            parties entre amis ou découvrir un nouveau jeu, profitez d’un espace
            pensé pour jouer dans les meilleures conditions.
          </p>
        </div>
      </section>

      <section className="pc-section">
        <div className="section-heading">
          <div>
            <span className="pc-kicker">Notre installation</span>
            <h2>PC Gaming disponibles</h2>
          </div>

          <span className="pc-status">Disponible sur place</span>
        </div>

        <div className="pc-list">
          {dataComputer.map((pc) => (
            <article className="pc-card" key={pc.name}>
              <div className="pc-card-header">
                <div className="pc-card-title">
                  <div className="pc-card-icon">
                    {" "}
                    <i className="fa-solid fa-computer"></i>
                  </div>

                  <div>
                    <h3>{pc.name}</h3>
                    <p>{pc.description}</p>
                  </div>
                </div>

                <div className="pc-price">
                  <strong>{pc.price}</strong>
                  <span>/ heure</span>
                </div>
              </div>

              <div className="pc-specs">
                {pc.specs.map(([label, value]) => (
                  <div className="pc-spec" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>

              <div className="games-section">
                <div className="games-heading">
                  <h4>Jeux disponibles</h4>
                  <span>{pc.games.length} jeux proposés</span>
                </div>

                <div className="games-grid">
                  {pc.games.map((game) => (
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

      <section className="pc-steps">
        <div className="section-heading">
          <div>
            <span className="pc-kicker">Une formule simple</span>
            <h2>Comment profiter de l’espace PC ?</h2>
          </div>
        </div>

        <div className="steps-grid">
          <article className="step-card">
            <span>01</span>
            <h3>Choisissez votre jeu</h3>
            <p>Sélectionnez le jeu auquel vous souhaitez jouer.</p>
          </article>

          <article className="step-card">
            <span>02</span>
            <h3>Installez-vous</h3>
            <p>Votre poste et vos périphériques sont prêts à l’emploi.</p>
          </article>

          <article className="step-card">
            <span>03</span>
            <h3>Profitez de votre session</h3>
            <p>Le tarif est calculé par poste et par heure.</p>
          </article>

          <article className="step-card">
            <span>04</span>
            <h3>Savourez votre boisson</h3>
            <p>Une boisson est incluse pour chaque session.</p>
          </article>
        </div>
      </section>

      <section className="pc-info">
        <div className="pc-info-icon">🎮</div>

        <div>
          <h2>Jouez dans les meilleures conditions</h2>
          <p>
            Les sessions sont disponibles directement au bar. Aucun achat ou
            paiement en ligne n’est nécessaire.
          </p>
        </div>
      </section>
    </section>
  );
}
