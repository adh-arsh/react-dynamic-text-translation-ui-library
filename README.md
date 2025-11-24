# React Dynamic Text Translation UI Component

A React library for real-time text translation with caching and overflow handling support.

## Installation

```bash
npm install react-dynamic-text-translation-ui-component
# or
yarn add react-dynamic-text-translation-ui-component
```

## Setup

Wrap your application with `TranslationProvider` and provide the configuration.

```tsx
import { TranslationProvider, TranslationConfig } from 'react-dynamic-text-translation-ui-component';
import 'react-dynamic-text-translation-ui-component/style.css'; // Import styles for marquee effect

const config: TranslationConfig = {
  apiUrl: 'http://localhost:9001', // Your translation API endpoint
  supportedLanguages: [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
  ],
  defaultLanguage: 'en',
  defaultNoCache: false, // Optional: Disable caching globally by default
  storageKey: 'my_app_language', // Optional: Custom localStorage key
};

function App() {
  return (
    <TranslationProvider config={config}>
      <YourApp />
    </TranslationProvider>
  );
}
```

## Usage

### TextTranslator Component

Use `TextTranslator` to wrap text that should be translated.

```tsx
import { TextTranslator } from 'react-dynamic-text-translation-ui-component';

// Basic usage
<TextTranslator text="Hello World" />

// With overflow handling (truncate)
<TextTranslator text="Long text..." truncate={true} className="max-w-xs" />

// With marquee effect (auto-scroll)
<TextTranslator text="Very long text..." enableMarquee={true} />

// With custom marquee speed (in seconds, default: 10)
<TextTranslator text="Very long text..." enableMarquee={true} marqueeSpeed={5} />

// Disable caching for this specific instance
<TextTranslator text="Dynamic text" noCache={true} />
```
```

### TextTranslator Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | required | The text to translate |
| `className` | `string` | `''` | Additional CSS classes |
| `as` | `React.ElementType` | `'span'` | HTML element to render as |
| `enableScroll` | `boolean` | `false` | Enable horizontal scroll for overflow |
| `enableTooltip` | `boolean` | `true` | Show tooltip on hover if text is truncated |
| `truncate` | `boolean` | `false` | Use ellipsis for truncation |
| `enableMarquee` | `boolean` | `false` | Enable continuous auto-scrolling for overflow |
| `marqueeSpeed` | `number` | `10` | Animation duration in seconds (lower = faster) |
| `noCache` | `boolean` | `false` | Disable caching for this specific translation |

### LanguageSwitcher Component

```tsx
import { LanguageSwitcher } from 'react-dynamic-text-translation-ui-component';

// Icon variant (floating globe)
<LanguageSwitcher variant="icon" />

// Text variant (dropdown)
<LanguageSwitcher variant="text" />
