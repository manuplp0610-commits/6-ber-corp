import "./bar.css";
import dataBar from "../../data/bar.json";

export default function Bar() {
  const drink = dataBar.filter((article) => article.category === "drink");
  const food = dataBar.filter((article) => article.category === "food");

  return (
    <main className="bar-page">
      <section className="bar-header">
        <h1 className="bar-title">Le Bar</h1>
        <p>
          Faites une pause entre deux parties et profitez de nos boissons et
          snacks disponibles au bar.
        </p>
      </section>

      <section className="bar-section">
        <h2>Boissons</h2>

        <div className="bar-grid">
          {drink.map((article) => {
            return (
              <article key={article.id} className="bar-card">
                <div>
                  <h3>{article.name}</h3>
                  <p>{article.description}</p>
                </div>
                <span>{article.price} €</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bar-section">
        <h2>Snacks</h2>

        <div className="bar-grid">
          {food.map((article) => {
            return (
              <article key={article.id} className="bar-card">
                <div>
                  <h3>{article.name}</h3>
                  <p>{article.description}</p>
                </div>
                <span>{article.price} €</span>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
