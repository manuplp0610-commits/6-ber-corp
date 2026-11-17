import "./dashHome.css";

export default function DashHome() {
  return (
    <>
      <section className="dashHome-stats">
        <article className="dashHome-stat-card">
          <span className="dashHome-stat-icon">🛍️</span>

          <div>
            <span className="dashHome-stat-label">Articles en boutique</span>

            <strong></strong>

            <p>Articles disponibles</p>
          </div>
        </article>

        <article className="dashHome-stat-card">
          <span className="dashHome-stat-icon">🎮</span>

          <div>
            <span className="dashHome-stat-label">Consoles</span>

            <strong></strong>

            <p>Postes disponibles</p>
          </div>
        </article>
        <article className="dashHome-stat-card">
          <span className="dashHome-stat-icon">📊</span>

          <div>
            <span className="dashHome-stat-label">Ordinateur</span>

            <strong></strong>

            <p>PC disponible</p>
          </div>
        </article>
        <article className="dashHome-stat-card">
          <span className="dashHome-stat-icon">📅</span>

          <div>
            <span className="dashHome-stat-label">Événements à venir</span>

            <strong></strong>

            <p>Événements programmés</p>
          </div>
        </article>
      </section>

      <section className="dashHome-section"></section>
    </>
  );
}
