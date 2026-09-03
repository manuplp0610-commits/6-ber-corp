import articles from "../../data/articles.json";
import Article from "../../components/article/Article";

import "./shop.css";

export default function Shop() {
  return (
    <section className="shop">
      <div className="wrap">
        <div className="shop-head">
          <h1>La Boutique</h1>
          <p>
            Cartes à collectionner, figurines et accessoires pour tous les
            passionnés de pop culture.
          </p>
        </div>

        <div className="article-grid">
          {articles.map((article) => (
            <Article key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
