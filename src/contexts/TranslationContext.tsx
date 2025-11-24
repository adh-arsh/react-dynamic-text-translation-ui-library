import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react';

export type Language = string;

export interface TranslationConfig {
    apiUrl: string;
    supportedLanguages: { code: string; name: string }[];
    defaultLanguage?: string;
    defaultNoCache?: boolean;
    storageKey?: string;
    apiKey?: string;
    translateFn?: (
        text: string,
        targetLanguage: string,
        apiUrl: string,
        apiKey?: string
    ) => Promise<string>;
}

interface TranslationContextType {
    currentLanguage: string;
    setLanguage: (lang: string) => void;
    config: TranslationConfig;
}

export const TranslationContext = createContext<
    TranslationContextType | undefined
>(undefined);

interface TranslationProviderProps {
    children: ReactNode;
    config: TranslationConfig;
}

export const TranslationProvider = ({
    children,
    config,
}: TranslationProviderProps) => {
    const [currentLanguage, setCurrentLanguage] = useState<string>(
        config.defaultLanguage || 'en'
    );

    const storageKey = config.storageKey || 'app_language';

    useEffect(() => {
        // Only access localStorage on the client side
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem(storageKey);
            if (savedLang) {
                setCurrentLanguage(savedLang);
            }
        }
    }, [storageKey]);

    const setLanguage = (lang: string) => {
        setCurrentLanguage(lang);
        if (typeof window !== 'undefined') {
            localStorage.setItem(storageKey, lang);
        }
    };

    return (
        <TranslationContext.Provider
            value={{ currentLanguage, setLanguage, config }}
        >
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslationContext = () => {
    const context = useContext(TranslationContext);
    if (context === undefined) {
        throw new Error(
            'useTranslationContext must be used within a TranslationProvider'
        );
    }
    return context;
};
