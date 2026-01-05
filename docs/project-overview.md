# Project Overview - it-tools

**Generated:** 2026-01-02
**Repository:** https://github.com/CorentinTh/it-tools
**License:** GNU GPLv3

---

## About

**it-tools** is a collection of handy online tools for developers and IT professionals, built with great UX. The application is a progressive web app (PWA) that provides 86+ developer utilities in a single, fast, and beautiful interface.

**Live Site:** https://it-tools.tech

---

## Quick Reference

| Attribute | Value |
|-----------|-------|
| **Type** | Web Application (Vue.js SPA) |
| **Architecture** | Monolithic SPA (Component-based) |
| **Primary Language** | TypeScript |
| **Framework** | Vue 3 + Vite |
| **State Management** | Pinia |
| **UI Library** | Naive UI |
| **CSS** | UnoCSS (Atomic CSS) |
| **Testing** | Vitest (Unit) + Playwright (E2E) |
| **Package Manager** | pnpm |
| **Deployment** | Vercel (production), Docker (self-hosted) |

---

## Tech Stack Summary

### Frontend

- **Vue.js 3.3.4** - Progressive web app framework
- **TypeScript 5.2.0** - Type-safe JavaScript
- **Vite 4.4.9** - Fast build tool and dev server
- **Vue Router 4.1.6** - Client-side routing
- **Pinia 2.0.34** - State management
- **Naive UI 2.35.0** - Vue 3 component library
- **UnoCSS 0.65.1** - Atomic CSS engine

### Development Tools

- **Vitest** - Unit testing
- **Playwright** - End-to-end testing
- **ESLint** - Code linting
- **vue-tsc** - TypeScript type checking for Vue SFCs
- **pnpm** - Fast, disk-efficient package manager

### Internationalization

- **Vue I18n 9.9.1** - Multi-language support
- **Languages:** English, German, Spanish, French, Norwegian, Portuguese, Ukrainian, Vietnamese, Chinese

---

## Repository Structure

**Monolithic SPA** - Single cohesive codebase with 86+ self-contained tools.

### Key Directories

| Directory | Purpose |
|-----------|---------|
| `src/tools/` | 86 developer tools (primary feature) |
| `src/components/` | Shared Vue components |
| `src/pages/` | Route-level pages (Home, About, 404) |
| `src/layouts/` | Layout wrappers |
| `src/stores/` | Pinia state stores |
| `src/composable/` | Vue composables (shared logic) |
| `src/ui/` | UI component library |
| `locales/` | i18n translations (9 languages) |
| `tests/` | Playwright E2E tests |

---

## Architecture Type

**Component-Based SPA with Vue 3 Composition API**

- **Client-Side Only:** No backend dependencies
- **Modular Tools:** Each tool is self-contained
- **PWA Enabled:** Offline capable with service workers
- **Code Splitting:** Lazy-loaded routes and tools
- **Internationalized:** Multi-language support

---

## Key Features

### Developer Tools (86+)

**Categories:**
- Text manipulation (case converter, diff checker)
- Encoding/decoding (Base64, URL encoder)
- Security (bcrypt, JWT decoder, hash generator)
- Development (cron generator, JSON formatter, YAML converter)
- Color tools (color converter, picker)
- Date/time utilities
- Network tools (basic auth generator)
- And many more...

### User Experience

- **Fast:** Built with Vite for instant HMR and optimized builds
- **Beautiful:** Clean, modern UI with Naive UI components
- **Responsive:** Works on desktop and mobile
- **Offline:** PWA with service worker for offline access
- **Internationalized:** Available in 9 languages

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9.11.0

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test
```

### Development

```bash
pnpm dev              # Start dev server (http://localhost:5173)
pnpm test             # Run unit tests
pnpm test:e2e         # Run E2E tests
pnpm lint             # Lint code
pnpm typecheck        # Type check
```

### Creating a New Tool

```bash
pnpm run script:create:tool my-tool-name
```

This generates the boilerplate structure in `src/tools/my-tool-name/`.

---

## Deployment

### Production Site

**URL:** https://it-tools.tech
**Platform:** Vercel (continuous deployment)

### Self-Hosting

**Docker:**
```bash
docker run -d --name it-tools -p 8080:80 corentinth/it-tools:latest
```

**Other Platforms:**
- Cloudron
- Tipi
- Unraid

---

## Documentation

| Document | Description |
|----------|-------------|
| [Architecture](./architecture.md) | Detailed system architecture |
| [Source Tree Analysis](./source-tree-analysis.md) | Annotated directory structure |
| [Development Guide](./development-guide.md) | Setup and development workflow |
| [Deployment Guide](./deployment-guide.md) | Deployment options and CI/CD |

---

## Project Links

- **Repository:** https://github.com/CorentinTh/it-tools
- **Issues:** https://github.com/CorentinTh/it-tools/issues
- **Live Demo:** https://it-tools.tech
- **Docker Hub:** https://hub.docker.com/r/corentinth/it-tools

---

## Contributing

Contributions are welcome! See `CONTRIBUTING.md` (if available) or submit a pull request.

### Contribution Areas

- New tools
- Bug fixes
- Translation improvements
- Documentation
- Performance optimizations

---

## Credits

**Author:** Corentin Thomasset
**Website:** https://corentin.tech

**Built with:**
- ❤️ for the developer community
- Vue.js and TypeScript
- Great UX principles

---

## License

**GNU General Public License v3.0**

See [LICENSE](../LICENSE) file for details.
