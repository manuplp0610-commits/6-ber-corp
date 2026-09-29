export default function BarItem(items) {
  return (
    <div className="bar-menu-list">
      {items.map((item) => (
        <article className="bar-menu-item" key={item.id}>
          <div className="bar-menu-item-icon">
            {item.category === "drink" ? (
              <i className="fa-solid fa-glass-water"></i>
            ) : (
              <i className="fa-solid fa-candy-cane"></i>
            )}
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
}
