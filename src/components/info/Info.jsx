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
            <div className="info-value">
              Avenue de la closeraie 22 / 2
              <br /> 4000 Rocourt
            </div>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon">☎</div>
          <div>
            <div className="info-label">Contact</div>
            <div className="info-value">0471/28.48.70</div>
          </div>
        </div>
      </div>
    </section>
  );
}
