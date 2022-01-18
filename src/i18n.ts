import i18n from 'i18next'
import HttpApi from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import {Languages, lookupLocalStorage, NS} from './const/consts';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: [Languages.EN, Languages.RU],
    lng: window.localStorage.getItem(lookupLocalStorage) || Languages.EN,
    ns: NS,
    preload: [Languages.EN, Languages.RU],

    react: {
      nsMode: 'default',
      useSuspense: true
    },

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
