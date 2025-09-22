# Food Frontend React Structure

This converts assets/home-screen-1-49.html into a modular React app.

- src/styles/common.css: Global variables and resets (copied from assets/common.css)
- src/styles/home-screen-1-49.css: Screen-specific absolute layout rules (copied from assets/home-screen-1-49.css)
- src/components/Header.js: Title, subtitle, avatar
- src/components/SearchBar.js: Search placeholder and filter button block
- src/components/Categories.js: Four category chips row
- src/components/FoodCard.js: Reusable card
- src/components/FoodGrid.js: Composes four cards with pixel-precise classes
- src/components/BottomNav.js: Decorative bottom shapes and icon placeholders
- src/components/FavoritesSidebar.js: Simple favorites list placeholder
- src/components/FoodDetailModal.js: Modal scaffold for item details

Images are referenced from /assets/figmaimages/... which should be placed in the CRA public folder (food_frontend/public/assets/figmaimages). In React (CRA), absolute src="/assets/..." resolves to this public folder at runtime.
