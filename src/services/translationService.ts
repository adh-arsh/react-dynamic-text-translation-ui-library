import axios from 'axios';

export const translateText = async (
    text: string,
    targetLanguage: string,
    apiUrl: string,
    apiKey?: string
): Promise<string> => {
    try {
        const response = await axios.post(`${apiUrl}/translation`, {
            text,
            targetLanguage,
            apiKey, // Pass apiKey if provided
        });
        return response.data.translatedText;
    } catch (error) {
        console.error('Translation service error:', error);
        return text; // Fallback to original text on error
    }
};
