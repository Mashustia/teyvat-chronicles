import i18n from 'i18next'
import HttpApi from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import {Languages, NS} from './const/consts';
import HEADER from './locales/ru/header.json';
import CHARACTER from './locales/ru/character.json';

const Translations = {
  ru: {
    header: HEADER,
    character: CHARACTER
  }
};

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: [Languages.RU],
    lng: Languages.RU,
    ns: NS,
    preload: [Languages.RU],
    resources: Translations,

    react: {
      nsMode: 'default'
    },

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
