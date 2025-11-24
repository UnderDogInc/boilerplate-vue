# Vue Project Template

Vue3 + Vite + [Feature-Sliced Design (FSD)](https://feature-sliced.design/)

## Quick Start

```sh
yarn install
yarn dev
```

## Scripts

- `yarn dev` - Development server
- `yarn build` - Production build
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier
- `yarn type-check` - TypeScript type checking
- `yarn stylelint` - Run Stylelint

## Project Structure (FSD)

```
src/
├── app/              # App initialization, router, providers
├── pages/            # Pages (file-based routing)
├── widgets/          # Complex feature compositions
├── features/         # Business features
├── entities/         # Business entities (data layer)
└── shared/           # Shared resources (ui, lib, config, assets, styles)
```

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **TypeScript** - Typed JavaScript
- **TanStack Query** - Data synchronization & caching
- **PrimeVue** - Vue UI Component Library
- **Tailwind CSS** - Utility-first CSS framework
- **Pinia** - State management

## Code Quality

Pre-commit hooks (Husky + lint-staged) automatically check:
- ESLint for `.ts` and `.vue` files
- Stylelint for `.scss` and `.vue` files

## Deployment with PM2

### Prerequisites

```sh
npm install -g pm2
```

### Build and Deploy

1. Build the project:
```sh
yarn build
```

2. Start with PM2:
```sh
pm2 start ecosystem.config.js
```

3. Useful PM2 commands:
```sh
pm2 list              # List all processes
pm2 logs vue-app      # View logs
pm2 restart vue-app   # Restart app
pm2 stop vue-app      # Stop app
pm2 delete vue-app    # Delete app
pm2 save              # Save current process list
pm2 startup           # Generate startup script
```

### Configuration

The `ecosystem.config.js` file is configured to:
- Run `npm run preview` (Vite preview server)
- Use port 4173
- Auto-restart on crash
- Log to `./logs/pm2-*.log`
