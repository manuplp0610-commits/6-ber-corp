import "./bar.css";

import HeaderPages from "../../components/headerPages/HeaderPages";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Bar() {
  const [apiState, setApiState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    setApiState({ ...apiState, loading: true });
    fetch("https://api-hf41.onrender.com/api/bar")
      .then((res) => res.json())
      .then((data) => {
        setApiState({ ...apiState, loading: false, data: data });
      })
      .catch((error) => {
        setApiState({ ...apiState, error: true });
        console.error(error);
      });
  }, []);

  let content = "";
  if (apiState.loading) content = <p>Chargement</p>;
  else if (apiState.error) content = <p>Une erreur est survenue</p>;
  else if (apiState.data?.length === 0) content = <p>Aucun article trouvé</p>;
  return (
    <section className="bar-page">
      <HeaderPages
        title="Le Bar"
        subTitle="Faites une pause entre deux parties et profitez de nos boissons et snacks dans une ambiance geek et conviviale."
      />

      {/* =========================
          INTRODUCTION
      ========================= */}

      <motion.section
        className="bar-introduction"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div className="bar-introduction-icon">🍻</div>

        <div>
          <span className="bar-kicker">Pause entre deux parties</span>

          <h2>Rechargez vos batteries</h2>

          <p>
            Que vous soyez en pleine session compétitive ou simplement venu
            discuter autour d’un verre, notre carte vous accompagne tout au long
            de votre expérience chez 6 Ber-Corp.
          </p>
        </div>
      </motion.section>

      <section className="bar-menu-section">
        {/* =========================
            À BOIRE
        ========================= */}

        <div className="bar-category-header">
          <span className="bar-kicker">À boire</span>

          <h2>Petite soif ?</h2>
        </div>

        <div className="bar-subcategory">
          <h3>Sans alcool</h3>

          <div className="bar-items">
            {apiState.data?.drink
              .filter((item) => item.alcool === false)
              .map((item) => (
                <div className="bar-item" key={item.id}>
                  <div className="bar-item-info">
                    <h4>{item.name}</h4>

                    <p>{item.description}</p>
                  </div>

                  <span className="bar-item-line"></span>

                  <strong className="bar-item-price">{item.price} €</strong>
                </div>
              ))}
          </div>
        </div>

        <div className="bar-subcategory">
          <h3>Avec alcool</h3>

          <div className="bar-items">
            {apiState.data?.drink
              .filter((item) => item.alcool === true)
              .map((item) => (
                <div className="bar-item" key={item.id}>
                  <div className="bar-item-info">
                    <h4>{item.name}</h4>

                    <p>{item.description}</p>
                  </div>

                  <span className="bar-item-line"></span>

                  <strong className="bar-item-price">{item.price} €</strong>
                </div>
              ))}
          </div>
        </div>

        {/* =========================
            À MANGER
        ========================= */}

        <motion.div
          className="bar-menu-category"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
        >
          <div className="bar-category-header">
            <span className="bar-kicker">À manger</span>

            <h2>Petite faim ?</h2>
          </div>

          <div className="bar-subcategory">
            <h3>Barres et snacks</h3>

            <div className="bar-items">
              {apiState.data?.food
                .filter((item) => item.category === "snack")
                .map((item) => (
                  <div className="bar-item" key={item.id}>
                    <div className="bar-item-info">
                      <h4>{item.name}</h4>

                      <p>{item.description}</p>
                    </div>

                    <span className="bar-item-line"></span>

                    <strong className="bar-item-price">{item.price} €</strong>
                  </div>
                ))}
            </div>
          </div>

          <div className="bar-subcategory">
            <h3>Hot</h3>

            <div className="bar-items">
              {apiState.data?.food
                .filter((item) => item.category === "food")
                .map((item) => (
                  <div className="bar-item" key={item.id}>
                    <div className="bar-item-info">
                      <h4>{item.name}</h4>

                      <p>{item.description}</p>
                    </div>

                    <span className="bar-item-line"></span>

                    <strong className="bar-item-price">{item.price} €</strong>
                  </div>
                ))}
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  );
}
