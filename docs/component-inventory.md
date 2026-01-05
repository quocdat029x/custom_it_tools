# Component Inventory - it-tools

**Generated:** 2026-01-02
**Scan Level:** Quick (pattern-based)

---

## Overview

This document catalogs the components found in the it-tools codebase.

---

## Tools (86 Components)

**Location:** `src/tools/`

The application contains **86 self-contained tool components**, each in its own directory. Each tool typically consists of:

- Main `.vue` component
- Optional `.service.ts` for business logic
- Optional tests (`.test.ts`, `.e2e.spec.ts`)
- Optional locales directory for translations

### Tool Categories

| Category | Example Tools |
|----------|---------------|
| **Text Tools** | ascii-text-drawer, case-converter, text-statistics |
| **Encoding/Decoding** | base64-file-converter, base64-string-converter, html-entities |
| **Security** | bcrypt, basic-auth-generator, hash-text, jwt-decoder |
| **Development** | cron-generator, json-to-yaml, sql-formatter, xml-formatter |
| **Color** | color-converter, contrast-checker |
| **Date/Time** | date-time-converter, cron-parser, chronometer |
| **Network** | ip-address-converter, mac-address-lookup |
| **Math** | percentage-calculator, numerology-converters |
| **Utilities** | camera-recorder, device-information, emoji-picker |

### Sample Tools (Full List via `find src/tools -type d -maxdepth 1`)

```
ascii-text-drawer/
base64-file-converter/
base64-string-converter/
basic-auth-generator/
bcrypt/
benchmark-builder/
bip39-generator/
camera-recorder/
case-converter/
chmod-calculator/
chronometer/
color-converter/
crontab-generator/
date-time-converter/
device-information/
docker-run-to-docker-compose-converter/
email-normalizer/
emoji-picker/
encryption/
... and 70+ more
```

---

## Shared Components

**Location:** `src/components/`

Reusable Vue components used across the application.

*Note: Quick scan did not enumerate individual components. Refer to the directory for complete listing.*

---

## UI Component Library

**Location:** `src/ui/`

Base UI components built with Naive UI.

*Note: Quick scan did not enumerate individual components. Refer to the directory for complete listing.*

---

## Pages

**Location:** `src/pages/`

| Component | Purpose |
|-----------|---------|
| `Home.page.vue` | Home page |
| `About.vue` | About page |
| `404.page.vue` | 404 error page |

---

## Layouts

**Location:** `src/layouts/`

| Component | Purpose |
|-----------|---------|
| `base.layout.vue` | Base layout wrapper |
| `tool.layout.vue` | Tool-specific layout |

---

## Stores

**Location:** `src/stores/`

| Store | Purpose |
|-------|---------|
| `style.store.ts` | Theme/style state management |

---

## Composables

**Location:** `src/composable/`

Shared Vue 3 composables (reusable logic functions).

| Composable | Purpose |
|------------|---------|
| `downloadBase64.ts` | Download functionality for base64 content |
| `validation.ts` | Validation utilities |

*Note: Additional composables may exist. Refer to directory for complete listing.*

---

## Design System

### UI Framework

- **Primary:** Naive UI 2.35.0
- **Icons:** Tabler Icons, Material Icons
- **CSS:** UnoCSS (atomic CSS)

### Component Patterns

1. **Tool Components:**
   - Self-contained in `src/tools/{tool-name}/`
   - Follow naming convention: `{tool-name}.vue`
   - Optional service layer: `{tool-name}.service.ts`
   - Optional translations: `locales/{lang}.yml`

2. **Shared Components:**
   - Located in `src/components/`
   - Reusable across tools
   - Generic naming (PascalCase)

3. **Layout Components:**
   - Located in `src/layouts/`
   - Named with `.layout.vue` suffix
   - Wrap page content

4. **UI Components:**
   - Located in `src/ui/`
   - Base component library
   - Built on Naive UI primitives

---

## Component Reusability

| Type | Reusable | Notes |
|------|----------|-------|
| Tools | ❌ No | Each tool is self-contained and specific |
| Shared Components | ✅ Yes | Used across multiple tools/pages |
| UI Components | ✅ Yes | Base component library |
| Layouts | ✅ Yes | Wrap different page types |
| Composables | ✅ Yes | Reusable logic/functions |

---

## Auto-Import Configuration

The project uses `unplugin-auto-import` and `unplugin-vue-components` for automatic imports:

- **Auto-Imported APIs:** Vue, Vue Router, @vueuse/core, vue-i18n, Naive UI composables
- **Auto-Imported Components:** All `.vue` and `.md` files from `src/`
- **Resolvers:** Naive UI components, Icons (Tabler, Material)

This means components and composables don't require explicit imports in most cases.

---

## Icon Usage

**Libraries:**
- Tabler Icons (via @tabler/icons-vue)
- Material Icons (via @vicons/material)
- Custom icon resolvers with prefix `icon`

**Usage Pattern:**
```vue
<icon-mdi-home />  <!-- Material Design icon -->
<icon-tabler-home /> <!-- Tabler icon -->
```
