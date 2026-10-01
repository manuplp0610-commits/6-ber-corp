import "./event.css";

import HeaderPages from "../../components/headerPages/HeaderPages";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCalendarDay,
  faClock,
  faLocationDot,
  faDiceD20,
} from "@fortawesome/free-solid-svg-icons";

export default function Event() {
  const [dataEvent, setDataEvent] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/events.json`)
      .then((reponse) => {
        return reponse.json();
      })
      .then((result) => {
        setDataEvent(result);
      });
  }, []);

  // Motion légère des événements au scroll
  useEffect(() => {
    const eventCards = document.querySelectorAll(".event-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    eventCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [dataEvent]);

  return (
    <section className="event-page">
      <HeaderPages
        title="Les Événements"
        subTitle="Découvrez les prochains tournois, soirées gaming et rendez-vous pop culture organisés chez 6 Ber-Corp."
      />

      <section className="event-highlight">
        <div className="event-highlight-icon">📅</div>

        <div>
          <strong>Un événement vous intéresse ?</strong>

          <p>
            Les événements sont accessibles directement sur place. Pour plus
            d’informations, adressez-vous à l’équipe du bar ou contactez nous.
            <Link to="/contact" className="event-highlight-link">
              Nous contacter
              <span>→</span>
            </Link>
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
                  <span>
                    <FontAwesomeIcon icon={faCalendarDay} />
                    {event.date}
                  </span>

                  <span>
                    <FontAwesomeIcon icon={faClock} />
                    {event.time}
                  </span>

                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />6 Ber-Corp
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="event-footer">
        <span>
          <FontAwesomeIcon icon={faDiceD20} />
        </span>

        <div>
          <h2>Une idée d’événement ?</h2>

          <p>
            Tournoi, quiz, soirée thématique ou rencontre entre passionnés :
            partagez vos idées directement avec notre équipe.
            <Link to="/contact" className="event-highlight-link">
              Nous contacter
              <span>→</span>
            </Link>
          </p>
        </div>
      </section>
    </section>
  );
}
