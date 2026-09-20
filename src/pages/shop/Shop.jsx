import { useEffect, useMemo, useState } from "react";
import "./shop.css";
import HeaderPages from "../../components/headerPages/HeaderPages";
import Article from "../../components/article/Article";

export default function Shop() {
  const [articles, setArticles] = useState([]);
  const [selectedUniverse, setSelectedUniverse] = useState("tout");
  const [selectedCategory, setSelectedCategory] = useState("tout");
  const [sortPrice, setSortPrice] = useState("pertinence");
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/articles.json`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setArticles(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const universes = useMemo(() => {
    return ["tout", ...new Set(articles.map((article) => article.univers))];
  }, [articles]);

  const categories = useMemo(() => {
    return ["tout", ...new Set(articles.map((article) => article.category))];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    const filtered = articles.filter((article) => {
      const matchesUniverse =
        selectedUniverse === "tout" || article.univers === selectedUniverse;

      const matchesCategory =
        selectedCategory === "tout" || article.category === selectedCategory;

      return matchesUniverse && matchesCategory;
    });

    return [...filtered].sort((a, b) => {
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
  }, [articles, selectedUniverse, selectedCategory, sortPrice]);

  const resetFilters = () => {
    setSelectedUniverse("tout");
    setSelectedCategory("tout");
    setSortPrice("pertinence");
  };

  return (
    <section className="shop-page">
      <HeaderPages
        title="La Boutique"
        subTitle="Découvrez une sélection de produits geek et pop culture disponibles directement chez 6 Ber-Corp."
      />
      <section className="shop-hero">
        <div className="shop-hero-content">
          <span className="shop-eyebrow">Collection 6 Ber-Corp</span>

          <h1>
            Les trésors du
            <span> comptoir</span>
          </h1>

          <p>
            Retrouvez une sélection d’objets, accessoires et produits inspirés
            de vos univers préférés. Chaque article est disponible directement a
            au magasin.
          </p>

          <div className="shop-hero-actions">
            <a href="#catalogue" className="shop-primary-button">
              Explorer la sélection
            </a>
          </div>
        </div>

        <div className="shop-hero-decoration" aria-hidden="true">
          <span>✦</span>
          <span>◈</span>
          <span>✧</span>
        </div>
      </section>

      <section className="shop-intro" id="infos">
        <div className="shop-intro-icon">🛍️</div>

        <div>
          <strong>Aucun achat en ligne</strong>
          <p>
            Les articles présentés ici sont disponibles à l’achat directement
            chez 6 Ber-Corp. Venez les découvrir sur place et demandez conseil à
            notre équipe.
          </p>
        </div>

        <a href="/contact" className="shop-intro-link">
          Nous trouver
          <span>→</span>
        </a>
      </section>

      <section className="shop-catalogue" id="catalogue">
        <div className="catalogue-heading">
          <div>
            <span className="section-label">La sélection du moment</span>

            <h2>
              Choisissez votre
              <span> univers</span>
            </h2>
          </div>

          <p>
            {filteredArticles.length} article
            {filteredArticles.length > 1 ? "s" : ""} disponible
            {filteredArticles.length > 1 ? "s" : ""}
          </p>
        </div>

        <div className="shop-controls">
          <div className="filter-group">
            <span className="filter-label">Univers</span>

            <div className="filter-buttons">
              {universes.map((universe) => (
                <button
                  type="button"
                  key={universe}
                  className={
                    selectedUniverse === universe
                      ? "filter-button active"
                      : "filter-button"
                  }
                  onClick={() => setSelectedUniverse(universe)}
                >
                  {universe === "tout" ? "Tous les univers" : universe}
                </button>
              ))}
            </div>
          </div>

          <div className="catalogue-sort">
            <label htmlFor="shop-sort">Trier par</label>

            <select
              id="shop-sort"
              value={sortPrice}
              onChange={(event) => setSortPrice(event.target.value)}
            >
              <option value="pertinence">Pertinence</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="popularity">Popularité</option>
            </select>
          </div>
        </div>

        <div className="category-filter">
          <span className="filter-label">Catégorie</span>

          <div className="category-buttons">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={
                  selectedCategory === category
                    ? "category-button active"
                    : "category-button"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category === "tout" ? "Toutes" : category}
              </button>
            ))}
          </div>
        </div>

        {(selectedUniverse !== "tout" ||
          selectedCategory !== "tout" ||
          sortPrice !== "pertinence") && (
          <button
            type="button"
            className="reset-filters"
            onClick={resetFilters}
          >
            Réinitialiser les filtres
          </button>
        )}

        {filteredArticles.length > 0 ? (
          <div className="articles-grid">
            {filteredArticles.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="empty-catalogue">
            <span>◌</span>
            <h3>Aucun article trouvé</h3>
            <p>
              Essayez une autre combinaison de filtres pour découvrir notre
              sélection.
            </p>

            <button
              type="button"
              className="shop-primary-button"
              onClick={resetFilters}
            >
              Afficher tous les articles
            </button>
          </div>
        )}
      </section>

      <section className="shop-bottom-cta">
        <div>
          <span className="section-label">Une question sur un article ?</span>

          <h2>
            Passez nous voir
            <span> au bar.</span>
          </h2>

          <p>
            Notre équipe est là pour vous présenter les produits disponibles et
            vous aider à trouver la pièce parfaite pour votre univers.
          </p>
        </div>

        <a href="/contact" className="shop-primary-button">
          Découvrir 6 Ber-Corp
        </a>
      </section>
    </section>
  );
}
