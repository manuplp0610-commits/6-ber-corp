import "./article.css";

export default function Article({
  category,
  title,
  description,
  price,
  image,
  badge,
}) {
  return (
    <article className="article-card">
      <div className="article-image">
        <img src={image} alt={title} />

        {badge && <span className="article-badge">{badge}</span>}

        <span className="article-category">{category}</span>
      </div>

      <div className="article-body">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="article-footer">
          <strong className="article-price">{price}</strong>

          <button className="article-button">Voir</button>
        </div>
      </div>
    </article>
  );
}
