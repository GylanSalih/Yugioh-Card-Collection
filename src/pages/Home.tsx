import React from 'react';
import styles from './Home.module.scss';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const handleStartCollection = () => {
    if (onNavigate) {
      onNavigate('collection');
    }
  };

  const handleCreateDeck = () => {
    if (onNavigate) {
      onNavigate('decks');
    }
  };

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Yu-Gi-Oh! Card Collection Manager
          </h1>
          <p className={styles.subtitle}>
            Verwalte deine Kartensammlung, erstelle Decks und verfolge deine Wunschliste
          </p>
          <div className={styles.cta}>
            <button className={styles.primaryBtn} onClick={handleStartCollection}>
              Kollektion Starten
            </button>
            <button className={styles.secondaryBtn} onClick={handleCreateDeck}>
              Deck Erstellen
            </button>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📦</div>
            <h3>Kollektion Verwaltung</h3>
            <p>Verwalte deine gesamte Kartensammlung mit detaillierten Informationen</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎴</div>
            <h3>Deck Builder</h3>
            <p>Erstelle und speichere benutzerdefinierte Decks mit bis zu 60 Karten</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>❤️</div>
            <h3>Wunschliste</h3>
            <p>Verfolge die Karten, die du sammeln möchtest mit Preisüberwachung</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔍</div>
            <h3>Karten Suche</h3>
            <p>Durchsuche die gesamte YGO-Datenbank mit erweiterten Filtern</p>
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statValue}>10,000+</div>
          <div className={styles.statLabel}>Karten verfügbar</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>∞</div>
          <div className={styles.statLabel}>Decks erstellen</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>Kostenlos</div>
          <div className={styles.statLabel}>Für alle</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
