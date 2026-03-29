import React from 'react';
import styles from './Decks.module.scss';
import { BookmarkPlus } from 'lucide-react';

interface DecksProps {
  onNavigate?: (page: string) => void;
}

const Decks: React.FC<DecksProps> = () => {
  return (
    <div className={styles.decks}>
      <div className={styles.header}>
        <div>
          <h1>Meine Decks</h1>
          <p>Erstelle und verwalte deine Yu-Gi-Oh! Decks</p>
        </div>
        <button className={styles.createBtn} disabled>
          <BookmarkPlus size={20} />
          Neues Deck
        </button>
      </div>

      <div className={styles.emptyState}>
        <div className={styles.icon}>
          <BookmarkPlus size={48} />
        </div>
        <h2>Noch keine Decks vorhanden</h2>
        <p>Erstelle dein erstes Deck um zu beginnen</p>
      </div>
    </div>
  );
};

export default Decks;
