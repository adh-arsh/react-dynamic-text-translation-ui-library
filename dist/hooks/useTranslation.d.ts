interface UseTranslationOptions {
    noCache?: boolean;
}
export declare const useTranslation: (text: string, options?: UseTranslationOptions) => {
    translatedText: string;
    isLoading: boolean;
};
export {};
