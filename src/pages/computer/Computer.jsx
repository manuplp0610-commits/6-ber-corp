import "./computer.css";

export default function Computer() {
  const pcs = [
    {
      name: "PC Gaming",
      price: "8,00 €",
      quantity: "PC Gaming",
      description:
        "Des machines performantes pour profiter de vos jeux préférés dans les meilleures conditions.",
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

  return (
    <main className="pc-page">
      <section className="pc-header">
        <h1>Espace PC</h1>

        <p>
          Retrouvez notre espace PC Gaming et profitez de vos jeux préférés dans
          une ambiance dédiée au gaming.
        </p>

        <div className="pc-offer">
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

      <section className="pc-section">
        <div className="section-title">
          <h2>Nos PC Gaming</h2>

          <p>
            Installez-vous, choisissez votre jeu et profitez de votre session.
          </p>
        </div>

        <div className="pc-list">
          {pcs.map((pc) => (
            <article className="pc-card" key={pc.name}>
              <div className="pc-card-header">
                <div>
                  <h3>{pc.name}</h3>

                  <p>{pc.description}</p>
                </div>

                <div className="pc-price">
                  <strong>{pc.price}</strong>

                  <span>/ heure</span>
                </div>
              </div>

              <div className="pc-specs">
                <div className="spec">
                  <span className="spec-label">Type</span>
                  <strong>Gaming</strong>
                </div>

                <div className="spec">
                  <span className="spec-label">Écran</span>
                  <strong>Gaming haute fréquence</strong>
                </div>

                <div className="spec">
                  <span className="spec-label">Périphériques</span>
                  <strong>Clavier + Souris + Casque</strong>
                </div>
              </div>

              <div className="games-section">
                <h4>Jeux disponibles</h4>

                <div className="games-grid">
                  {pc.games.map((game) => (
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

      <section className="pc-info">
        <h2>Prêt à jouer ?</h2>

        <p>
          Que vous soyez là pour une partie rapide ou une longue session entre
          amis, profitez de notre espace PC Gaming dans une ambiance entièrement
          dédiée aux jeux vidéo.
        </p>
      </section>
    </main>
  );
}
