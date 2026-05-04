# Flavor & Fire - Restaurant Website Template

A modern, clean, and fully static restaurant website template built with React, TypeScript, and Tailwind CSS.

## Features
- **Fully Static**: No backend required. Perfect for GitHub Pages.
- **JSON Driven**: Edit `src/data/menu.json` and `src/data/config.json` to change content.
- **WhatsApp Ordering**: Integrated WhatsApp links for every menu item.
- **Mobile Responsive**: Optimized for all screen sizes.
- **Modern UI**: Editorial/Swiss minimalist design.

## Customization

### 1. Restaurant Info
Open `src/data/config.json` to edit:
- Restaurant Name
- Contact Details (Phone, Email, Address)
- **WhatsApp Number**: Use only digits (e.g., `15551234567`).
- Opening Hours

### 2. Menu Items
Open `src/data/menu.json`:
- Add or remove items.
- Change prices, descriptions, and categories.
- Update `image` paths to your own images in `src/assets/images`.

### 3. Images
Replace placeholder images in `src/assets/images` with your own. Ensure the filenames match those in the JSON files.

## Deployment on GitHub Pages

1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Push to GitHub**:
   Upload the contents of the `dist` folder to your GitHub repository (or use the `gh-pages` branch).
3. **Configure Routing**:
   This template uses `HashRouter` which works out-of-the-box on GitHub Pages without any extra configuration.

## Technologies
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion (for animations)
- Lucide React (for icons)
- React Router (HashRouter)
