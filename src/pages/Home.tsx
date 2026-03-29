import React from 'react';
import styles from './Home.module.scss';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>Coming Soon</div>
          
          <h1 className={styles.title}>Yu-Gi-Oh Collection Manager</h1>
          
          <p className={styles.description}>
            Wir arbeiten daran, eine vollständige Lösung zur Verwaltung deiner Yu-Gi-Oh! Kartensammlung zu schaffen. 
            Bald kannst du deine Decks organisieren, Wunschlisten verwalten und deine Sammlung im Detail erforschen.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureNumber}>01</div>
              <h3>Kollektion Verwaltung</h3>
              <p>Organisiere und verwalte alle deine Yu-Gi-Oh! Karten</p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureNumber}>02</div>
              <h3>Deck Builder</h3>
              <p>Erstelle und optimiere deine Decks</p>
            </div>

            <div className={styles.feature}>
              <div className={styles.featureNumber}>03</div>
              <h3>Wunschliste</h3>
              <p>Verfolge die Karten die du noch sammeln möchtest</p>
            </div>
          </div>

          <div className={styles.newsletter}>
            <p>Benachrichtigungen erhalten wenn wir bereit sind:</p>
            <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
              <input 
                type="email" 
                placeholder="deine@email.com" 
                disabled
              />
              <button type="submit" disabled>
                Abonnieren
              </button>
            </form>
            <p className={styles.soon}>Bald verfügbar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
