import React, { useMemo, useState, useEffect } from 'react';
import './App.css';
import './styles/common.css';
import './styles/home-screen-1-49.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import FoodGrid from './components/FoodGrid';
import BottomNav from './components/BottomNav';
import FoodDetailModal from './components/FoodDetailModal';
import FavoritesSidebar from './components/FavoritesSidebar';

// PUBLIC_INTERFACE
function App() {
  // Theme preserved from template to keep toggle option if needed later
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  // Static data mapped from original HTML into state so it's ready for dynamic updates
  const items = useMemo(() => ([
    {
      id: '1',
      title: 'Cheeseburger Wendy\'s Burger',
      rating: '4.9',
      imageSrc: '/assets/figmaimages/figma_image_1_83.png'
    },
    {
      id: '2',
      title: 'Hamburger <br>Veggie Burger',
      rating: '4.8',
      imageSrc: '/assets/figmaimages/figma_image_1_92.png'
    },
    {
      id: '3',
      title: 'Hamburger <br>Chicken Burger',
      rating: '4.6',
      imageSrc: '/assets/figmaimages/figma_image_1_101.png'
    },
    {
      id: '4',
      title: 'Hamburger <br>Fried Chicken Burger',
      rating: '4.5',
      imageSrc: '/assets/figmaimages/figma_image_1_110.png'
    }
  ]), []);

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // PUBLIC_INTERFACE
  const handleSelectItem = (item) => setSelectedItem(item);
  // PUBLIC_INTERFACE
  const handleCloseModal = () => setSelectedItem(null);
  // PUBLIC_INTERFACE
  const handleToggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.find((f) => f.id === item.id);
      if (exists) return prev.filter((f) => f.id !== item.id);
      return [...prev, item];
    });
  };

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', padding: 16 }}>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>

      <main id="frame-1-49" className="frame-root abs" role="main" aria-label="Food Explorer Home">
        <Header
          title="Foodgo"
          subtitle="Order your favourite food!"
          avatarSrc="/assets/figmaimages/figma_image_1_54.png"
        />

        <SearchBar
          placeholder="Search"
          onFilterClick={() => {}}
          onClick={() => {}}
        />

        <Categories
          active={activeCategory}
          onSelect={setActiveCategory}
        />

        <FoodGrid
          items={items}
          onSelect={handleSelectItem}
        />

        <BottomNav />
      </main>

      <FavoritesSidebar favorites={favorites} />

      <FoodDetailModal
        open={!!selectedItem}
        item={selectedItem}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
