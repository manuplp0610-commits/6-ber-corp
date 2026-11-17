import "./shop.css";
import { motion, AnimatePresence } from "motion/react";
import HeaderPages from "../../components/headerPages/HeaderPages";
import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import Article from "../../components/article/Article";
import Fetchdata from "../../components/fetch/Fetchdata";

export default function Shopshpp() {
  // Appel fetch

  const [apiState, setApiState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  const [selectedUniverse, setSelectedUniverse] = useState("tout");
  const [selectedCategory, setSelectedCategory] = useState("tout");
  const [sortPrice, setSortPrice] = useState("pertinence");

  useEffect(() => {
    setApiState((prev) => ({ ...prev, loading: true }));

    fetch("https://api-hf41.onrender.com/api/article")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur API");
        return res.json();
      })
      .then((data) => {
        setApiState({ loading: false, error: false, data });
      })
      .catch(() => {
        setApiState({ loading: false, error: true, data: undefined });
      });
  }, []);

  // Univers

  const universes = useMemo(() => {
    return [
      "tout",
      ...new Set((apiState.data ?? []).map((article) => article.brand)),
    ];
  }, [apiState.data]);

  // Catégories

  const categories = useMemo(() => {
    return [
      "tout",
      ...new Set((apiState.data ?? []).map((article) => article.category)),
    ];
  }, [apiState.data]);

  // Filtrage et tri des articles

  const filteredArticles = useMemo(() => {
    let result = [...(apiState.data ?? [])];

    if (selectedUniverse !== "tout") {
      result = result.filter((article) => article.brand === selectedUniverse);
    }

    if (selectedCategory !== "tout") {
      result = result.filter(
        (article) => article.category === selectedCategory,
      );
    }

    if (sortPrice === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortPrice === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [apiState.data, selectedUniverse, selectedCategory, sortPrice]);

  // Affichage des articles

  let content = "";

  if (apiState.loading) content = "Chargement...";
  else if (apiState.error) content = "Une erreur est survenue";
  else if (filteredArticles.length > 0) {
    content = (
      <ul>
        {filteredArticles.map((item) => (
          <Article key={item.id} article={item} />
        ))}
      </ul>
    );
  } else if (apiState.data?.length >= 0) {
    content = "Aucun article disponible";
  }

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

          <p>{filteredArticles.length} articles disponibles</p>
        </motion.div>
      </section>

      {/* Filtres */}

      <div className="shop-controls">
        <div className="filter-group">
          <label className="filter-label" htmlFor="shop-universe">
            Univers
          </label>

          <select
            id="shop-universe"
            value={selectedUniverse}
            onChange={(e) => setSelectedUniverse(e.target.value)}
          >
            {universes.map((item) => (
              <option key={item} value={item}>
                {item === "tout" ? "Tous les univers" : item}
              </option>
            ))}
          </select>
        </div>

        <div className="catalogue-sort">
          <label htmlFor="shop-sort">Trier par</label>

          <select
            id="shop-sort"
            value={sortPrice}
            onChange={(e) => setSortPrice(e.target.value)}
          >
            <option value="pertinence">Pertinence</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="popularity">Popularité</option>
          </select>
        </div>
      </div>

      {/* Catégories */}

      <div className="category-filter">
        <span className="filter-label">Catégorie</span>

        <div className="category-buttons">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`category-button ${
                selectedCategory === item ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(item)}
            >
              {item === "tout" ? "Toutes" : item}
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}

      <div className="articles-content">{content}</div>
    </section>
  );
}
