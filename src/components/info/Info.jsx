import "../info/info.css";

export default function Info() {
  return (
    <section className="infos">
      <div className="wrap infos-grid">
        <div className="info-item">
          <div className="info-icon">⏰</div>
          <div>
            <div className="info-label">Horaires</div>
            <div className="info-value">Mar–Dim · 10h–00h</div>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon">📍</div>
          <div>
            <div className="info-label">Adresse</div>
            <div className="info-value">Rue de l'Arcade 12</div>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon">☎</div>
          <div>
            <div className="info-label">Contact</div>
            <div className="info-value">0476/91.44.56</div>
          </div>
        </div>
      </div>
    </section>
  );
}
