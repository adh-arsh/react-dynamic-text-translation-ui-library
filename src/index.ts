export {
    TranslationProvider,
    useTranslationContext,
    TranslationContext,
} from './contexts/TranslationContext';
export type { TranslationConfig, Language } from './contexts/TranslationContext';

export { useTranslation } from './hooks/useTranslation';

export { TextTranslator } from './components/TextTranslator';
export type { TextTranslatorProps } from './components/TextTranslator';

export { LanguageSwitcher } from './components/LanguageSwitcher';
export type { LanguageSwitcherProps } from './components/LanguageSwitcher';

export { translateText } from './services/translationService';
