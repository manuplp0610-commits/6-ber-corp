import PropTypes from "prop-types";
import "./article.css";

const Article = ({ article, onAddToCart, onViewProduct }) => {
  return (
    <div className="article-card">
      <div className="article-image-container">
        <img src={article.image} alt={article.name} className="article-image" />
        {article.rating === 5 && (
          <span className="best-seller-badge">Best-seller</span>
        )}
      </div>
      <div className="article-info">
        <h3>{article.name}</h3>
        <p className="article-price">€{article.price.toFixed(2)}</p>
        <p className="article-description">{article.description}</p>
        <div className="article-actions">
          <button
            className="add-to-cart-button"
            onClick={() => onAddToCart(article.id)}
          >
            Ajouter au Panier
          </button>
          <button
            className="view-product-button"
            onClick={() => onViewProduct(article.id)}
          >
            Voir le produit
          </button>
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onViewProduct: PropTypes.func.isRequired,
};

export default Article;
