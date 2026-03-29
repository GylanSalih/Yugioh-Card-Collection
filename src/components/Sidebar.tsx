import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import {
  BiMenu,
  BiX,
  BiHome,
  BiCollection,
  BiDollarCircle,
  BiBookmark,
  BiCog,
} from 'react-icons/bi';

interface SidebarProps {
  onNavigate?: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { id: 'home', label: 'Home', icon: BiHome },
    { id: 'collection', label: 'Kollektion', icon: BiCollection },
    { id: 'decks', label: 'Decks', icon: BiBookmark },
    { id: 'wishlist', label: 'Wunschliste', icon: BiDollarCircle },
    { id: 'settings', label: 'Einstellungen', icon: BiCog },
  ];

  const handleNavigation = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Yu-Gi-Oh</h1>
        <button
          className={styles.toggleBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle sidebar"
        >
          {isOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              className={styles.navItem}
              onClick={() => handleNavigation(item.id)}
              title={item.label}
            >
              <IconComponent className={styles.icon} />
              {isOpen && <span className={styles.label}>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      <div className={styles.footer}>
        {isOpen && <p className={styles.version}>v1.0.0</p>}
      </div>
    </div>
  );
};

export default Sidebar;
