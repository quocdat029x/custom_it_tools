# Source Tree Analysis - it-tools

**Generated:** 2026-01-02
**Project Type:** Vue.js Web Application (Monolith)
**Scan Level:** Quick (pattern-based)

## Project Root Structure

```
it-tools/
├── src/                          # Main source directory
│   ├── tools/                    # 📦 86 self-contained tool features (PRIMARY FEATURE)
│   ├── components/               # Reusable Vue components
│   ├── pages/                    # Route-based pages (Home, 404, About)
│   ├── layouts/                  # Layout components (base, tool)
│   ├── stores/                   # Pinia state management stores
│   ├── composable/               # Vue composables (shared logic)
│   ├── modules/                  # Feature modules
│   ├── plugins/                  # Vue plugins
│   ├── ui/                       # UI component library
│   ├── utils/                    # Utility functions
│   ├── assets/                   # Static assets (images, styles)
│   ├── App.vue                   # Root Vue component
│   ├── main.ts                   # Application entry point ⚡
│   ├── router.ts                 # Vue Router configuration
│   ├── config.ts                 # App configuration
│   └── themes.ts                 # Theme configuration
├── locales/                      # 🌐 i18n translations (9 languages)
├── docs/                         # Generated documentation
├── .github/                      # GitHub templates & workflows
├── _bmad/                        # BMad Method framework files
├── Project_Documents/            # BMad planning artifacts
├── tests/                        # Test files (E2E with Playwright)
├── index.html                    # HTML entry point
├── package.json                  # Dependencies & scripts
├── vite.config.ts                # Vite build configuration
├── tsconfig.json                 # TypeScript configuration
├── playwright.config.ts          # Playwright E2E test config
├── unocss.config.ts              # UnoCSS atomic CSS config
├── README.md                     # Project documentation
└── CHANGELOG.md                  # Version history
```

## Critical Directories

### `/src/tools/` - Tool Features (Primary)
**Purpose:** Contains 86 self-contained developer tools
**Pattern:** Each tool has its own directory with a `.vue` component
**Examples:** ascii-text-drawer, base64-file-converter, bcrypt, cron-generator, etc.

### `/src/components/`
**Purpose:** Shared/reusable Vue components
**Used by:** Tools and pages for common UI elements

### `/src/pages/`
**Purpose:** Route-level page components
**Entry points:** Home, About, 404 pages

### `/src/stores/`
**Purpose:** Pinia state management
**Stores:** Global application state (e.g., theme, settings)

### `/src/layouts/`
**Purpose:** Page layout wrappers
**Key files:** `base.layout.vue`, `tool.layout.vue` (used for tool pages)

### `/locales/`
**Purpose:** Internationalization (i18n) translations
**Languages:** English, German, Spanish, French, Norwegian, Portuguese, Ukrainian, Vietnamese, Chinese

### `/tests/`
**Purpose:** Playwright E2E tests
**Coverage:** End-to-end testing for critical features

## Entry Points

| Entry Point | File | Purpose |
|-------------|------|---------|
| **Application** | `src/main.ts` | Vue app bootstrap |
| **HTML** | `index.html` | HTML entry point |
| **Router** | `src/router.ts` | Route configuration |
| **Root Component** | `src/App.vue` | Root Vue component |

## Integration Points

**Monolithic SPA Architecture:**
- Client-side only (no backend API integration)
- All tools run in the browser
- State managed via Pinia stores
- Routing via Vue Router
- PWA support for offline capability

## Tool Structure Pattern

Each tool follows this convention:
```
src/tools/{tool-name}/
├── {tool-name}.vue           # Main tool component
├── {tool-name}.service.ts    # Business logic (optional)
├── {tool-name}.test.ts       # Unit tests (optional)
├── {tool-name}.e2e.spec.ts   # E2E tests (optional)
└── ...
```

## File Naming Conventions

- **Components:** `*.vue` (PascalCase for multi-word)
- **Services:** `*.service.ts` (kebab-case)
- **Composables:** `*.ts` (camelCase)
- **Tests:** `*.test.ts`, `*.e2e.spec.ts`
- **Locales:** `{lang}.yml` (ISO 639-1 codes)
