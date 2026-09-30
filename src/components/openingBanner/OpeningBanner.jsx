import "./openingBanner.css";

export default function OpeningBanner() {
  return (
    <div className="opening-banner">
      <span className="opening-banner__dot"></span>

      <div className="opening-banner__content">
        <span className="opening-banner__title">Ouverture prochaine</span>

        <span className="opening-banner__text">
          Découvrez l’univers 6 Ber-Corp avant l’ouverture du magasin.
          <br />
          <a href="#footer" className="opening-banner__link">
            Inscrivez-vous à notre newsletter pour ne pas manquer l’ouverture
          </a>
        </span>
      </div>
    </div>
  );
}
