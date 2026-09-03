import "./zone.css";
import ZoneCard from "../zoneCard/ZoneCard";
import Info from "../info/Info";
import dataZoneCard from "../../data/dataZoneCard.json";

export default function Zone() {
  return (
    <section className="zones">
      <Info />
      <div className="wrap">
        <div className="section-head">
          <span className="hero-eyebrow">Quatre zones, une seule adresse</span>

          <h2>Ton terrain de jeu</h2>

          <p>
            Chaque coin du bar a sa spécialité. Clique sur une zone pour tout
            savoir.
          </p>
        </div>

        <div className="zone-grid">
          {dataZoneCard.map((zone) => (
            <ZoneCard
              key={zone.id}
              id={zone.id}
              tag={zone.tag}
              title={zone.title}
              description={zone.description}
              button={zone.button}
              imageClass={zone.imageClass}
              wide={zone.wide}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
