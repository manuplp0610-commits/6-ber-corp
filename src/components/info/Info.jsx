import { useState, useEffect } from "react";
import "../info/info.css";

export default function Info() {
  const [businessInfo, setBusinessInfo] = useState({});
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/businessInfo.json`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setBusinessInfo(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <section className="infos">
      <div className="wrap infos-grid">
        <div className="info-item">
          <div className="info-icon">⏰</div>
          <div>
            <div className="info-label">Horaires</div>
            <div className="info-value">{businessInfo[0]?.openHoursCut}</div>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon">📍</div>
          <div>
            <div className="info-label">Adresse</div>
            <div className="info-value">
              {businessInfo[0]?.adress.rue}, {businessInfo[0]?.adress.numero}
              <br /> {businessInfo[0]?.adress.cp}{" "}
              {businessInfo[0]?.adress.ville}
            </div>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon">☎</div>
          <div>
            <div className="info-label">Contact</div>
            <a href="tel:+32471284870" className="info-value">
              {businessInfo[0]?.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
