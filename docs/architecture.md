# Architecture Documentation - it-tools

**Generated:** 2026-01-02
**Project Type:** Vue.js Single Page Application
**Architecture Pattern:** Component-Based SPA with Vue 3 Composition API

---

## Executive Summary

**it-tools** is a collection of 86+ developer tools built as a progressive web app (PWA) using Vue 3, TypeScript, and Vite. The application is client-side only with no backend dependencies, making it simple to deploy and host.

**Key Characteristics:**
- **Monolithic SPA:** Single cohesive codebase
- **Client-Side Only:** No backend API, all logic runs in browser
- **PWA Enabled:** Offline capable with service workers
- **Modular Tools:** Each tool is self-contained in its own directory
- **Internationalized:** 9 language translations

---

## Technology Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Framework** | Vue.js | 3.3.4 | Progressive web app framework |
| **Language** | TypeScript | 5.2.0 | Type-safe development |
| **Build Tool** | Vite | 4.4.9 | Fast dev server & bundler |
| **State Management** | Pinia | 2.0.34 | Centralized state |
| **Routing** | Vue Router | 4.1.6 | Client-side routing |
| **UI Library** | Naive UI | 2.35.0 | Vue 3 components |
| **CSS Framework** | UnoCSS | 0.65.1 | Atomic CSS engine |
| **Icons** | Tabler Icons, Material Icons | - | Icon libraries |
| **Testing (Unit)** | Vitest | 0.34.0 | Unit testing |
| **Testing (E2E)** | Playwright | 1.32.3 | End-to-end testing |
| **i18n** | Vue I18n | 9.9.1 | Localization |
| **Package Manager** | pnpm | 9.11.0 | Dependency management |

---

## Architecture Pattern

### Component-Based SPA with Composition API

The application follows Vue 3's Composition API pattern:

```
┌─────────────────────────────────────────────────────┐
│                   Browser                           │
│  ┌───────────────────────────────────────────────┐  │
│  │              Vue Application                  │  │
│  │  ┌───────────┐  ┌──────────┐  ┌───────────┐  │  │
│  │  │   Router  │→│  Stores  │→│  Plugins  │  │  │
│  │  └───────────┘  └──────────┘  └───────────┘  │  │
│  │                                               │  │
│  │  ┌───────────────────────────────────────┐  │  │
│  │  │          Pages (Router Views)          │  │  │
│  │  │  ┌─────────┐  ┌─────────┐  ┌────────┐ │  │  │
│  │  │  │  Home   │  │  Tool   │  │ About  │ │  │  │
│  │  │  └─────────┘  └─────────┘  └────────┘ │  │  │
│  │  └───────────────────────────────────────┘  │  │
│  │                                               │  │
│  │  ┌───────────────────────────────────────┐  │  │
│  │  │           Tool Components             │  │  │
│  │  │     (86 self-contained tools)         │  │  │
│  │  └───────────────────────────────────────┘  │  │
│  │                                               │  │
│  │  ┌───────────────────────────────────────┐  │  │
│  │  │      Shared UI Components             │  │  │
│  │  └───────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │            Service Worker (PWA)               │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

---

## Data Architecture

### Client-Side Data Flow

Since this is a client-side only application:

1. **User Input** → Tool Component (`.vue`)
2. **Business Logic** → Service Layer (`.service.ts`)
3. **State** → Component Local State or Pinia Store
4. **Persistence** → Local Storage (for some tools)
5. **Output** → Displayed in UI

**No Backend Communication:**
- No REST API calls
- No database connections
- No server-side rendering
- All computation happens in the browser

---

## Component Overview

### Directory Structure

| Directory | Purpose |
|-----------|---------|
| `/src/tools/` | 86 tool implementations (primary feature) |
| `/src/components/` | Shared reusable components |
| `/src/ui/` | Base UI component library |
| `/src/pages/` | Route-level page components |
| `/src/layouts/` | Page layout wrappers |
| `/src/stores/` | Pinia state stores |
| `/src/composable/` | Vue composables (shared logic) |
| `/src/utils/` | Utility functions |

### Tool Component Pattern

Each tool follows this structure:

```
src/tools/{tool-name}/
├── {tool-name}.vue              # Main tool component
├── {tool-name}.service.ts       # Business logic (optional)
├── locales/                     # Tool-specific translations
│   ├── en.yml
│   ├── de.yml
│   └── ...
└── *.test.ts                    # Unit tests (optional)
```

**Example Tools:**
- Base64 converters
- Text manipulation tools
- Developer utilities (JWT decoder, cron generator)
- Security tools (bcrypt, hash generator)
- Color converter
- Date/time tools

---

## Source Tree

```
it-tools/
├── src/
│   ├── tools/                   # 🔧 86 developer tools
│   ├── components/              # 📦 Shared components
│   ├── pages/                   # 📄 Route pages (Home, About, 404)
│   ├── layouts/                 # 📐 Layout wrappers
│   ├── stores/                  # 🗄️ Pinia state
│   ├── composable/              # 🔧 Vue composables
│   ├── modules/                 # 📦 Feature modules
│   ├── plugins/                 # 🔌 Vue plugins
│   ├── ui/                      # 🎨 UI component library
│   ├── utils/                   # 🛠️ Utilities
│   ├── assets/                  # 📁 Static assets
│   ├── App.vue                  # 🚀 Root component
│   ├── main.ts                  # ⚡ Entry point
│   ├── router.ts                # 🛣️ Router config
│   ├── config.ts                # ⚙️ App config
│   └── themes.ts                # 🎨 Theme config
├── locales/                     # 🌐 i18n (9 languages)
├── tests/                       # 🧪 Playwright E2E tests
├── index.html                   # 📄 HTML entry
├── vite.config.ts               # ⚡ Vite config
├── tsconfig.json                # 📘 TypeScript config
├── playwright.config.ts         # 🎭 E2E test config
└── package.json                 # 📦 Dependencies
```

---

## Development Workflow

### Tool Creation Workflow

1. **Generate Boilerplate:**
   ```bash
   pnpm run script:create:tool my-tool
   ```

2. **Implement Tool Logic:**
   - Edit `.vue` component for UI
   - Add business logic in `.service.ts` if needed
   - Add translations to `locales/` directory

3. **Register Tool:**
   - Add to appropriate category in `src/tools/index.ts`

4. **Test:**
   - Write unit tests for services
   - Add E2E tests for critical tools

5. **Build & Verify:**
   ```bash
   pnpm build && pnpm preview
   ```

### Testing Strategy

| Type | Tool | Coverage |
|------|------|----------|
| Unit | Vitest | Composables, services |
| E2E | Playwright | Critical user flows |
| Type Check | vue-tsc | All TypeScript/Vue files |
| Lint | ESLint | Code quality |

---

## Deployment Architecture

### Build Process

1. **Type Check:** `vue-tsc --noEmit`
2. **Lint:** ESLint with auto-fix
3. **Build:** `vite build` → `dist/` directory
4. **Deploy:** Push to Vercel (automatic) or deploy Docker image

### Deployment Options

| Platform | Type | URL |
|----------|------|-----|
| Vercel | Production (main site) | https://it-tools.tech |
| Docker | Self-hosted | `corentinth/it-tools:latest` |
| Netlify | Alternative | Available |
| Cloudron/Tipi/Unraid | Homelab | See deployment guide |

### Infrastructure

- **Stateless:** No database, no session storage
- **Static Assets:** Served via CDN
- **PWA:** Service worker enables offline mode
- **Single File:** All JS bundled into single file (plus chunks)

---

## Security Considerations

- **No Backend:** Reduces attack surface (no server vulnerabilities)
- **Client-Side Only:** All data stays in user's browser
- **No External APIs:** No API keys or secrets
- **Content Security:** Uses DOMPurify for HTML sanitization where needed
- **Dependencies:** Regular updates via Dependabot

---

## Performance Optimizations

1. **Vite:** Fast HMR during development
2. **Code Splitting:** Lazy-loaded routes and tools
3. **Tree Shaking:** Unused code eliminated
4. **PWA:** Caching for offline use
5. **Atomic CSS:** UnoCSS for minimal CSS footprint
6. **Auto-Import:** Unplugin for automatic imports (reduced boilerplate)

---

## Internationalization (i18n)

### Supported Languages

English (en), German (de), Spanish (es), French (fr), Norwegian (no), Portuguese (pt), Ukrainian (uk), Vietnamese (vi), Chinese (zh)

### i18n Structure

```
locales/
├── en.yml          # Global English translations
├── de.yml          # Global German translations
└── ...

src/tools/{tool}/locales/
├── en.yml          # Tool-specific translations
├── de.yml
└── ...
```

### Usage

- **Framework:** Vue I18n
- **Runtime Only:** JIT compilation enabled
- **Composition Only:** Composition API mode
- **Lazy Loading:** Translations loaded by locale

---

## Testing Architecture

### Unit Tests (Vitest)

- **Framework:** Vitest
- **Environment:** jsdom
- **Focus:** Composables, services, business logic
- **Location:** `*.test.ts` files alongside source

### E2E Tests (Playwright)

- **Framework:** Playwright
- **Config:** `playwright.config.ts`
- **Focus:** Critical user flows
- **Location:** `tests/` directory, `*.e2e.spec.ts` in tools

---

## Known Limitations

- **Client-Side Only:** No server-side processing
- **Browser Capabilities:** Limited by browser performance
- **No Backend:** Cannot integrate with external APIs directly
- **Single User:** No multi-user collaboration features

---

## Future Considerations

### Potential Enhancements

1. **Backend Integration:** Add optional API for data persistence
2. **User Accounts:** Enable tool customization across devices
3. **Tool Sharing:** Allow users to share tool configurations
4. **Plugin System:** Enable community tool contributions
5. **Mobile App:** Native mobile application via Capacitor

### Scalability

- Current architecture handles 86 tools efficiently
- Code splitting keeps initial load small
- Lazy loading prevents large bundle sizes
- PWA caching reduces server load
