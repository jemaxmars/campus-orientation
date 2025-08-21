# Campus Orientation Guide

A modern, interactive web application designed to help new students navigate university life. Built with vanilla JavaScript, modular CSS, and webpack for optimal performance and maintainability.

## 🌐 Live Demo

**🚀 [View Live Application](https://jemaxmars.github.io/campus-orientation/)**

Experience the full campus orientation guide deployed on GitHub Pages with all interactive features including real campus images, search functionality, and FAQ accordion.

## 🎥 Project Demo

Watch our comprehensive screencast demonstration showcasing all application features:

**[📹 Screencast Demo Video](https://youtu.be/Qiq37M9LkaY)**

_A detailed walkthrough of the campus orientation application, demonstrating navigation, search capabilities, FAQ interactions, and responsive design across different devices._

## 🎯 Project Overview

This campus orientation application provides students with essential information about dining halls, campus buildings, and campus life through an intuitive, searchable interface. The project emphasizes clean code architecture, accessibility, and responsive design.

## 🚀 Features

- **Interactive Navigation**: Seamless section switching between dining, buildings, and campus life
- **Real-time Search**: Instant text highlighting within selected content sections
- **FAQ Accordion**: Expandable frequently asked questions with smooth animations
- **Responsive Design**: Mobile-first approach that works across all devices
- **Accessibility**: Screen reader friendly with proper ARIA labels and focus management

## 🛠️ Technology Stack

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Build Tool**: Webpack 5 with development and production configurations
- **CSS Architecture**: BEM methodology with modular component structure
- **Font**: Google Fonts (Inter family)

## 📁 Project Structure

```
src/
├── blocks/           # Modular CSS components (BEM methodology)
│   ├── body.css     # Global styles and helper classes
│   ├── header.css   # University header styling
│   ├── nav.css      # Navigation button styles
│   ├── search-box.css # Search input styling
│   ├── info-card.css # Content card layouts
│   └── faq.css      # FAQ accordion styles
├── js/
│   ├── main.js      # Core application logic
│   ├── data.js      # Content data and configuration
│   └── constants.js # Image data and configuration
├── pages/
│   ├── index.html   # Main HTML template
│   └── index.css    # Page-specific styles and grid layouts
├── vendor/
│   └── normalize.css # CSS reset for cross-browser compatibility
└── assets/
    └── starlightunilogo.png # University logo
```

## 🧠 Core Architecture

### Main Application Logic (`main.js`)

The application's central nervous system that manages:

- **State Management**: Tracks active section and search terms
- **DOM Manipulation**: Updates content visibility and navigation states
- **Event Handling**: Processes user interactions (clicks, typing)
- **Content Rendering**: Displays appropriate sections with search highlighting

**Key Variables:**

- `activeSectionId`: Tracks currently visible content section
- `currentSearchTerm`: Stores user's search input
- `infoCards`: Object containing references to all content cards

### Search Functionality

The search feature includes **AI-generated code** for robust text highlighting:

```javascript
// AI GENERATED CODE - Advanced text highlighting with regex
function highlightText(text, searchTerm) {
  // Escapes special characters to prevent regex errors
  const escapedTerm = searchTerm.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  const regex = new RegExp(`(${escapedTerm})`, "gi");
  return text.replace(regex, `<mark>$1</mark>`);
}
```

This AI-assisted function handles:

- Special character escaping (e.g., "C++" searches work correctly)
- Case-insensitive matching
- Global pattern matching (highlights all instances)
- HTML mark tag wrapping for visual highlighting

### FAQ System

Interactive accordion component featuring:

- **Single-item expansion**: Only one FAQ open at a time
- **Smooth animations**: CSS transition-based opening/closing
- **Accessibility support**: Proper ARIA states for screen readers

### Data Management (`constants.js`)

Centralized content storage for campus images and information:

- **Image URLs**: Real campus photos for dining, buildings, and activities
- **Content metadata**: Titles, subtitles, and background images
- **Configuration data**: Campus-specific information

## 🎨 Styling Architecture

### CSS Organization

The project uses **BEM (Block Element Modifier)** methodology for maintainable, scalable CSS:

- **Blocks**: Independent components (`.search-box`, `.info-card`)
- **Elements**: Child components (`.search-box__input`, `.info-card__title`)
- **Modifiers**: Variations (`.nav__button--active`, `.faq__item--open`)

### Key Styling Features

**Search Box (`search-box.css`):**

- Smooth focus transitions with purple accent color
- Full-width responsive design
- Accessible placeholder styling

**Body Styles (`body.css`):**

- Inter font family for modern typography
- Comprehensive button states (hover, focus, active)
- Accessibility helpers (`.visually-hidden` for screen readers)
- Container max-width for optimal reading experience

**Header Styles (`header.css`):**

- CSS background-image implementation for university logo
- Responsive logo sizing and positioning
- Modern border styling with rounded corners

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jemaxmars/campus-orientation.git
   cd campus-orientation
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

   The application will open at `http://localhost:3000` (or `http://localhost:3001` if 3000 is in use)

4. **Build for production**
   ```bash
   npm run build
   ```

### Available Scripts

- `npm start` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run dev` - Development build without server

## 🏗️ Development Process

This project represents a collaborative effort with:

- **Modern Build System**: Webpack 5 configuration for development and production
- **Real Campus Images**: Professional photos replacing placeholder images
- **Custom Logo**: Photoshop-created university branding
- **AI-assisted Code**: Complex regex patterns and responsive design elements
- **Comprehensive Documentation**: Detailed comments throughout the codebase

## 📝 Code Attribution

Several code blocks were generated with AI assistance:

- **Text highlighting function** in `main.js` (regex pattern matching)
- **HTML markup structure** in `index.html` (layout optimization)
- All AI-generated code is clearly marked with comments for transparency

## 🌟 Recent Updates

- ✅ **Real Campus Images**: Replaced placeholders with actual university photos
- ✅ **Custom Logo**: Added Photoshop-created university logo via CSS background-image
- ✅ **Constants File**: Organized image data and configuration
- ✅ **Code Cleanup**: Removed unused imports and optimized structure
- ✅ **GitHub Pages Deployment**: Live application accessible via web
- ✅ **Video Documentation**: Comprehensive screencast demonstration

## 🤝 Contributing

This project is designed for team collaboration with:

- Clear code organization and commenting
- Modular component structure
- Consistent naming conventions
- Accessible development practices

## 📄 License

This project is part of an educational assignment and is intended for learning purposes.

---

**Built for August Code Jam 2025 ❤️**
