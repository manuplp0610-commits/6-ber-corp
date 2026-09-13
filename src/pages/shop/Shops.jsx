import { useState, useEffect } from "react";
import Article from "../../components/article/Article";
import articlesData from "../../data/articles.json";
import "./shop.css";

const Shop = () => {
  const [articles, setArticles] = useState([]);
  const [sortOption, setSortOption] = useState("pertinence");
  const [sortMark, setSortMark] = useState("tout");
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 120],
    rating: 0,
  });

  useEffect(() => {
    // Charger les articles depuis le fichier JSON
    setArticles(articlesData);
  }, []);

  // Tri et filtrage des articles
  const filteredAndSortedArticles = [...articles]
    .filter((article) => {
      const categoryMatch =
        filters.category.length === 0 ||
        filters.category.includes(article.category);
      const priceMatch =
        article.price >= filters.priceRange[0] &&
        article.price <= filters.priceRange[1];
      return categoryMatch && priceMatch;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "newest":
          return b.id - a.id; // Simuler un tri par date (ID croissant)
        case "popularity":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const handleAddToCart = (articleId) => {
    console.log(`Article ajouté au panier : ${articleId}`);
    // Logique pour ajouter au panier
  };

  const handleViewProduct = (articleId) => {
    console.log(`Voir le produit : ${articleId}`);
    // Logique pour afficher le produit
  };

  return (
    <div className="shop-container">
      <section className="shop-header">
        <div className="header-actions">
          <button className="search-button">🔍</button>
          <button className="user-button">👤 Mon Compte</button>
          <button className="cart-button">🛒 Panier</button>
        </div>
      </section>

      <section className="shop-main">
        <div className="filters-section">
          <div className="sort-filter">
            <label htmlFor="sort">Trier par :</label>
            <select
              id="sort"
              className="sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="pertinence">Pertinence</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="newest">Nouveautés</option>
              <option value="popularity">Popularité</option>
            </select>
          </div>
          <div className="sortMark">
            <label htmlFor="sort">Marque :</label>
            <select
              id="select"
              className="sort-select"
              value={sortMark}
              onChange={(e) => setSortMark(e.target.value)}
            >
              <option value="tm">toutes marques</option>
              <option value="dbz">Dragon ball</option>
              <option value="poke">Pokémon</option>
              <option value="op">One-pièce</option>
            </select>
          </div>
          <div className="filter-options">
            <div className="filter-category">
              <h3>Filtrer par</h3>
              <ul>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="Figurines"
                      onChange={(e) => {
                        setFilters((prev) => ({
                          ...prev,
                          category: e.target.checked
                            ? [...prev.category, e.target.value]
                            : prev.category.filter((c) => c !== e.target.value),
                        }));
                      }}
                    />{" "}
                    Figurines
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="Cartes"
                      onChange={(e) => {
                        setFilters((prev) => ({
                          ...prev,
                          category: e.target.checked
                            ? [...prev.category, e.target.value]
                            : prev.category.filter((c) => c !== e.target.value),
                        }));
                      }}
                    />{" "}
                    Cartes
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="Accessoires"
                      onChange={(e) => {
                        setFilters((prev) => ({
                          ...prev,
                          category: e.target.checked
                            ? [...prev.category, e.target.value]
                            : prev.category.filter((c) => c !== e.target.value),
                        }));
                      }}
                    />{" "}
                    Accessoires
                  </label>
                </li>
              </ul>
            </div>

            <div className="filter-price">
              <h4>Prix</h4>
              <input
                type="range"
                min="0"
                max="120"
                value={filters.priceRange[1]}
                className="price-range"
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    priceRange: [prev.priceRange[0], parseInt(e.target.value)],
                  }))
                }
              />
              <div className="price-values">
                <span>€{filters.priceRange[0]}</span>
                <span>€{filters.priceRange[1]}</span>
              </div>
            </div>

            <div className="filter-rating">
              <h4>Évaluation</h4>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      color: star <= filters.rating ? "gold" : "gray",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      setFilters((prev) => ({ ...prev, rating: star }))
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="articles-section">
          <div className="articles-header">
            <span>
              Affichage 1 - {filteredAndSortedArticles.length} de{" "}
              {articles.length} résultats
            </span>
          </div>

          <div className="articles-grid">
            {filteredAndSortedArticles.map((article) => (
              <Article
                key={article.id}
                article={article}
                onAddToCart={handleAddToCart}
                onViewProduct={handleViewProduct}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
