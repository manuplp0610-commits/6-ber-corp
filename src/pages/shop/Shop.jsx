import "./shop.css";
import Article from "../../components/article/Article";
import articlesData from "../../data/articles.json";
import { useEffect, useState } from "react";

export default function Shop() {
  const [articles, setArticles] = useState([]);
  const [sortMark, setSortMark] = useState("tout");
  const [sortCategory, setSortCategory] = useState("tout");
  const [sortPrice, setSortPrice] = useState("pertinence");
  const articlesFilterMark = articles.filter(
    (article) => sortMark === "tout" || article.univers === sortMark,
  );
  const articlesFilterCategory = articlesFilterMark.filter(
    (article) => sortCategory === "tout" || article.category === sortCategory,
  );
  const articlesFilterPrice = articlesFilterCategory.sort((a, b) => {
    switch (sortPrice) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "popularity":
        return b.rating - a.rating;
      default:
        return b.id - a.id;
    }
  });
  const deleteFiler = () => {
    setSortMark("tout");
    setSortCategory("tout");
    setSortPrice("pertinence");
  };
  useEffect(() => {
    setArticles(articlesData);
  }, []);

  const markChange = (e) => {
    setSortMark(e.target.value);
  };

  return (
    <div className="shop-container">
      <section className="shop-header">
        <h1 className="shop-title"> La Boutique</h1>
        <p>
          Découvrez notre sélection de produits issus de vos univers préférés et
          retrouvez-les directement dans notre boutique 6 Ber-Corp.
        </p>
      </section>
      <section className="shop-main">
        <div className="filters-section">
          <div className="shop-info">
            <span className="shop-info-icon">🏪</span>
            <div>
              <strong>Disponible directement en boutique</strong>
              <p>
                Les articles présentés sur le site sont disponibles à l'achat
                directement chez 6 Ber-Corp.
              </p>
            </div>
          </div>
          <div className="sort-filter">
            <label htmlFor="sort">Trier par :</label>
            <select
              value={sortPrice}
              onChange={(e) => setSortPrice(e.target.value)}
              id="sort"
              className="sort-select"
            >
              <option value="pertinence">Pertinence</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="popularity">Popularité</option>
            </select>
          </div>
          <div className="sortMark">
            <label htmlFor="sort">Marque :</label>
            <select
              value={sortMark}
              onChange={markChange}
              id="select"
              className="sort-select"
            >
              <option value="tout">Toutes marques</option>

              {[...new Set(articles.map((article) => article.univers))].map(
                (univers) => (
                  <option key={univers} value={univers}>
                    {univers}
                  </option>
                ),
              )}
            </select>
          </div>
          <div className="filter-options">
            <div className="filter-category">
              <h3>Catégorie :</h3>
              <ul>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="tout"
                      checked={sortCategory === "tout"}
                      onChange={(e) => {
                        setSortCategory(e.target.value);
                      }}
                    />
                    Tout
                  </label>
                </li>
                {[...new Set(articles.map((article) => article.category))].map(
                  (category) => (
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          value={category}
                          checked={sortCategory === category}
                          onChange={(e) => {
                            setSortCategory(e.target.value);
                          }}
                        />
                        {category}
                      </label>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
          <div>
            <button onClick={deleteFiler} className="deleteFiler">
              supprimer Filtres
            </button>
          </div>
        </div>

        <div className="articles-section">
          <span>
            {articlesFilterPrice.length} sur {articles.length} articles
          </span>
          <div className="articles-grid">
            {articlesFilterPrice.length > 0 ? (
              articlesFilterPrice.map((article) => {
                return <Article key={article.id} article={article} />;
              })
            ) : (
              <div>
                <p>Aucun article ne correspond à vos filtres.</p>
                <button onClick={deleteFiler} className="deleteFiler">
                  supprimer Filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
