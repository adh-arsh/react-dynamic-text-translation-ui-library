import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

export interface TextTranslatorProps {
    text: string;
    className?: string;
    as?: React.ElementType;
    enableScroll?: boolean; // Enable horizontal scroll for overflow
    enableTooltip?: boolean; // Show tooltip on hover if text is truncated
    truncate?: boolean; // Use ellipsis for truncation
    enableMarquee?: boolean; // Enable continuous auto-scrolling for overflow
    marqueeSpeed?: number; // Animation duration in seconds (default: 10)
    noCache?: boolean; // Disable caching for this specific translation
}

export const TextTranslator: React.FC<TextTranslatorProps> = ({
    text,
    className = '',
    as: Component = 'span',
    enableScroll = false,
    enableTooltip = true,
    truncate = false,
    enableMarquee = false,
    marqueeSpeed = 10,
    noCache,
}) => {
    const { translatedText } = useTranslation(text, { noCache });
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const textRef = useRef<HTMLElement>(null);

    // Check if text is overflowing
    useEffect(() => {
        const checkOverflow = () => {
            if (textRef.current) {
                const isOverflow =
                    textRef.current.scrollWidth > textRef.current.clientWidth;
                setIsOverflowing(isOverflow);
            }
        };

        checkOverflow();
        // Recheck when text changes
        const timeoutId = setTimeout(checkOverflow, 100);

        return () => clearTimeout(timeoutId);
    }, [translatedText]);

    // Marquee rendering
    if (enableMarquee && isOverflowing) {
        return (
            <div
                className={`relative overflow-hidden whitespace-nowrap ${className}`}
                style={{ whiteSpace: 'nowrap' }}
                onMouseEnter={() => enableTooltip && setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <div
                    className="inline-flex items-center"
                    style={{
                        animation: `marquee ${marqueeSpeed}s linear infinite`,
                        animationPlayState: showTooltip ? 'paused' : 'running'
                    }}
                >
                    <span className="mr-8 whitespace-nowrap">{translatedText}</span>
                    <span className="mr-8 whitespace-nowrap">{translatedText}</span>
                </div>

                {/* Tooltip for Marquee */}
                {enableTooltip && showTooltip && (
                    <div
                        className="fixed px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg max-w-xs break-words whitespace-normal pointer-events-none"
                        style={{
                            zIndex: 9999,
                            transform: 'translateY(-100%)',
                            marginTop: '-8px'
                        }}
                    >
                        {translatedText}
                    </div>
                )}
            </div>
        );
    }

    // Build CSS classes for overflow handling
    const overflowClasses = truncate
        ? 'overflow-hidden text-ellipsis whitespace-nowrap'
        : enableMarquee
            ? 'whitespace-nowrap'
            : enableScroll
                ? 'overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400'
                : '';

    const combinedClassName = `${className} ${overflowClasses}`.trim();

    // Determine wrapper element and display based on className - use span for inline, div for block
    const isBlockWrapper = className.includes('block') || truncate || enableMarquee;
    const Wrapper = isBlockWrapper ? 'div' : 'span';
    const wrapperClasses = isBlockWrapper
        ? 'relative block w-full'
        : 'relative inline-block max-w-full align-middle';

    return (
        <Wrapper className={wrapperClasses} style={(enableMarquee || truncate) ? { whiteSpace: 'nowrap', overflow: 'hidden' } : undefined}>
            <Component
                ref={textRef as React.Ref<HTMLElement>}
                className={combinedClassName}
                style={(enableMarquee || truncate) ? {
                    whiteSpace: 'nowrap',
                    display: 'block',
                    lineHeight: '1.5',
                    ...(truncate ? { textOverflow: 'ellipsis', overflow: 'hidden' } : {})
                } : undefined}
                onMouseEnter={() =>
                    enableTooltip && isOverflowing && setShowTooltip(true)
                }
                onMouseLeave={() => setShowTooltip(false)}
                title={enableTooltip && isOverflowing ? translatedText : undefined}
            >
                {translatedText}
            </Component>

            {/* Custom Tooltip */}
            {enableTooltip && showTooltip && isOverflowing && (
                <div
                    className="fixed px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg max-w-xs break-words whitespace-normal pointer-events-none"
                    style={{
                        zIndex: 9999,
                        transform: 'translateY(-100%)',
                        marginTop: '-8px'
                    }}
                >
                    {translatedText}
                </div>
            )}
        </Wrapper>
    );
};
