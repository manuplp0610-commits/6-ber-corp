import "./shop.css";
import Article from "../../components/article/Article";
import articlesData from "../../data/articles.json";
import { useEffect, useState } from "react";

export default function Shop() {
  const [articles, setArticles] = useState([]);
  const [sortMark, setSortMark] = useState("tout");
  const [sortCategory, setSortCategory] = useState("tout");
  const [sortPrice, setSortPrice] = useState();
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
      case "newest":
        return b.id - a.id;
      case "popularity":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
  const deleteFiler = () => {
    setSortMark("tout");
    setSortCategory("tout");
    setSortPrice("");
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
        <h1 className="shop-title">Boutique</h1>
      </section>
      <section className="shop-main">
        <div className="filters-section">
          <div className="sort-filter">
            <label htmlFor="sort">Trier par :</label>
            <select
              onChange={(e) => setSortPrice(e.target.value)}
              id="sort"
              className="sort-select"
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
            <select onChange={markChange} id="select" className="sort-select">
              <option value="tout">toutes marques</option>
              <option value="dragonball">Dragon ball</option>
              <option value="pokemon">Pokémon</option>
              <option value="onePiece">One-pièce</option>
              <option value="yugiho">Yu-Gi-Ho</option>
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

                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="Figurines"
                      checked={sortCategory === "Figurines"}
                      onChange={(e) => {
                        setSortCategory(e.target.value);
                      }}
                    />
                    Figurines
                  </label>
                </li>

                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="Cartes"
                      checked={sortCategory === "Cartes"}
                      onChange={(e) => {
                        setSortCategory(e.target.value);
                      }}
                    />
                    Cartes
                  </label>
                </li>

                <li>
                  <label>
                    <input
                      type="checkbox"
                      value="Accessoires"
                      checked={sortCategory === "Accessoires"}
                      onChange={(e) => {
                        setSortCategory(e.target.value);
                      }}
                    />
                    Accessoires
                  </label>
                </li>
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
          <div className="articles-grid">
            {articlesFilterPrice.map((article) => {
              return <Article key={article.id} article={article} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
