import React, { useState, useEffect } from 'react';
import styles from './Collection.module.scss';
import YGOProDeckService, { Card } from '../services/ygoProDeckService';

interface CollectionProps {
  onNavigate?: (page: string) => void;
}

const Collection: React.FC<CollectionProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    try {
      const results = await YGOProDeckService.searchCards({
        name: searchTerm,
        num: 12,
      });
      setCards(results);
    } catch (error) {
      console.error('Fehler bei der Suche:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.collection}>
      <section className={styles.header}>
        <h1>Meine Sammlung</h1>
        <p>Verwaltung deiner Yu-Gi-Oh! Kartensammlung</p>
      </section>

      <section className={styles.searchSection}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Karte suchen (z.B. Blue-Eyes)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchBtn}>
            Suchen
          </button>
        </form>
      </section>

      {loading && <div className={styles.loading}>Laden...</div>}

      {cards.length > 0 && (
        <section className={styles.cardsGrid}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              {card.card_images && card.card_images[0] && (
                <img
                  src={card.card_images[0].image_url_small}
                  alt={card.name}
                  className={styles.cardImage}
                />
              )}
              <div className={styles.cardInfo}>
                <h3>{card.name}</h3>
                <p className={styles.type}>{card.type}</p>
                {card.atk !== undefined && (
                  <div className={styles.stats}>
                    ATK: {card.atk} / DEF: {card.def}
                  </div>
                )}
              </div>
              <button className={styles.addBtn}>+ Hinzufügen</button>
            </div>
          ))}
        </section>
      )}

      {!loading && cards.length === 0 && searchTerm && (
        <div className={styles.empty}>Keine Karten gefunden</div>
      )}
    </div>
  );
};

export default Collection;
