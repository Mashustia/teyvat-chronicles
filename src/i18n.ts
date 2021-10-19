import i18n from 'i18next'
import HttpApi from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import {Languages, lookupLocalStorage, NS} from './const/consts';

import HEADER_RU from './locales/ru/header.json';
import CHARACTER_RU from './locales/ru/character.json';
import FOOTER_RU from './locales/ru/footer.json';
import LANGUAGE_RU from './locales/ru/language.json';
import MATERIALS_RU from './locales/ru/materials.json';
import MATERIAL_RU from './locales/ru/material.json';
import COMMON_RU from './locales/ru/common.json';

import HEADER_EN from './locales/en/header.json';
import CHARACTER_EN from './locales/en/character.json';
import FOOTER_EN from './locales/en/footer.json';
import LANGUAGE_EN from './locales/en/language.json';
import MATERIALS_EN from './locales/en/materials.json';
import MATERIAL_EN from './locales/en/material.json';
import COMMON_EN from './locales/en/common.json';

const Translations = {
  ru: {
    header: HEADER_RU,
    character: CHARACTER_RU,
    footer: FOOTER_RU,
    language: LANGUAGE_RU,
    materials: MATERIALS_RU,
    material: MATERIAL_RU,
    common: COMMON_RU
  },
  en: {
    header: HEADER_EN,
    character: CHARACTER_EN,
    footer: FOOTER_EN,
    language: LANGUAGE_EN,
    materials: MATERIALS_EN,
    material: MATERIAL_EN,
    common: COMMON_EN
  }
};

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: [Languages.EN, Languages.RU],
    lng: window.localStorage.getItem(lookupLocalStorage) || Languages.EN,
    ns: NS,
    preload: [Languages.EN, Languages.RU],
    resources: Translations,

    react: {
      nsMode: 'default',
      useSuspense: true
    },

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
