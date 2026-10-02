import { a } from "motion/react-client";
import "./infoFlashBanner.css";

export default function InfoFlashBanner({ variant, title, info, link }) {
  return (
    <a href="#footer">
      <div className={`opening-banner opening-banner--${variant}`}>
        <span className="opening-banner__dot"></span>
        <span className="opening-banner__dot"></span>
        <span className="opening-banner__dot"></span>
        <div className="opening-banner__content">
          <span className="opening-banner__title">{title}</span>

          <span className="opening-banner__text">
            {info}
            <p
              href="#footer"
              className={`opening-banner__link opening-banner__link--${variant}`}
            >
              {link}
            </p>
          </span>
        </div>
        <span className="opening-banner__dot"></span>
        <span className="opening-banner__dot"></span>
        <span className="opening-banner__dot"></span>
      </div>
    </a>
  );
}
