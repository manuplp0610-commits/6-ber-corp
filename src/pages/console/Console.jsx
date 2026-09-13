import "./console.css";
import consoles from "../../data/consoles.json";

export default function Console() {
  return (
    <main className="console-page">
      <section className="console-header">
        <h1>Espace Console</h1>

        <p>
          Venez jouer seul ou entre amis sur nos consoles et profitez d'une
          large sélection de jeux vidéo.
        </p>

        <div className="console-offer">
          <span>🎁</span>

          <div>
            <strong>Une session = une boisson + un snack offert</strong>
            <p>
              Chaque joueur bénéficie d'une boisson et d'un snack pendant sa
              session.
            </p>
          </div>
        </div>
      </section>

      <section className="console-section">
        <div className="section-title">
          <h2>Nos consoles</h2>
          <p>Choisissez votre plateforme et profitez de votre session.</p>
        </div>

        <div className="console-list">
          {consoles.map((console) => (
            <article className="console-card" key={console.name}>
              <div className="console-card-header">
                <div>
                  <h3>{console.name}</h3>
                  <p>{console.description}</p>
                </div>

                <div className="console-price">
                  <strong>{console.price}</strong>
                  <span>/ heure</span>
                </div>
              </div>

              <div className="games-section">
                <h4>Jeux disponibles</h4>

                <div className="games-grid">
                  {console.games.map((game) => (
                    <div className="game-card" key={game.name}>
                      <img src={game.image} alt={game.name} />

                      <div className="game-name">
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

      <section className="console-info">
        <h2>Jouez comme vous voulez</h2>

        <p>
          Seul, entre amis ou en groupe, le tarif est fixé par console et par
          heure. Le nombre de joueurs n'influence donc pas le prix de la
          session.
        </p>
      </section>
    </main>
  );
}
