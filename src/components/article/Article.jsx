import "./article.css";

export default function Article({ article }) {
  return (
    <article className="article-card">
      <div className="article-image-container">
        <img
          src={article.image}
          alt={article.name}
          className="article-image"
          loading="lazy"
        />

        {article.rating === 5 && (
          <span className="article-badge">Incontournable</span>
        )}
      </div>

      <div className="article-info">
        <div className="article-meta">
          <span>{article.univers}</span>
          <span>{article.category}</span>
        </div>

        <h3 className="article-name">{article.name}</h3>

        <div className="article-price-row">
          <p className="article-price">{article.price} €</p>

          {article.rating && (
            <span className="article-rating">★ {article.rating}/5</span>
          )}
        </div>

        <p className="article-description">{article.description}</p>

        <div className="article-footer">
          <span className="article-location">
            <span className="location-dot"></span>
            Vente sur place uniquement
          </span>
        </div>
      </div>
    </article>
  );
}
