import React, {
    useState,
    useRef,
    useEffect,
    useCallback,
} from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useTranslationContext } from '../contexts/TranslationContext';

export interface LanguageSwitcherProps {
    variant?: 'icon' | 'text';
    onLanguageChange?: (lang: string) => void;
}

export const LanguageSwitcher = ({
    variant = 'icon',
    onLanguageChange,
}: LanguageSwitcherProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState<'top' | 'bottom'>(
        'bottom'
    );
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<React.ElementRef<'button'>>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { currentLanguage, setLanguage, config } = useTranslationContext();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Calculate dropdown position when opening
    useEffect(() => {
        if (!isOpen || !buttonRef.current) return;

        const calculatePosition = () => {
            const buttonRect = buttonRef.current?.getBoundingClientRect();
            if (!buttonRect) return;

            const spaceBelow = window.innerHeight - buttonRect.bottom;
            const spaceAbove = buttonRect.top;
            const dropdownHeight = 250;

            if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
                setDropdownPosition('top');
            } else {
                setDropdownPosition('bottom');
            }
        };

        calculatePosition();
        window.addEventListener('scroll', calculatePosition, true);
        window.addEventListener('resize', calculatePosition);

        return () => {
            window.removeEventListener('scroll', calculatePosition, true);
            window.removeEventListener('resize', calculatePosition);
        };
    }, [isOpen]);

    // Close dropdown when clicking outside
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: Event) => {
            const target = event.target as HTMLElement | null;
            const container = containerRef.current;
            const dropdown = dropdownRef.current;

            // Check if click is outside both container and dropdown
            if (
                target &&
                container &&
                dropdown &&
                !container.contains(target) &&
                !dropdown.contains(target)
            ) {
                setIsOpen(false);
            }
        };

        // Use a small delay to ensure React's synthetic events have processed
        const timeoutId = setTimeout(() => {
            document.addEventListener('click', handleClickOutside, true);
        }, 0);

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [isOpen]);

    const currentLanguageName =
        config.supportedLanguages.find(lang => lang.code === currentLanguage)
            ?.name || 'English';

    // All hooks must be called before any early returns
    const handleToggle = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(prev => !prev);
    }, []);

    const handleLanguageChange = useCallback(
        (langCode: string) => {
            setLanguage(langCode);
            setIsOpen(false);
            if (onLanguageChange) {
                onLanguageChange(langCode);
            }
        },
        [setLanguage, onLanguageChange]
    );

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            setIsOpen(false);
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(prev => !prev);
        }
    }, []);

    // Don't render until mounted on client side
    if (!isMounted) {
        return null;
    }

    // Text dropdown variant for profile page
    if (variant === 'text') {
        return (
            <div
                ref={containerRef}
                className="relative z-[50]"
                onMouseDown={e => {
                    e.stopPropagation();
                }}
            >
                <button
                    ref={buttonRef}
                    type="button"
                    onClick={handleToggle}
                    onKeyDown={handleKeyDown}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                    aria-label="Select language"
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                >
                    <span>{currentLanguageName}</span>
                    <ChevronDown
                        size={16}
                        className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                    />
                </button>

                {/* Language Selector Dropdown */}
                {isOpen && (
                    <div
                        ref={dropdownRef}
                        role="listbox"
                        className={`absolute right-0 w-48 bg-white border border-gray-300 rounded-lg shadow-xl overflow-hidden z-[9999] ${dropdownPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
                            }`}
                        onClick={e => e.stopPropagation()}
                        onMouseDown={e => e.stopPropagation()}
                    >
                        <div className="py-1">
                            {config.supportedLanguages.map(lang => {
                                const isSelected = currentLanguage === lang.code;
                                return (
                                    <button
                                        key={lang.code}
                                        type="button"
                                        role="option"
                                        aria-selected={isSelected}
                                        onClick={() => handleLanguageChange(lang.code)}
                                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50 ${isSelected
                                                ? 'bg-blue-50 text-blue-600 font-medium'
                                                : 'text-gray-700'
                                            }`}
                                    >
                                        <span>{lang.name}</span>
                                        {isSelected && (
                                            <ChevronDown
                                                size={16}
                                                className="rotate-180 text-blue-600"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // Icon button variant (default) for floating button
    return (
        <div ref={containerRef} className="relative z-50">
            <button
                ref={buttonRef}
                type="button"
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-300 shadow-sm transition-all duration-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                style={{
                    ...(isOpen
                        ? {
                            boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                            backgroundColor: 'white',
                            color: 'rgb(55 65 81)',
                        }
                        : {}),
                }}
                onMouseEnter={e => {
                    if (!isOpen) {
                        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
                        e.currentTarget.style.backgroundColor = 'rgb(249 250 251)';
                        e.currentTarget.style.color = 'rgb(17 24 39)';
                    }
                }}
                onMouseLeave={e => {
                    if (!isOpen) {
                        e.currentTarget.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.color = 'rgb(55 65 81)';
                    }
                }}
                aria-label="Select language"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
            >
                <Globe size={18} aria-hidden="true" />
            </button>

            {/* Language Selector Dropdown */}
            {isOpen && (
                <div
                    ref={dropdownRef}
                    role="listbox"
                    className={`absolute left-0 w-48 bg-white border border-gray-300 rounded-lg shadow-xl overflow-hidden z-[9999] ${dropdownPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
                        }`}
                    onClick={e => e.stopPropagation()}
                    onMouseDown={e => e.stopPropagation()}
                >
                    <div className="py-1">
                        {config.supportedLanguages.map(lang => {
                            const isSelected = currentLanguage === lang.code;
                            return (
                                <button
                                    key={lang.code}
                                    type="button"
                                    role="option"
                                    aria-selected={isSelected}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50 ${isSelected
                                            ? 'bg-blue-50 text-blue-600 font-medium'
                                            : 'text-gray-700'
                                        }`}
                                >
                                    <span>{lang.name}</span>
                                    {isSelected && (
                                        <ChevronDown
                                            size={16}
                                            className="rotate-180 text-blue-600"
                                            aria-hidden="true"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
