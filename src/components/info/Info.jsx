import { useState, useEffect } from "react";
import "../info/info.css";

export default function Info() {
  const [apiState, setApiState] = useState({
    loading: true,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    fetch("https://api-hf41.onrender.com/api/businessInfo")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur lors du chargement des PC");
        }
        return res.json();
      })
      .then((data) => {
        setApiState({
          loading: false,
          error: false,
          data,
        });
      })
      .catch((error) => {
        setApiState({
          loading: false,
          error: true,
          data: undefined,
        });
        console.error(error);
      });
  }, []);

  let content = null;

  if (apiState.loading) {
    content = <p>Chargement des PC...</p>;
  } else if (apiState.error) {
    content = <p>Une erreur est survenue lors du chargement des PC.</p>;
  } else if (!apiState.data?.length) {
    content = <p>Aucun PC disponible pour le moment.</p>;
  }

  return (
    <section className="infos">
      <div className="wrap infos-grid">
        <div className="info-item">
          <div className="info-icon">⏰</div>
          <div>
            <div className="info-label">Horaires</div>
            <div className="info-value">{apiState.data?.openHoursCut}</div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">📍</div>
          <div>
            <div className="info-label">Adresse</div>
            <div className="info-value">
              {apiState.data?.adress?.rue}, {apiState.data?.adress?.numero}
              <br />
              {apiState.data?.adress?.cp} {apiState.data?.adress?.ville}
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">☎</div>
          <div>
            <div className="info-label">Contact</div>
            <a href={`tel:${apiState.data?.phone}`} className="info-value">
              {apiState.data?.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
