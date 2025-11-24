import {
    TranslationProvider,
    TextTranslator,
    LanguageSwitcher,
    TranslationConfig,
    useTranslation
} from 'react-dynamic-text-translation-ui-component';
import '../../src/styles.css';

const config: TranslationConfig = {
    // 1. Basic Usage: Connect to your backend (Uncomment to use)
    /*
    apiUrl: 'http://localhost:9001',
    // apiKey: 'your-backend-api-key', // Add if your backend requires it
   */
    // 2. Advanced Usage: Connect directly to Google Translate or any other translation service
    apiUrl: 'https://translation.googleapis.com/language/translate/v2',
    apiKey: 'YOUR_GOOGLE_API_KEY',
    translateFn: async (text, targetLanguage, apiUrl, apiKey) => {
        // Example using fetch (or use axios)
        const response = await fetch(`${apiUrl}?key=${apiKey}`, {
            method: 'POST',
            body: JSON.stringify({ q: text, target: targetLanguage, format: 'text' })
        });
        const data = await response.json();
        return data.data.translations[0].translatedText;
    },


    // Reference for language codes: https://cloud.google.com/translate/docs/languages or the translation api specific codes
    supportedLanguages: [
        { code: 'en', name: 'English' },
        { code: 'kn', name: 'ಕನ್ನಡ' },
        { code: 'hi', name: 'हिन्दी' },
        { code: 'ml', name: 'മലയാളം' },
        { code: 'te', name: 'తెలుగు' },
        { code: 'ta', name: 'தமிழ்' },
    ],
    defaultLanguage: 'en',
    defaultNoCache: false,
};

function DemoContent() {
    const { translatedText } = useTranslation('This is translated via hook');

    return (
        <div className="p-8 max-w-2xl mx-auto space-y-8">
            <header className="flex justify-between items-center border-b pb-4">
                <h1 className="text-2xl font-bold text-gray-800">
                    <TextTranslator text="Translation Library Demo" />
                </h1>
                <LanguageSwitcher variant="text" />
            </header>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-700">
                    <TextTranslator text="Basic Translation" />
                </h2>
                <p className="text-gray-600">
                    <TextTranslator text="This text is automatically translated when you switch languages." />
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-700">
                    <TextTranslator text="Overflow Handling" />
                </h2>

                <div className="border p-4 rounded-lg bg-gray-50">
                    <h3 className="font-medium mb-2">Truncate:</h3>
                    <div className="w-48 bg-white border-2 border-green-500 p-2 overflow-hidden">
                        <TextTranslator
                            text="This is a very long text that should be truncated because the container is small."
                            truncate={true}
                        />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Container: 192px (w-48). Text shows ellipsis (...) when too long.</p>
                </div>

                <div className="border p-4 rounded-lg bg-gray-50">
                    <h3 className="font-medium mb-2">Marquee (Hover to pause):</h3>

                    {/* Fast speed */}
                    <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-1">Fast (5s):</p>
                        <div className="w-64 min-h-8 bg-white border-2 border-blue-500 p-2 overflow-hidden flex items-center">
                            <TextTranslator
                                text="This is a very long scrolling text that moves like a marquee when it overflows the container. It needs to be long enough to definitely overflow the container width to trigger the animation."
                                enableMarquee={true}
                                marqueeSpeed={5}
                            />
                        </div>
                    </div>

                    {/* Normal speed */}
                    <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-1">Normal (10s - default):</p>
                        <div className="w-64 min-h-8 bg-white border-2 border-blue-500 p-2 overflow-hidden flex items-center">
                            <TextTranslator
                                text="This is a very long scrolling text that moves like a marquee when it overflows the container. It needs to be long enough to definitely overflow the container width to trigger the animation."
                                enableMarquee={true}
                            />
                        </div>
                    </div>

                    {/* Slow speed */}
                    <div>
                        <p className="text-sm text-gray-600 mb-1">Slow (20s):</p>
                        <div className="w-64 min-h-8 bg-white border-2 border-blue-500 p-2 overflow-hidden flex items-center">
                            <TextTranslator
                                text="This is a very long scrolling text that moves like a marquee when it overflows the container. It needs to be long enough to definitely overflow the container width to trigger the animation."
                                enableMarquee={true}
                                marqueeSpeed={20}
                            />
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 mt-2">Container: 256px wide (w-64). Control speed with marqueeSpeed prop (in seconds).</p>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-700">
                    <TextTranslator text="Hook Usage" />
                </h2>
                <input
                    type="text"
                    placeholder={translatedText}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <p className="text-sm text-gray-500">
                    <TextTranslator text="The placeholder above is translated using the useTranslation hook." />
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-700">
                    <TextTranslator text="Caching Control" />
                </h2>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p>
                        <TextTranslator text="This text skips cache:" noCache={true} />
                        <span className="font-mono ml-2 text-sm bg-white px-2 py-1 rounded">noCache={'{true}'}</span>
                    </p>
                </div>
            </section>

            <div className="fixed bottom-8 right-8">
                <LanguageSwitcher variant="icon" />
            </div>
        </div>
    );
}

function App() {
    return (
        <TranslationProvider config={config}>
            <DemoContent />
        </TranslationProvider>
    );
}

export default App;
