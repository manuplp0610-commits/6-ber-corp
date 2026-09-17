import "./event.css";
import HeaderPages from "../../components/headerPages/HeaderPages";
import { useEffect, useState } from "react";

export default function Event() {
  const [dataEvent, setDataEvent] = useState([]);

  useEffect(() => {
    fetch("/data/events.json")
      .then((reponse) => {
        return reponse.json();
      })
      .then((result) => {
        setDataEvent(result);
      });
  }, []);

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
            {dataEvent.length} événements programmés
          </span>
        </div>

        <div className="event-list">
          {dataEvent.map((event, index) => (
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
