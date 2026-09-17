import "./dashbord.css";

export default function Dashboard() {
  return (
    <main className="dashboard-page">
      {/* ================================
          EN-TÊTE
      ================================= */}

      <header className="dashboard-header">
        <div>
          <span className="dashboard-eyebrow">Espace administrateur</span>

          <h1>Dashboard</h1>

          <p>
            Gérez le contenu de votre établissement et consultez les
            informations importantes de votre activité.
          </p>
        </div>

        <div className="dashboard-user">
          <span className="dashboard-user-icon">👤</span>

          <div>
            <strong>Administrateur</strong>
            <span>6 Ber-Corp</span>
          </div>
        </div>
      </header>

      {/* ================================
          STATISTIQUES
      ================================= */}

      <section className="dashboard-stats">
        <article className="dashboard-stat-card">
          <span className="dashboard-stat-icon">🛍️</span>

          <div>
            <span className="dashboard-stat-label">Articles en boutique</span>

            <strong>24</strong>

            <p>Articles disponibles</p>
          </div>
        </article>

        <article className="dashboard-stat-card">
          <span className="dashboard-stat-icon">🎮</span>

          <div>
            <span className="dashboard-stat-label">Consoles et PC</span>

            <strong>12</strong>

            <p>Postes disponibles</p>
          </div>
        </article>

        <article className="dashboard-stat-card">
          <span className="dashboard-stat-icon">📅</span>

          <div>
            <span className="dashboard-stat-label">Événements à venir</span>

            <strong>3</strong>

            <p>Événements programmés</p>
          </div>
        </article>

        <article className="dashboard-stat-card">
          <span className="dashboard-stat-icon">📊</span>

          <div>
            <span className="dashboard-stat-label">Compte rendu</span>

            <strong>1</strong>

            <p>Rapport disponible</p>
          </div>
        </article>
      </section>

      {/* ================================
          GESTION DU SITE
      ================================= */}

      <section className="dashboard-section">
        <div className="dashboard-section-header">
          <div>
            <span className="dashboard-eyebrow">Administration</span>

            <h2>Gestion du site</h2>
          </div>

          <p>Modifiez les différentes informations affichées sur le site.</p>
        </div>

        <div className="dashboard-grid">
          <article className="dashboard-card">
            <div className="dashboard-card-icon">🛍️</div>

            <div className="dashboard-card-content">
              <h3>Articles</h3>

              <p>Ajouter, modifier ou supprimer les articles de la boutique.</p>

              <button type="button" className="dashboard-card-link">
                Gérer les articles
                <span>→</span>
              </button>
            </div>
          </article>

          <article className="dashboard-card">
            <div className="dashboard-card-icon">📅</div>

            <div className="dashboard-card-content">
              <h3>Événements</h3>

              <p>Créer et modifier les événements à venir sur le site.</p>

              <button type="button" className="dashboard-card-link">
                Gérer les événements
                <span>→</span>
              </button>
            </div>
          </article>

          <article className="dashboard-card">
            <div className="dashboard-card-icon">🍹</div>

            <div className="dashboard-card-content">
              <h3>Bar</h3>

              <p>Modifier les boissons, les snacks et leurs tarifs.</p>

              <button type="button" className="dashboard-card-link">
                Gérer le bar
                <span>→</span>
              </button>
            </div>
          </article>

          <article className="dashboard-card">
            <div className="dashboard-card-icon">🎮</div>

            <div className="dashboard-card-content">
              <h3>Consoles et PC</h3>

              <p>Modifier les plateformes, les jeux et les tarifs.</p>

              <button type="button" className="dashboard-card-link">
                Gérer le matériel
                <span>→</span>
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* ================================
          INFORMATIONS RAPIDES
      ================================= */}

      <section className="dashboard-section">
        <div className="dashboard-section-header">
          <div>
            <span className="dashboard-eyebrow">Informations</span>

            <h2>À vérifier</h2>
          </div>
        </div>

        <div className="dashboard-check-list">
          <div className="dashboard-check-item">
            <span>✓</span>
            <p>Vérifier les horaires d’ouverture.</p>
          </div>

          <div className="dashboard-check-item">
            <span>✓</span>
            <p>Mettre à jour les tarifs des consoles et des PC.</p>
          </div>

          <div className="dashboard-check-item">
            <span>✓</span>
            <p>Ajouter les prochains événements.</p>
          </div>

          <div className="dashboard-check-item">
            <span>✓</span>
            <p>Vérifier les articles actuellement disponibles.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
