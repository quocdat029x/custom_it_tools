# Development Guide - it-tools

**Generated:** 2026-01-02

## Prerequisites

| Requirement | Version/Tool |
|-------------|--------------|
| Node.js | 18+ (see `.nvmrc`) |
| Package Manager | pnpm 9.11.0 |
| IDE | VSCode (recommended) |

## Recommended VSCode Setup

### Required Extensions

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally)

### VSCode Settings

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "i18n-ally.localesPaths": ["locales", "src/tools/*/locales"],
  "i18n-ally.keystyle": "nested"
}
```

## Environment Setup

### Installation

```bash
pnpm install
```

### Development Server

```bash
pnpm dev
```

- Runs Vite dev server
- Hot-reload enabled
- Default: http://localhost:5173

## Build Commands

### Production Build

```bash
pnpm build
```

- Runs TypeScript type checking (`vue-tsc --noEmit`)
- Creates optimized production bundle
- Output: `dist/` directory

### Preview Production Build

```bash
pnpm preview
```

- Serves production build locally
- Default port: 5050

## Testing

### Unit Tests (Vitest)

```bash
pnpm test              # Run unit tests
pnpm run coverage      # Run with coverage
```

- Test runner: Vitest
- Environment: jsdom
- Config: `tsconfig.vitest.json`

### E2E Tests (Playwright)

```bash
pnpm test:e2e         # Run E2E tests
pnpm test:e2e:dev     # Run E2E tests against dev server
```

- E2E framework: Playwright
- Config: `playwright.config.ts`

### Type Checking

```bash
pnpm typecheck        # Type check without emitting files
```

## Linting

```bash
pnpm lint             # Run ESLint
```

- Linter: ESLint with @antfu/eslint-config
- Auto-fixes issues on save

## Creating a New Tool

### Automated Tool Generation

```bash
pnpm run script:create:tool my-tool-name
```

This script:
1. Creates a new directory in `src/tools/`
2. Generates boilerplate files (`.vue` component, tests, etc.)
3. Adds import to `src/tools/index.ts`
4. You just need to add it to the proper category and implement the tool

### Tool Structure

Each tool follows this pattern:
```
src/tools/{tool-name}/
├── {tool-name}.vue           # Main component
├── {tool-name}.service.ts    # Business logic
├── locales/                  # Translations (optional)
│   ├── en.yml
│   └── ...
└── *.test.ts                 # Tests
```

## Common Development Tasks

| Task | Command |
|------|---------|
| Start dev server | `pnpm dev` |
| Build for production | `pnpm build` |
| Run tests | `pnpm test` |
| Run E2E tests | `pnpm test:e2e` |
| Lint code | `pnpm lint` |
| Type check | `pnpm typecheck` |
| Create new tool | `pnpm run script:create:tool <name>` |
| Create new UI component | `pnpm run script:create:ui` |

## Project Structure Notes

- **Entry Point:** `src/main.ts`
- **Root Component:** `src/App.vue`
- **Router:** `src/router.ts` (Vue Router)
- **State:** `src/stores/` (Pinia)
- **Tools:** `src/tools/` (86 tools, each self-contained)
- **Shared Components:** `src/components/`
- **UI Library:** `src/ui/`
- **Locales:** `locales/` (9 languages)

## Tool Development Tips

1. Use the tool generator script for consistent structure
2. Add translations to `locales/{tool-name}/` for all supported languages
3. Write tests for business logic (`.service.ts`)
4. Each tool should be self-contained
5. Follow existing tool patterns for consistency

## Testing Strategy

- **Unit Tests:** Test services and composables with Vitest
- **E2E Tests:** Test critical user flows with Playwright
- **Type Checking:** Use `vue-tsc` for Vue SFC type checking

## Build Configuration

- **Build Tool:** Vite 4.4.9
- **TypeScript:** 5.2.0
- **Config Files:**
  - `vite.config.ts` - Vite configuration
  - `tsconfig.json` - TypeScript project references
  - `unocss.config.ts` - UnoCSS atomic CSS
  - `playwright.config.ts` - E2E test configuration
