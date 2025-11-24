import { useState, useEffect } from 'react';
import { useTranslationContext } from '../contexts/TranslationContext';
import { translateText } from '../services/translationService';

interface UseTranslationOptions {
    noCache?: boolean;
}

export const useTranslation = (
    text: string,
    options: UseTranslationOptions = {}
) => {
    const { currentLanguage, config } = useTranslationContext();
    const [translatedText, setTranslatedText] = useState<string>(text);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        let isMounted = true;

        const fetchTranslation = async () => {
            if (!text || currentLanguage === 'en') {
                setTranslatedText(text);
                return;
            }

            const shouldCache = !(options.noCache ?? config.defaultNoCache ?? false);
            const cacheKey = `translation_${currentLanguage}_${text}`;

            if (shouldCache) {
                const cachedTranslation = localStorage.getItem(cacheKey);
                if (cachedTranslation) {
                    setTranslatedText(cachedTranslation);
                    return;
                }
            }

            setIsLoading(true);
            try {
                let result: string;
                if (config.translateFn) {
                    result = await config.translateFn(
                        text,
                        currentLanguage,
                        config.apiUrl,
                        config.apiKey
                    );
                } else {
                    result = await translateText(
                        text,
                        currentLanguage,
                        config.apiUrl,
                        config.apiKey
                    );
                }

                if (isMounted) {
                    setTranslatedText(result);
                    if (shouldCache) {
                        localStorage.setItem(cacheKey, result);
                    }
                }
            } catch (error) {
                console.error('Translation error:', error);
                if (isMounted) {
                    setTranslatedText(text);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchTranslation();

        return () => {
            isMounted = false;
        };
    }, [
        text,
        currentLanguage,
        config.apiUrl,
        config.apiKey,
        config.translateFn,
        config.defaultNoCache,
        options.noCache,
    ]);

    return { translatedText, isLoading };
};
