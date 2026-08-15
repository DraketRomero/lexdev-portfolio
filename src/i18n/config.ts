// i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/common.json';
import es from './locales/es/common.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: {
        en: { common: en },
        es: { common: es },
    },
    fallbackLng: 'es',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
    },
});

export default i18n;