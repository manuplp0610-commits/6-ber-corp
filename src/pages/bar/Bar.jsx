import "./bar.css";
import HeaderPages from "../../components/headerPages/HeaderPages";
import { useEffect, useState } from "react";

export default function Bar() {
  const [dataBar, setDataBar] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/bar.json`)
      .then((reponse) => {
        return reponse.json();
      })
      .then((result) => {
        setDataBar(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const drinks = dataBar.filter((item) => item.category === "drink");
  const food = dataBar.filter((item) => item.category === "food");

  const renderItems = (items) => {
    return (
      <div className="bar-menu-list">
        {items.map((item) => (
          <article className="bar-menu-item" key={item.id}>
            <div className="bar-menu-item-icon">
              {item.category === "drink" ? "🍹" : "🍿"}
            </div>

            <div className="bar-menu-item-content">
              <div className="bar-menu-item-heading">
                <h3>{item.name}</h3>
                <span className="bar-menu-line"></span>
                <strong>{item.price} €</strong>
              </div>

              <p>{item.description}</p>

              <span className="bar-availability">Disponible au comptoir</span>
            </div>
          </article>
        ))}
      </div>
    );
  };

  return (
    <section className="bar-page">
      <HeaderPages
        title="Le Bar"
        subTitle="Faites une pause entre deux parties et profitez de nos boissons et snacks dans une ambiance geek et conviviale."
      />

      <section className="bar-introduction">
        <div className="bar-introduction-icon">🎮</div>

        <div>
          <span className="bar-kicker">Pause entre deux parties</span>
          <h2>Rechargez vos batteries</h2>
          <p>
            Que vous soyez en pleine session compétitive ou simplement venu
            discuter autour d’un verre, notre carte vous accompagne tout au long
            de votre expérience chez 6 Ber-Corp.
          </p>
        </div>
      </section>

      <section className="bar-menu-section">
        <div className="bar-section-heading">
          <div>
            <span className="bar-kicker">À boire</span>
            <h2>Boissons</h2>
          </div>

          <span className="bar-section-count">{drinks.length} références</span>
        </div>

        {drinks.length > 0 ? (
          renderItems(drinks)
        ) : (
          <p className="bar-empty-message">
            La carte des boissons sera bientôt disponible.
          </p>
        )}
      </section>

      <section className="bar-menu-section">
        <div className="bar-section-heading">
          <div>
            <span className="bar-kicker">À grignoter</span>
            <h2>Snacks</h2>
          </div>

          <span className="bar-section-count">{food.length} références</span>
        </div>

        {food.length > 0 ? (
          renderItems(food)
        ) : (
          <p className="bar-empty-message">
            La carte des snacks sera bientôt disponible.
          </p>
        )}
      </section>

      <section className="bar-bottom-info">
        <div className="bar-bottom-info-icon">📍</div>

        <div>
          <h2>Disponible uniquement sur place</h2>
          <p>
            Les boissons et snacks sont à commander directement au comptoir
            pendant votre visite chez 6 Ber-Corp.
          </p>
        </div>
      </section>
    </section>
  );
}
