import "./zone.css";
import ZoneCard from "../zoneCard/ZoneCard";
import Info from "../info/Info";
import InfoFlashBanner from "../infoFlashBanner/InfoFlashBanner";

export default function Zone() {
  return (
    <section className="zones">
      <InfoFlashBanner
        title={"Ouverture prochaine"}
        info={"Découvrez l’univers 6 Ber-Corp avant l’ouverture du magasin."}
        link={
          "Inscrivez-vous à notre newsletter pour ne pas manquer la prochaine ouverture"
        }
      />
      <Info />
      <div className="wrap">
        <div className="section-head">
          <span className="hero-eyebrow">Quatre zones, une seule adresse</span>

          <h2>Ton terrain de jeu</h2>

          <p>
            Chaque coin du complexe a sa spécialité. Clique sur une zone pour
            tout savoir.
          </p>
        </div>

        <div className="zone-grid">
          <ZoneCard
            tag="Boutique"
            title="La Boutique"
            description="Pokémon, Yu-Gi-Oh!, One Piece, ... cartes à collectionner et figurines d'univers manga. Boosters, decks et pièces rares."
            button="Explorer la boutique"
            imageClass="shop"
            path="shop"
          />
          <ZoneCard
            tag="Bar"
            title="Le Bar"
            description="Boissons et snacks pour prendre des forces pendant et entre deux parties."
            button="Voir la carte"
            imageClass="bar"
            path="bar"
          />
          <ZoneCard
            tag="Consoles"
            title="Zone Console"
            description="Setups console dernière génération, jeux en solo ou en groupe, écrans grand format."
            button="Consulté nos jeux disponnible"
            imageClass="console"
            path="console"
          />
          <ZoneCard
            tag="pc gaming"
            title="Zone PC"
            description="Postes PC gaming haute performance pour esport, jeux compétitifs et sessions LAN."
            button="Consulté nos jeux disponnible"
            imageClass="computer"
            path="computer"
          />
          <ZoneCard
            tag="Événements"
            title="Événements et tournois"
            description="Tournois PC et console, soirées à thème, avant-premières. Inscris-toi à la newsletter pour ne rien manquer."
            button="Voir le calendrier"
            imageClass="events"
            path="event"
            wide="true"
          />
        </div>
      </div>
    </section>
  );
}
