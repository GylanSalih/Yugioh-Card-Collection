import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Decks from './pages/Decks';
import Wishlist from './pages/Wishlist';
import Settings from './pages/Settings';
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
        return <Decks onNavigate={handleNavigation} />;
      case 'wishlist':
        return <Wishlist onNavigate={handleNavigation} />;
      case 'settings':
        return <Settings onNavigate={handleNavigation} />;
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
