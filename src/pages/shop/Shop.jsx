import { useEffect, useMemo, useState } from "react";
import "./shop.css";
import HeaderPages from "../../components/headerPages/HeaderPages";
import Article from "../../components/article/Article";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import InfoFlashBanner from "../../components/infoFlashBanner/InfoFlashBanner";

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
  });

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
        <motion.div
          className="shop-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.span
            className="shop-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Collection 6 Ber-Corp
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Les trésors du
            <span> comptoir</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Retrouvez une sélection d’objets, accessoires et produits inspirés
            de vos univers préférés. Chaque article est disponible directement
            au magasin.
          </motion.p>

          <motion.div
            className="shop-hero-actions"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#catalogue" className="shop-primary-button">
              Explorer la sélection
            </a>
          </motion.div>
        </motion.div>
        <div className="shop-hero-decoration" aria-hidden="true">
          <span>✦</span>
          <span>◈</span>
          <span>✧</span>
        </div>
      </section>

      <motion.section
        className="shop-intro"
        id="infos"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="shop-intro-icon">🛍️</div>

        <div>
          <strong>Aucun achat en ligne</strong>
          <p>
            Les articles présentés ici sont disponibles à l’achat directement
            chez 6 Ber-Corp. Venez les découvrir sur place et demandez conseil à
            notre équipe.
          </p>
        </div>
        <Link to="/contact" className="shop-intro-link">
          Nous trouver
          <span>→</span>
        </Link>
      </motion.section>

      <section className="shop-catalogue" id="catalogue">
        <motion.div
          className="catalogue-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        <motion.div
          className="shop-controls"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
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
        </motion.div>

        <motion.div
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
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
        </motion.div>

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
        <InfoFlashBanner
          variant={"shop"}
          title={"Ouverture prochaine"}
          info={"Retrouvez bientôt tous nos articles directement en magasin."}
          link={
            "Inscrivez-vous à notre newsletter pour ne pas manquer notre ouverture."
          }
        />
        {filteredArticles.length > 0 ? (
          <AnimatePresence mode="popLayout">
            <div className="articles-grid">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                >
                  <Article article={article} />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
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
            <span> en boutique.</span>
          </h2>

          <p>
            Notre équipe est là pour vous présenter les produits disponibles et
            vous aider à trouver la pièce parfaite pour votre univers.
          </p>
        </div>

        <Link to="/contact" className="shop-primary-button">
          Découvrir 6 Ber-Corp
        </Link>
      </section>
    </section>
  );
}
