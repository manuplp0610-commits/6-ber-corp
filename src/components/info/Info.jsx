import { useState, useEffect } from "react";
import "../info/info.css";

export default function Info() {
  const [businessInfo, setBusinessInfo] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/businessInfo.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des informations");
        }

        return response.json();
      })
      .then((result) => {
        setBusinessInfo(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const info = businessInfo[0];

  return (
    <section className="infos">
      <div className="wrap infos-grid">
        <div className="info-item">
          <div className="info-icon">⏰</div>
          <div>
            <div className="info-label">Horaires</div>
            <div className="info-value">{info?.openHoursCut}</div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">📍</div>
          <div>
            <div className="info-label">Adresse</div>
            <div className="info-value">
              {info?.adress?.rue}, {info?.adress?.numero}
              <br />
              {info?.adress?.cp} {info?.adress?.ville}
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">☎</div>
          <div>
            <div className="info-label">Contact</div>
            <a href={`tel:${info?.phone}`} className="info-value">
              {info?.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
