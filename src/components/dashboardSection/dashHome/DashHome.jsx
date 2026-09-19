import articles from "../../../../public/data/articles.json";
import consoles from "../../../../public/data/consoles.json";
import computer from "../../../../public/data/computers.json";
import events from "../../../../public/data/events.json";
import "./dashHome.css";

export default function DashHome() {
  return (
    <>
      <section className="dashHome-stats">
        <article className="dashHome-stat-card">
          <span className="dashHome-stat-icon">🛍️</span>

          <div>
            <span className="dashHome-stat-label">Articles en boutique</span>

            <strong>{articles.length}</strong>

            <p>Articles disponibles</p>
          </div>
        </article>

        <article className="dashHome-stat-card">
          <span className="dashHome-stat-icon">🎮</span>

          <div>
            <span className="dashHome-stat-label">Consoles</span>

            <strong>{consoles[0].numbers}</strong>

            <p>Postes disponibles</p>
          </div>
        </article>
        <article className="dashHome-stat-card">
          <span className="dashHome-stat-icon">📊</span>

          <div>
            <span className="dashHome-stat-label">Ordinateur</span>

            <strong>{computer[0].numbers}</strong>

            <p>PC disponible</p>
          </div>
        </article>
        <article className="dashHome-stat-card">
          <span className="dashHome-stat-icon">📅</span>

          <div>
            <span className="dashHome-stat-label">Événements à venir</span>

            <strong>{events.length}</strong>

            <p>Événements programmés</p>
          </div>
        </article>
      </section>

      <section className="dashHome-section"></section>
    </>
  );
}
