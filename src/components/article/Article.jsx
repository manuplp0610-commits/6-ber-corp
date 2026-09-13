import "./article.css";

export default function Article({ article }) {
  return (
    <div className="article-card">
      <div className="article-image-container">
        <img src={article.image} className="article-image" />
        {article.rating === 5 && (
          <span className="best-seller-badge">Best-seller</span>
        )}
      </div>
      <div className="article-info">
        <h3>{article.name}</h3>
        <p className="article-price">{article.price} €</p>
        <p className="article-description">{article.description}</p>
        <div className="article-actions">
          <button className="add-to-cart-button">Ajouter au Panier</button>
          <button className="view-product-button">Voir le produit</button>
        </div>
      </div>
    </div>
  );
}
