export const interactiveMapBaseUrl = 'https://webstatic-sea.mihoyo.com/app/ys-map-sea/?lang={{ language }}#/map/2?shown_types='

export const Languages = {
  EN: 'en',
  RU: 'ru'
}

export const NS = [
  'header',
  'character',
  'footer',
  'language'
]

export enum Vision {
  ANEMO = 'anemo',
  PYRO = 'pyro',
  ELECTRO = 'electro',
  CRYO = 'cryo',
  HYDRO = 'hydro',
  GEO = 'geo',
  NONE = 'none'
}

export enum RouteName {
  DEFAULT = '/',
  CHARACTER = '/:name'
}

export const lookupLocalStorage = 'i18nextLng'

export enum InteractiveMapLanguage {
  en = 'en-us',
  ru = 'ru-ru'
}
