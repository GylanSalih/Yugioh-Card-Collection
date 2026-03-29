# Yu-Gi-Oh! Card Collection Manager 🎴

Eine moderne, responsive Web-Anwendung zur Verwaltung von Yu-Gi-Oh! Kartensammlungen, zum Erstellen von Decks und zur Verwaltung von Wunschlisten.

Keep track of all your cards, sort them, and plan your collection with clarity and control.

## Features ✨

- **Kartensammlung verwalten** - Verwaltung der eigenen Kartensammlung mit detaillierten Informationen
- **Deck Builder** - Erstelle und speichere benutzerdefinierte Decks mit bis zu 60 Karten
- **Wunschliste** - Verfolge Karten, die du sammeln möchtest mit Preisüberwachung
- **Karten Suchfunktion** - Durchsuche die gesamte YGO-Datenbank mit erweiterten Filtern
- **YGOProDeck API Integration** - Zugriff auf über 10,000+ Karten

## Tech Stack 🛠️

- **Frontend**: React 18.2 mit TypeScript
- **Styling**: SCSS Modules für scoped CSS
- **API**: YGOProDeck REST API (https://ygoprodeck.com/)
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Build Tool**: Create React App

## Installation 📦

### Voraussetzungen
- Node.js 16+ 
- npm oder yarn

### Setup

```bash
# Repository klonen
git clone https://github.com/GylanSalih/Yugioh-Card-Collection
cd Yugioh-Card-Collection

# Dependencies installieren
npm install

# Dev Server starten
npm start
```

Die Anwendung wird unter `http://localhost:3000` geöffnet.

## Verfügbare Scripts

```bash
# Entwicklungsserver starten
npm start

# App für Production builden
npm run build

# Tests ausführen
npm test
```

## Projektstruktur 📁

```
src/
├── components/              # Wiederverwendbare Komponenten
│   ├── Sidebar.tsx          # Navigation Sidebar (vertikal, kollabierbar)
│   └── Sidebar.module.scss  # Sidebar Styles
├── pages/                   # Seiten/Views
│   ├── Home.tsx             # Homepage mit Features
│   └── Home.module.scss     # Home Styles
├── services/                # API Services
│   └── ygoProDeckService.ts # YGOProDeck API Integration
├── styles/                  # Globale Styles
├── App.tsx                  # Haupt-Komponente
├── App.module.scss          # App Layout Styles
└── index.tsx                # Entry Point
```

## API Integration 🔌

Die App nutzt die kostenlose YGOProDeck API:
- **Base URL**: `https://db.ygoprodeck.com/api/v7`
- **Verfügbare Endpoints**: 
  - `cardinfo.php` - Karten suchen und Informationen abrufen
  - `archetypes.php` - Alle Archetypen
  - `cardtypes.php` - Alle Kartentypen
  - `races.php` - Alle Rassen
  - `attributes.php` - Alle Attribute

## Geplante Features (Roadmap) 🚀

- [ ] Kollektion mit Datenspeicherung (LocalStorage/Backend)
- [ ] Erweiterte Deckbuilding Features
- [ ] Karten-Bilder cachen
- [ ] User Accounts & Cloud Sync
- [ ] Preisvergleich Integrationen
- [ ] Mobile App Optimierung
- [ ] Dark/Light Theme Toggle

## Design & UI 🎨

Die Anwendung verwendet ein modernes Dark-Theme Design mit:
- Vertikalem Navigation Menu (kollabierbar)
- Cyan/Blue Farbschema (#00d4ff)
- Responsive SCSS Styling
- Smooth Transitions & Animations
- Mobil-freundliches Layout

## Contributing 🤝

Beiträge sind willkommen! Bitte erstelle einen Pull Request mit deinen Änderungen.

## Lizenz 📄

MIT License - siehe LICENSE Datei für Details

---

**Gebaut mit ❤️ von der Community**
