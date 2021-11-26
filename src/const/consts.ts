export const interactiveMapBaseUrl = 'https://webstatic-sea.mihoyo.com/app/ys-map-sea/?lang={{ language }}#/map/2?shown_types='

export const Languages = {
  EN: 'en',
  RU: 'ru'
}

export const NS = [
  'header',
  'character',
  'footer',
  'language',
  'materials',
  'material',
  'common',
  'menu'
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
  CHARACTER = '/:name',
  NEWS = '/news'
}

export const lookupLocalStorage = 'i18nextLng'

export enum InteractiveMapLanguage {
  en = 'en-us',
  ru = 'ru-ru'
}

export enum WeekDay {
  ALL_DAYS = 'all_days',
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
}

export enum Event {
  CLICK = 'click',
  TOUCHSTART = 'touchstart',
  KEYPRESS = 'keypress',
  MOUSEUP = 'mouseup'
}

export enum GenshinImpactTwitter {
  ru = 'RUGenshinimpact',
  en = 'GenshinImpact'
}
