```markdown
# Yu-Gi-Oh! Card Collection Manager 🎴

A modern, responsive web app for managing Yu-Gi-Oh! card collections, building decks, and tracking wishlists.

## Features ✨

- **Collection Manager** — Track your cards with detailed info and sorting
- **Deck Builder** — Create and save custom decks up to 60 cards
- **Wishlist** — Monitor cards you want with price tracking
- **Card Search** — Search the full YGO database with advanced filters
- **YGOProDeck API** — Access to 10,000+ cards

## Tech Stack 🛠️

- **Frontend**: React 18.2 + TypeScript
- **Styling**: SCSS Modules
- **API**: YGOProDeck REST API
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Build Tool**: Create React App

## Installation 📦

**Requirements:** Node.js 16+, npm or yarn

```bash
git clone https://github.com/GylanSalih/Yugioh-Card-Collection
cd Yugioh-Card-Collection
npm install
npm start
```

Runs at `http://localhost:3000`

## Scripts

```bash
npm start        # Dev server
npm run build    # Production build
npm test         # Run tests
```

## Project Structure 📁

```
src/
├── components/
│   ├── Sidebar.tsx
│   └── Sidebar.module.scss
├── pages/
│   ├── Home.tsx
│   └── Home.module.scss
├── services/
│   └── ygoProDeckService.ts
├── styles/
├── App.tsx
├── App.module.scss
└── index.tsx
```

## API 🔌

Base URL: `https://db.ygoprodeck.com/api/v7`

Endpoints: `cardinfo.php` · `archetypes.php` · `cardtypes.php` · `races.php` · `attributes.php`

## Roadmap 🚀

- [ ] Collection persistence (LocalStorage / Backend)
- [ ] Advanced deck building
- [ ] Card image caching
- [ ] User accounts & cloud sync
- [ ] Price comparison integrations
- [ ] Mobile optimization
- [ ] Dark / Light theme toggle

## License 📄

MIT — see LICENSE for details.
```
