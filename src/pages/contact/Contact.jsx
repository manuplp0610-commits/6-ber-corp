import "./contact.css";

import HeaderPages from "../../components/headerPages/HeaderPages";
import Info from "../../components/info/Info";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faSnapchat,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
  faArrowRight,
  faCar,
  faBus,
  faUsers,
  faGamepad,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section className="contact-page">
      <HeaderPages
        title="Contacte-nous"
        subTitle="Une question sur nos espaces gaming, nos événements ou notre boutique ? Notre équipe est là pour te répondre.."
      />

      <Info />

      <section className="contact-content">
        <div className="contact-wrap contact-grid">
          <div className="contact-informations">
            <div className="section-heading">
              <span className="contact-eyebrow">Nos coordonnées</span>
              <h2>Retrouve-nous facilement</h2>
              <p>
                Passe nous voir directement sur place ou contacte-nous via l’un
                des moyens ci-dessous.
              </p>
            </div>

            <div className="contact-info-list">
              <article className="contact-info-card">
                <div className="contact-info-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Av.+de+la+Closeraie+22%2F2%2C+4000+Liège&travelmode=driving"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h3>Adresse</h3>
                    <p>
                      Avenue de la closeraie, 22/2
                      <br />
                      4000 Rocourt
                      <br />
                      Belgique
                    </p>
                  </div>
                </a>
              </article>

              <article className="contact-info-card">
                <div className="contact-info-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>

                <div>
                  <h3>Téléphone</h3>
                  <p>
                    <a href="tel:+32471284870">0471/28.48.70</a>
                  </p>
                </div>
              </article>

              <article className="contact-info-card">
                <div className="contact-info-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>

                <div>
                  <h3>Email</h3>
                  <p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=6ber.corp@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      6ber.corp@gmail.com
                    </a>
                  </p>
                </div>
              </article>

              <article className="contact-info-card">
                <div className="contact-info-icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>

                <div>
                  <h3>Horaires</h3>
                  <p>
                    Lundi - <span>FERMÉ</span>
                    <br />
                    Mardi - Dimanche : 10h00 - 00h00
                  </p>
                </div>
              </article>
            </div>

            <div className="contact-socials">
              <div className="contact-social-links">
                <a
                  target="_blank"
                  href="https://www.instagram.com/6ber.corp/"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a
                  href="https://www.snapchat.com/add/jazouk1996"
                  aria-label="Snapchat"
                >
                  <FontAwesomeIcon icon={faSnapchat} />
                </a>

                <a
                  target="_blank"
                  href="https://discord.gg/d2Qqt22ne"
                  aria-label="Discord"
                >
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="section-heading">
              <span className="contact-eyebrow">Écris-nous</span>
              <h2>Envoyer un message</h2>
              <p>
                Remplis le formulaire ci-dessous et nous te répondrons dans les
                plus brefs délais.
              </p>
            </div>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Prénom</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Ton prénom"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Nom</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Ton nom"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Adresse email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ton@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet</label>

                <select id="subject" name="subject" defaultValue="">
                  <option value="" disabled>
                    Choisir un sujet
                  </option>

                  <option value="general">Question générale</option>
                  <option value="reservation">Réservation</option>
                  <option value="event">Événement</option>
                  <option value="shop">Boutique</option>
                  <option value="partnership">Partenariat</option>
                  <option value="other">Autre demande</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Écris ton message ici..."
                  required
                ></textarea>
              </div>

              <label className="form-checkbox">
                <input type="checkbox" required />

                <span>
                  J’accepte que mes données soient utilisées afin de répondre à
                  ma demande.
                </span>
              </label>

              <button type="submit" className="contact-submit">
                Envoyer le message
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Localisation */}

      <section className="contact-location">
        <div className="contact-wrap">
          <div className="section-heading section-heading-center">
            <span className="contact-eyebrow">Où nous trouver ?</span>

            <h2>Viens nous rendre visite</h2>

            <p>
              Situé au cœur de Liège, 6 Ber-Corp est facilement accessible en
              voiture et en transports en commun.
            </p>
          </div>

          <div className="location-card">
            <div className="location-map">
              <iframe
                title="Localisation de 6 Ber-Corp"
                src="https://www.google.com/maps?q=Av.+de+la+Closeraie+22%2F2%2C+4000+Liège%2C+Belgique&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="location-details">
              <h3>Informations pratiques</h3>

              <ul>
                <li>
                  <FontAwesomeIcon icon={faCar} />
                  Parking disponible à proximité
                </li>

                <li>
                  <FontAwesomeIcon icon={faBus} />
                  Arrêt de bus à quelques minutes
                </li>

                <li>
                  <FontAwesomeIcon icon={faUsers} />
                  Accueil des groupes et événements privés
                </li>

                <li>
                  <FontAwesomeIcon icon={faGamepad} />
                  Réservation recommandée pour les sessions gaming
                </li>
              </ul>

              <a
                className="location-button"
                href="https://www.google.com/maps/dir/?api=1&destination=Av.+de+la+Closeraie+22%2F2%2C+4000+Liège&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir l’itinéraire
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
