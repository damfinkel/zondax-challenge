import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'translation',
    resources: {
      en: {
        translation: {
          syncDescription: 'These {{origin}} contacts will sync to {{target}}',
          syncContacts: 'Sync Contacts'
        }
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
