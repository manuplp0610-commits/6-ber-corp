import "./dashBar.css";
import { useEffect, useState } from "react";

export default function DashBar() {
  const [dataBar, setDataBar] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/bar.json`)
      .then((response) => response.json())
      .then((result) => {
        setDataBar(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="dashBar">
      <div className="dashBar-header">
        <div>
          <span className="dashBar-kicker">Gestion du bar</span>
          <h2>Articles</h2>
          <button className="addArticlesBtn">+ Ajouter article</button>
        </div>

        <span className="dashBar-count">{dataBar.length} articles</span>
      </div>

      <div className="dashBar-table">
        <div className="dashBar-row dashBar-row-header">
          <span>Nom</span>
          <span>Catégorie</span>
          <span>Description</span>
          <span>Prix</span>
          <span>Action</span>
        </div>

        {dataBar.map((item) => (
          <div className="dashBar-row" key={item.id}>
            <span className="dashBar-name">{item.name}</span>

            <span>{item.category === "drink" ? "Boisson" : "Nourriture"}</span>

            <span className="dashBar-description">{item.description}</span>

            <span className="dashBar-price">{item.price} €</span>

            <span className="dashBar-deleteBtn">X</span>
          </div>
        ))}
      </div>
    </section>
  );
}
