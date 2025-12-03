# Reuben's Portfolio Website

A simple static React website built with Mantine UI components to host my portfolio and resume. This site is deployed on GitHub Pages.

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Mantine** - Component library
- **GitHub Pages** - Hosting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/reubenjamesbishop/reubens-website.git
cd reubens-website
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building

Build the project for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

### Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
```

This will build the project and push the `dist` folder to the `gh-pages` branch.

## Project Structure

- `src/` - Source code
  - `components/` - Reusable React components
  - `pages/` - Page components
  - `assets/` - Images and static files
- `public/` - Public assets
- `dist/` - Production build output (generated)
