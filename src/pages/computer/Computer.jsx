import "./computer.css";
import HeaderPages from "../../components/headerPages/HeaderPages";

const pcs = [
  {
    name: "PC Gaming",
    price: "8,00 €",
    description:
      "Des machines performantes pour jouer dans les meilleures conditions, seul ou entre amis.",
    specs: [
      ["Type", "PC Gaming"],
      ["Écran", "Haute fréquence"],
      ["Équipement", "Clavier, souris et casque"],
    ],
    games: [
      {
        name: "Counter-Strike 2",
        image:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
      },
      {
        name: "League of Legends",
        image:
          "https://store-images.s-microsoft.com/image/apps.18996.14127010465288187.f9de4a96-0ee4-4da3-bf66-d4132b38c599.caf661a7-e0b3-492d-b91b-63627e47283e",
      },
      {
        name: "Valorant",
        image:
          "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S2_1200x1600-48e0ba488218436d9b3f32682fa5dbe7",
      },
      {
        name: "Fortnite",
        image:
          "https://static.thcdn.com/productimg/1600/1600/11492350-1064494124856985.jpg",
      },
      {
        name: "Minecraft",
        image:
          "https://store-images.s-microsoft.com/image/apps.808.14492077886571533.be42f4bd-887b-4430-8ed0-622341b4d2b0.c8274c53-105e-478b-9f4b-41b8088210a3?q=90&w=512&h=768&mode=crop&format=jpg&background=%23FFFFFF",
      },
      {
        name: "EA Sports FC 26",
        image:
          "https://store-images.s-microsoft.com/image/apps.39200.13880594673876343.1289e898-a927-48c2-a81c-660602f0234e.67a779b6-d3fa-4ddd-8363-6619dbfe6cf5",
      },
    ],
  },
];

export default function Computer() {
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

          <span className="pc-status">
            <i></i> Disponible sur place
          </span>
        </div>

        <div className="pc-list">
          {pcs.map((pc) => (
            <article className="pc-card" key={pc.name}>
              <div className="pc-card-header">
                <div className="pc-card-title">
                  <div className="pc-card-icon">⚡</div>

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
