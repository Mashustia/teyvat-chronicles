import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {Languages, NS} from './const/consts';

i18n
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: [Languages.EN, Languages.RU],
    lng: Languages.EN,
    ns: NS,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
