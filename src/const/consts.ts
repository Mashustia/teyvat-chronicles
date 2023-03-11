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
  GEO = 'geo',
  DENDRO = 'dendro',
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
  AMBER = 'amber',
  BARBARA = 'barbara',
  BENNETT = 'bennett',
  BEIDOU = 'beidou',
  CHONGYUN = 'chongyun',
  DILUC = 'diluc',
  DIONA = 'diona',
  FISCHL = 'fischl',
  JEAN = 'jean',
  KLEE = 'klee',
  KEQING = 'keqing',
  MONA = 'mona',
  LISA = 'lisa',
  NOELLE = 'noelle',
  NINGGUANG = 'ningguang',
  RAIDEN = 'raiden',
  XIANGLING = 'xiangling',
  XINGQIU = 'xingqiu',
  ZHONGLI = 'zhongli',
  XIAO = 'xiao',
  RAZOR = 'razor',
  ROSARIA = 'rosaria',
  ALBEDO = 'albedo',
  ALOY = 'aloy',
  EULA = 'eula',
  GANYU = 'ganyu',
  HU_TAO = 'hutao',
  KAEDEHARA_KAZUHA = 'kaedehara_kazuha',
  KAEYA = 'kaeya',
  KAMISATO_AYAKA = 'kamisato_ayaka',
  KAMISATO_AYATO = 'kamisato_ayato',
  KUJOU_SARA = 'kujou_sara',
  QIQI = 'qiqi',
  KOKOMI = 'kokomi',
  SAYU = 'sayu',
  SUCROSE = 'sucrose',
  TARTAGLIA = 'tartaglia',
  VENTI = 'venti',
  XINYAN = 'xinyan',
  YANFEI = 'yanfei',
  YOIMIYA = 'yoimiya',
  TRAVELER_GEO = 'traveler_geo',
  TRAVELER_ANEMO = 'traveler_anemo',
  TRAVELER_ELECTRO = 'traveler_electro',
  TRAVELER_DENDRO = 'traveler_dendro',
  THOMA = 'thoma',
  GOROU = 'gorou',
  ARATAKI_ITTO = 'arataki_itto',
  YUN_JIN = 'yun_jin',
  SHENHE = 'shenhe',
  YAE_MIKO = 'yae_miko',
  YELAN = 'yelan',
  KUKI_SHINOBU = 'kuki_shinobu',
  SHIKANOIN_HEIZOU = 'shikanoin_heizou',
  TIGHNARI = 'tighnari',
  COLLEI = 'collei',
  DORI = 'dori',
  SYNO = 'syno',
  CANDACE = 'candace',
  NILOU = 'nilou',
  NAHIDA = 'nahida',
  LAYLA = 'layla',
  FARUZAN = 'faruzan',
  WANDERER = 'wanderer',
  ALHAITHAM = 'alhaitham',
  YAOYAO = 'yaoyao',
  DEHYA = 'dehya',
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
