import { useTranslation } from 'react-i18next';
import './css/languageSelectorSwitch.css';

const LANGUAGES = ['ES', 'EN'];

export const LanguageSelectorSwitch = () => {
    const { i18n } = useTranslation();
    const selected = i18n.language.toUpperCase();

    const handleSelect = (code: string) => {
        i18n.changeLanguage(code.toLowerCase());
    };

    return (
        <div className='lang-switch'>
            <div className={`lang-switch-slider ${selected === 'EN' ? 'lang-switch-slider-en' : ''}`} />
            {LANGUAGES.map((lang) => (
                <button
                    key={lang}
                    className={`lang-switch-option ${selected === lang ? 'lang-switch-option-active' : ''}`}
                    onClick={() => handleSelect(lang)}
                    aria-pressed={selected === lang}
                >
                    {lang}
                </button>
            ))}
        </div>
    );
};