import { ReactNode } from 'react';

export type Language = string;
export interface TranslationConfig {
    apiUrl: string;
    supportedLanguages: {
        code: string;
        name: string;
    }[];
    defaultLanguage?: string;
    defaultNoCache?: boolean;
    storageKey?: string;
    apiKey?: string;
    translateFn?: (text: string, targetLanguage: string, apiUrl: string, apiKey?: string) => Promise<string>;
}
interface TranslationContextType {
    currentLanguage: string;
    setLanguage: (lang: string) => void;
    config: TranslationConfig;
}
export declare const TranslationContext: import('react').Context<TranslationContextType | undefined>;
interface TranslationProviderProps {
    children: ReactNode;
    config: TranslationConfig;
}
export declare const TranslationProvider: ({ children, config, }: TranslationProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useTranslationContext: () => TranslationContextType;
export {};
