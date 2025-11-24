import { default as React } from 'react';

export interface TextTranslatorProps {
    text: string;
    className?: string;
    as?: React.ElementType;
    enableScroll?: boolean;
    enableTooltip?: boolean;
    truncate?: boolean;
    enableMarquee?: boolean;
    marqueeSpeed?: number;
    noCache?: boolean;
}
export declare const TextTranslator: React.FC<TextTranslatorProps>;
