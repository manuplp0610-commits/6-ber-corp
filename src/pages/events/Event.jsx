import "./event.css";
import HeaderPages from "../../components/headerPages/HeaderPages";

const events = [
  {
    day: "20",
    month: "SEP",
    date: "20 septembre 2026",
    time: "14h00",
    type: "Tournoi",
    icon: "🏆",
    title: "Tournoi Mario Kart",
    description:
      "Venez vous affronter entre amis lors d’un tournoi convivial où seuls les meilleurs pilotes atteindront la première place.",
  },
  {
    day: "27",
    month: "SEP",
    date: "27 septembre 2026",
    time: "19h00",
    type: "Gaming",
    icon: "🎮",
    title: "Soirée Gaming",
    description:
      "Une soirée dédiée au jeu vidéo avec plusieurs consoles, des jeux variés et une ambiance parfaite pour jouer entre amis.",
  },
  {
    day: "04",
    month: "OCT",
    date: "4 octobre 2026",
    time: "18h00",
    type: "Pop culture",
    icon: "✨",
    title: "Soirée Pop Culture",
    description:
      "Anime, jeux vidéo, cartes, figurines et univers cultes sont à l’honneur lors de cette soirée spéciale 6 Ber-Corp.",
  },
];

export default function Event() {
  return (
    <section className="event-page">
      <HeaderPages
        title="Les Événements"
        subTitle="Découvrez les prochains tournois, soirées gaming et rendez-vous pop culture organisés chez 6 Ber-Corp."
      />

      <section className="event-highlight">
        <div className="event-highlight-icon">📣</div>

        <div>
          <strong>Un événement vous intéresse ?</strong>
          <p>
            Les événements sont accessibles directement sur place. Pour plus
            d’informations, adressez-vous à l’équipe du bar.
          </p>
        </div>
      </section>

      <section className="event-section">
        <div className="event-section-heading">
          <div>
            <span className="event-kicker">À l’agenda</span>
            <h2>À venir chez 6 Ber-Corp</h2>
          </div>

          <span className="event-count">
            {events.length} événements programmés
          </span>
        </div>

        <div className="event-list">
          {events.map((event, index) => (
            <article
              className={`event-card ${index === 0 ? "is-next" : ""}`}
              key={`${event.date}-${event.title}`}
            >
              <div className="event-date">
                <span className="event-day">{event.day}</span>
                <span className="event-month">{event.month}</span>
              </div>

              <div className="event-card-icon">{event.icon}</div>

              <div className="event-content">
                <span className="event-type">{event.type}</span>

                {index === 0 && (
                  <span className="event-next-badge">Prochain événement</span>
                )}

                <h3>{event.title}</h3>

                <p>{event.description}</p>

                <div className="event-details">
                  <span>📅 {event.date}</span>
                  <span>🕐 {event.time}</span>
                  <span>📍 6 Ber-Corp</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="event-footer">
        <span>🎲</span>

        <div>
          <h2>Une idée d’événement ?</h2>
          <p>
            Tournoi, quiz, soirée thématique ou rencontre entre passionnés :
            partagez vos idées directement avec notre équipe.
          </p>
        </div>
      </section>
    </section>
  );
}
