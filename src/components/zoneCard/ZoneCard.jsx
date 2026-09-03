import { Link } from "react-router-dom";
import "./zoneCard.css";

export default function ZoneCard({
  id,
  tag,
  title,
  description,
  button,
  imageClass,
  wide = false,
}) {
  return (
    <article className={`zone-card ${wide ? "wide" : ""}`} id={id}>
      <div className={`zone-media ${imageClass}`}>
        <span className="tag">{tag}</span>
      </div>

      <div className="zone-body">
        <h3>{title}</h3>
        <p>{description}</p>

        <Link to={`/${id}`} className="btn btn-ghost">
          {button}
        </Link>
      </div>
    </article>
  );
}
