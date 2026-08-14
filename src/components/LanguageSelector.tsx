import './css/languageSelector.css';
import { LanguageIcon } from '../assets/icons';

import { useEffect, useRef, useState } from 'react';

const LANGUAGES = [
    { code: 'EN', label: 'EN' },
    { code: 'ES', label: 'ES' },
];

export const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('ES');
    const wrapperRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            const index = LANGUAGES.findIndex((l) => l.code === selected);
            optionRefs.current[index >= 0 ? index : 0]?.focus();
        }
    }, [isOpen, selected]);

    const handleSelect = (code: string) => {
        setSelected(code);
        setIsOpen(false);
        buttonRef.current?.focus();
        // aquí conectas tu lógica real de i18n
    };

    const handleButtonKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(true);
        }
    };

    const handleOptionKeyDown = (e: React.KeyboardEvent, index: number) => {
        switch (e.key) {
            case 'ArrowDown': {
                e.preventDefault();
                const next = (index + 1) % LANGUAGES.length;
                optionRefs.current[next]?.focus();
                break;
            }
            case 'ArrowUp': {
                e.preventDefault();
                const prev = (index - 1 + LANGUAGES.length) % LANGUAGES.length;
                optionRefs.current[prev]?.focus();
                break;
            }
            case 'Home':
                e.preventDefault();
                optionRefs.current[0]?.focus();
                break;
            case 'End':
                e.preventDefault();
                optionRefs.current[LANGUAGES.length - 1]?.focus();
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                handleSelect(LANGUAGES[index].code);
                break;
            case 'Escape':
                e.preventDefault();
                setIsOpen(false);
                buttonRef.current?.focus();
                break;
        }
    };

    return (
        <div className="lang-selector-wrapper" ref={wrapperRef}>
            <button
                ref={buttonRef}
                className="lang-selector-button"
                onClick={() => setIsOpen((prev) => !prev)}
                onKeyDown={handleButtonKeyDown}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
            >
                <span className="icon-idioms">{LanguageIcon}</span>
                {selected}
                <span className={`lang-selector-arrow ${isOpen ? 'lang-selector-arrow-open' : ''}`} />
            </button>

            {isOpen && (
                <ul className="lang-selector-panel" role="listbox">
                    {LANGUAGES.map((lang, index) => (
                        <li key={lang.code}>
                            <button
                                ref={(el) => { optionRefs.current[index] = el; }}
                                className={`lang-selector-option ${selected === lang.code ? 'lang-selector-option-active' : ''}`}
                                onClick={() => handleSelect(lang.code)}
                                onKeyDown={(e) => handleOptionKeyDown(e, index)}
                                role="option"
                                aria-selected={selected === lang.code}
                            >
                                {lang.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};