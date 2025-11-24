# Developer Documentation

This document provides in-depth information about the architecture, components, and development workflow of the `react-dynamic-text-translation-ui-component` library.

## Architecture

The library is built using React Context API to manage the state of the current language and provide translation services to the application.

### Core Components

1.  **TranslationContext**:
    -   Manages the global state of the current language.
    -   Persists the language preference in `localStorage`.
    -   Provides the configuration object to consumers.

2.  **TranslationService**:
    -   Handles the communication with the translation API.
    -   Abstracts the `axios` calls.

3.  **useTranslation Hook**:
    -   The primary interface for components to request translations.
    -   Handles caching logic (localStorage).
    -   Manages loading states.

4.  **TextTranslator Component**:
    -   A wrapper component that simplifies translating text in the UI.
    -   Handles overflow scenarios (truncate, scroll, marquee).
    -   Automatically re-renders when the language changes.

### Caching Strategy

Translations are cached in the browser's `localStorage` to minimize API calls and improve performance.

-   **Key Format**: `translation_{language}_{text}`
-   **Logic**:
    1.  Check if caching is enabled (globally or locally).
    2.  If enabled, check `localStorage` for the key.
    3.  If found, use cached value.
    4.  If not found, call API and save result to `localStorage`.

### Directory Structure

```
src/
├── components/         # UI Components
│   ├── LanguageSwitcher.tsx
│   └── TextTranslator.tsx
├── contexts/           # React Contexts
│   └── TranslationContext.tsx
├── hooks/              # Custom Hooks
│   └── useTranslation.ts
├── services/           # API Services
│   └── translationService.ts
├── index.ts            # Public API Export
└── styles.css          # CSS for animations
```

## Development

### Prerequisites

-   Node.js (v18+)
-   npm or yarn

### Setup

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run build in watch mode (optional, if supported by vite):
    ```bash
    npm run dev
    ```

### Building

The library uses Vite in library mode to bundle the code.

```bash
npm run build
```

This generates:
-   `dist/react-dynamic-text-translation-ui-component.es.js` (ES Module)
-   `dist/react-dynamic-text-translation-ui-component.umd.js` (UMD)
-   `dist/index.d.ts` (Type definitions)
-   `dist/style.css` (Styles)

### Type Definitions

TypeScript declaration files are automatically generated using `vite-plugin-dts`. Ensure `tsconfig.json` is correctly configured to include all source files.

## Extending the Library

### Adding New Languages

Languages are configured by the consumer of the library via the `TranslationConfig` object. No code changes are needed in the library to support new languages, as long as the backend API supports them.

### Customizing Styles

The library uses minimal styling. Most visual aspects can be customized via `className` props on components. The `LanguageSwitcher` uses Tailwind CSS classes internally; if you need to override them, you can use high-specificity selectors or provide your own switcher component using the `useTranslationContext` hook.
