export interface LanguageSwitcherProps {
    variant?: 'icon' | 'text';
    onLanguageChange?: (lang: string) => void;
}
export declare const LanguageSwitcher: ({ variant, onLanguageChange, }: LanguageSwitcherProps) => import("react/jsx-runtime").JSX.Element | null;
