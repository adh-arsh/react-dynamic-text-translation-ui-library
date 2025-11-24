# Integration Guide

Since this library is hosted on a public repository (not npm), you can use it in your project by cloning it locally.

## Step 1: Clone the Repository

Clone the library repository to a folder on your computer (e.g., next to your main project).

```bash
git clone <REPOSITORY_URL> react-dynamic-text-translation-ui-component
cd react-dynamic-text-translation-ui-component
```

## Step 2: Build the Library

Before you can use it, you need to build the library to generate the necessary files.

```bash
npm install
npm run build
```

*Note: You should see a `dist` folder created after the build completes.*

## Step 3: Install in Your Project

Now, go to your main project directory (where you want to use the translation library).

```bash
cd ../my-app
```

Install the library using the local path:

```bash
npm install ../react-dynamic-text-translation-ui-component
# OR if you are using yarn
yarn add file:../react-dynamic-text-translation-ui-component
```

*Make sure the path `../react-dynamic-text-translation-ui-component` points correctly to where you cloned the library.*

## Step 4: Setup Provider

In your project's root file (e.g., `src/App.tsx` or `src/main.tsx`), wrap your app with the `TranslationProvider`.

```tsx
import { TranslationProvider, TranslationConfig } from 'react-dynamic-text-translation-ui-component';
// IMPORTANT: Don't forget to import the styles!
import 'react-dynamic-text-translation-ui-component/style.css';

const config: TranslationConfig = {
  // Option A: Use your own backend
  // apiUrl: 'http://localhost:9001',
  
  // Option B: Use Google Translate directly
  apiUrl: 'https://translation.googleapis.com/language/translate/v2',
  apiKey: 'YOUR_GOOGLE_API_KEY',
  translateFn: async (text, targetLanguage, apiUrl, apiKey) => {
    // Custom logic to call Google API
    const response = await fetch(`${apiUrl}?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify({ q: text, target: targetLanguage, format: 'text' })
    });
    const data = await response.json();
    return data.data.translations[0].translatedText;
  },
 // Reference for language codes: https://cloud.google.com/translate/docs/languages or use your translation API specific codes
  supportedLanguages: [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    // Add more languages...
  ],
  defaultLanguage: 'en',
};

function App() {
  return (
    <TranslationProvider config={config}>
      <YourApp />
    </TranslationProvider>
  );
}
```

## Step 5: Start Translating

Now you can use the components anywhere in your app!

### Translate Text
```tsx
import { TextTranslator } from 'react-dynamic-text-translation-ui-component';

// Basic translation
<TextTranslator text="Hello World" />

// With truncation (shows ellipsis)
<TextTranslator 
  text="This is a very long text that will be truncated" 
  truncate={true} 
  className="max-w-xs" 
/>

// With marquee scrolling (default speed: 10s)
<TextTranslator 
  text="This is a very long text that will scroll continuously" 
  enableMarquee={true} 
/>

// With custom marquee speed (5s = faster, 20s = slower)
<TextTranslator 
  text="Fast scrolling text" 
  enableMarquee={true} 
  marqueeSpeed={5} 
/>
```

### Switch Languages
```tsx
import { LanguageSwitcher } from 'react-dynamic-text-translation-ui-component';

<LanguageSwitcher variant="icon" />
```

### Use Hook (for attributes)
```tsx
import { useTranslation } from 'react-dynamic-text-translation-ui-component';

const { translatedText } = useTranslation('Placeholder text');
<input placeholder={translatedText} />
```

## Advanced Features

### Marquee Speed Control

The `marqueeSpeed` prop controls how fast the text scrolls (in seconds). Lower values = faster scrolling.

```tsx
// Fast scrolling (5 seconds)
<TextTranslator text="Fast text" enableMarquee={true} marqueeSpeed={5} />

// Normal scrolling (10 seconds - default)
<TextTranslator text="Normal text" enableMarquee={true} />

// Slow scrolling (20 seconds)
<TextTranslator text="Slow text" enableMarquee={true} marqueeSpeed={20} />
```

### Tooltip Behavior

Tooltips automatically appear when hovering over truncated or marquee text:
- Positioned above the text with proper z-index layering
- Pauses marquee animation on hover
- Shows full text content

## Troubleshooting

-   **Styles missing?** Ensure you imported `'react-dynamic-text-translation-ui-component/style.css'` in your root file.
-   **Type errors?** Try restarting your VS Code or TypeScript server after installing the local package.
-   **Updates not showing?** If you modify the library code, remember to run `npm run build` in the library folder again, and potentially reinstall it in your app.
-   **Marquee not working?** Make sure the text is long enough to overflow the container width.
-   **Tooltip not showing?** Ensure `enableTooltip` is not set to `false` (it's `true` by default).
