import React from 'react';
import styles from './Wishlist.module.scss';
import { Heart } from 'lucide-react';

interface WishlistProps {
  onNavigate?: (page: string) => void;
}

const Wishlist: React.FC<WishlistProps> = () => {
  return (
    <div className={styles.wishlist}>
      <div className={styles.header}>
        <div>
          <h1>Wunschliste</h1>
          <p>Verfolge die Karten die du sammeln möchtest</p>
        </div>
      </div>

      <div className={styles.emptyState}>
        <div className={styles.icon}>
          <Heart size={48} />
        </div>
        <h2>Wunschliste ist leer</h2>
        <p>Füge Karten zu deiner Wunschliste hinzu um diese hier zu sehen</p>
      </div>
    </div>
  );
};

export default Wishlist;
