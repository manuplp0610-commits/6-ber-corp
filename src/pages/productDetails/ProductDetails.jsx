import "./productDetails.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBoxOpen,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/articles.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des produits");
        }

        return response.json();
      })
      .then((data) => {
        const selectedProduct = data.find((item) => item.id === Number(id));

        setProduct(selectedProduct);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main className="product-details">
        <p className="product-details-message">Chargement du produit...</p>
      </main>
    );
  }

  if (!product) {
    navigate("/noFound");
  }

  return (
    <main className="product-details">
      <button
        className="product-details-back"
        onClick={() => navigate("/shop")}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Retour à la boutique
      </button>

      <section className="product-details-card">
        <div
          className="product-details-image"
          onClick={() => setIsImageOpen(true)}
        >
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details-content">
          <p className="product-details-univers">{product.univers}</p>

          <h1>{product.name}</h1>

          <div className="product-details-rating">
            <div className="product-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                  key={star}
                  icon={faStar}
                  className={star <= product.rating ? "star active" : "star"}
                />
              ))}
            </div>

            <span>{product.rating}/5</span>
          </div>

          <p className="product-details-short-description">
            {product.shortDescription}
          </p>

          <p className="product-details-price">{product.price.toFixed(2)} €</p>

          <div className="product-stock">
            <FontAwesomeIcon icon={faBoxOpen} />

            {product.stock > 0 ? (
              <span>
                En stock — {product.stock} disponible
                {product.stock > 1 ? "s" : ""}
              </span>
            ) : (
              <span>Rupture de stock</span>
            )}
          </div>

          <div className="product-details-meta">
            <div>
              <span>Catégorie</span>
              <strong>{product.category}</strong>
            </div>

            <div>
              <span>Marque</span>
              <strong>{product.brand}</strong>
            </div>

            <div>
              <span>Collection</span>
              <strong>{product.collection}</strong>
            </div>

            <div>
              <span>État</span>
              <strong>{product.condition}</strong>
            </div>
          </div>
        </div>
      </section>
      {isImageOpen && (
        <div className="image-lightbox" onClick={() => setIsImageOpen(false)}>
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setIsImageOpen(false)}
            aria-label="Fermer l'image"
          >
            ×
          </button>

          <img
            src={product.image}
            alt={product.name}
            className="image-lightbox-img"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
      <section className="product-description">
        <h2>Description</h2>

        <p>{product.longDescription}</p>
      </section>

      <section className="product-specifications">
        <h2>Caractéristiques</h2>

        <div className="specifications-grid">
          <div>
            <span>Matière</span>
            <strong>{product.material}</strong>
          </div>

          <div>
            <span>Dimensions</span>
            <strong>{product.dimensions}</strong>
          </div>

          <div>
            <span>Poids</span>
            <strong>{product.weight}</strong>
          </div>

          <div>
            <span>Univers</span>
            <strong>{product.univers}</strong>
          </div>
        </div>
      </section>

      <section className="product-tags">
        <h2>Tags</h2>

        <div className="tags-list">
          {product.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
