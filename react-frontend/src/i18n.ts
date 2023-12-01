import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en.json';
import translationFi from './locales/fi.json';
import translationSv from './locales/sv.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: translationEn,
      },
      fi: {
        translation: translationFi,
      },
      sv: {
        translation: translationSv,
      },
    },
  });
export default i18n;
