// old map url
// export const interactiveMapBaseUrl = 'https://webstatic-sea.mihoyo.com/app/ys-map-sea/?lang={{ language }}#/map/2?shown_types='
import {IOption} from '../views/Character/components/Inputs/components/SkillLevelSelect/types';

export const interactiveMapBaseUrl = 'https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?bbs_presentation_style=no_header&ts=123&lang={{ language }}#/map/'

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
  GEO = 'geo'
}

export enum RouteName {
  DEFAULT = '/',
  CHARACTER = '/:name',
  NEWS = '/news',
  ALL = '/*'
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
  KEYDOWN = 'keydown',
  MOUSEUP = 'mouseup'
}

export enum GenshinImpactTwitter {
  ru = 'RUGenshinimpact',
  en = 'GenshinImpact'
}

export enum Character {
  AMBER = 'Amber',
  BARBARA = 'Barbara',
  BENNETT = 'Bennett',
  BEIDOU = 'Beidou',
  CHONGYUN = 'Chongyun',
  DILUC = 'Diluc',
  DIONA = 'Diona',
  FISCHL = 'Fischl',
  JEAN = 'Jean',
  KLEE = 'Klee',
  KEQING = 'Keqing',
  MONA = 'Mona',
  LISA = 'Lisa',
  NOELLE = 'Noelle',
  NINGGUANG = 'Ningguang',
  RAIDEN = 'Raiden',
  XIANGLING = 'Xiangling',
  XINGQIU = 'Xingqiu',
  ZHONGLI = 'Zhongli',
  XIAO = 'Xiao',
  RAZOR = 'Razor',
  ROSARIA = 'Rosaria',
  ALBEDO = 'Albedo',
  ALOY = 'Aloy',
  EULA = 'Eula',
  GANYU = 'Ganyu',
  HU_TAO = 'HuTao',
  KAEDEHARA_KAZUHA = 'Kaedehara_Kazuha',
  KAEYA = 'Kaeya',
  KAMISATO_AYAKA = 'Kamisato_Ayaka',
  KAMISATO_AYATO = 'Kamisato_Ayato',
  KUJOU_SARA = 'Kujou_Sara',
  QIQI = 'Qiqi',
  KOKOMI = 'Kokomi',
  SAYU = 'Sayu',
  SUCROSE = 'Sucrose',
  TARTAGLIA = 'Tartaglia',
  VENTI = 'Venti',
  XINYAN = 'Xinyan',
  YANFEI = 'Yanfei',
  YOIMIYA = 'Yoimiya',
  TRAVELER_GEO = 'Traveler_geo',
  TRAVELER_ANEMO = 'Traveler_anemo',
  TRAVELER_ELECTRO = 'Traveler_electro',
  THOMA = 'Thoma',
  GOROU = 'Gorou',
  ARATAKI_ITTO = 'Arataki_Itto',
  YUN_JIN = 'Yun_Jin',
  SHENHE = 'Shenhe',
  YAE_MIKO = 'Yae_Miko',
  YELAN = 'Yelan',
  KUKI_SHINOBU = 'Kuki_Shinobu',
  SHIKANOIN_HEIZOU = 'Shikanoin_Heizou',
}

export const DefaultStartingLevel = {
  lvl: 1,
  isAscended: false
}

export const DefaultFinalLevel = {
  lvl: 70,
  isAscended: true
}

export const MATERIAL = 'material'

export const SORTING_INDEX = 'sorting_index'

export const COUNT = 'count'

export enum Key {
  ESCAPE = 'Escape'
}

export const THOUSAND_SEPARATOR = ' '

export enum FontAwesomeIconSize {
  LG = 'lg'
}

export const skillLevelOption = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const SKILL_LEVEL_OPTIONS: IOption[] = skillLevelOption.map((key: number) => ({
  text: key,
  id: key
}))

export enum SkillSelectName {
  FROM = 'from',
  TO = 'to'
}
