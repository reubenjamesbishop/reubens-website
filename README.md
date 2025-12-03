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

This project uses GitHub Actions for automatic deployment to GitHub Pages.

#### Automatic Deployment
Every push to the `main` branch will automatically trigger a deployment.

#### Manual Deployment
1. Go to the "Actions" tab in your GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

#### First-time Setup
To enable GitHub Pages deployment:
1. Go to your repository Settings → Pages
2. Under "Build and deployment", set Source to "GitHub Actions"
3. Push to the `main` branch or manually trigger the workflow

#### Alternative: Manual Deploy with gh-pages
You can still deploy manually using:
```bash
npm run deploy
```

This will build and push directly to the `gh-pages` branch.

## Project Structure

```
src/
├── types/              # TypeScript interfaces
├── data/               # Static content (work, projects, education, etc.)
├── components/
│   ├── common/         # Reusable UI components
│   └── sections/       # Page section components
├── pages/              # Page components
└── assets/             # Images and static files
```

## Updating Content

All content is separated from code for easy updates:
- **Work Experience**: Edit `src/data/experience.ts`
- **Projects**: Edit `src/data/projects.ts`
- **Education**: Edit `src/data/education.ts`
- **Tech Stack**: Edit `src/data/technologies.ts`
- **Contact Info**: Edit `src/data/contact.ts`
