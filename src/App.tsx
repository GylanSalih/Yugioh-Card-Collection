import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Collection from './pages/Collection';
import styles from './App.module.scss';

type PageType = 'home' | 'collection' | 'decks' | 'wishlist' | 'settings';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page as PageType);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigation} />;
      case 'collection':
        return <Collection onNavigate={handleNavigation} />;
      case 'decks':
        return <div className={styles.placeholder}>Decks - In Entwicklung</div>;
      case 'wishlist':
        return <div className={styles.placeholder}>Wunschliste - In Entwicklung</div>;
      case 'settings':
        return <div className={styles.placeholder}>Einstellungen - In Entwicklung</div>;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className={styles.app}>
      <Sidebar onNavigate={handleNavigation} />
      <main className={styles.mainContent}>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
