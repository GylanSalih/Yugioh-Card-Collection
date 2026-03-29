import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import {
  Menu,
  X,
  Home,
  Package,
  BookmarkPlus,
  Heart,
  Settings,
} from 'lucide-react';

interface SidebarProps {
  onNavigate?: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'collection', label: 'Kollektion', icon: Package },
    { id: 'decks', label: 'Decks', icon: BookmarkPlus },
    { id: 'wishlist', label: 'Wunschliste', icon: Heart },
    { id: 'settings', label: 'Einstellungen', icon: Settings },
  ];

  const handleNavigation = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>YGO</h1>
        <button
          className={styles.toggleBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle sidebar"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
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
              <IconComponent className={styles.icon} size={20} />
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
