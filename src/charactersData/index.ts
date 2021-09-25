import {ICharacter} from './types';
import {Vision} from '../const/consts';
import {Gem, Materials, MORA, Rocks} from './materialNames';

const Bennett = {
  name: 'Bennett',
  vision: Vision.PYRO,
  ascension_materials: {},
  rarity: 4
}

const Jean = {
  name: 'Jean',
  vision: Vision.ANEMO,
  ascension_materials: {},
  rarity: 5
}

const Klee = {
  name: 'Klee',
  vision: Vision.PYRO,
  ascension_materials: {},
  rarity: 5
}

const Raiden = {
  name: 'Raiden',
  vision: Vision.ELECTRO,
  ascension_materials: {},
  rarity: 5
}

const Xiangling = {
  name: 'Xiangling',
  vision: Vision.PYRO,
  ascension_materials: {},
  rarity: 4
}

const Xingqiu = {
  name: 'Xingqiu',
  vision: Vision.HYDRO,
  ascension_materials: {},
  rarity: 4
}

const Zhongli = {
  name: 'Zhongli',
  vision: Vision.GEO,
  ascension_materials: {},
  rarity: 5
}

const Beidou = {
  name: 'Beidou',
  vision: Vision.ELECTRO,
  ascension_materials: {
    20: [
      { material: Gem.ELECTRO.vajrada_topaz_sliver, count: 1 },
      { material: Materials.silver_raven_insignia, count: 3 },
      { material: Rocks.noctilucous_jade, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: {

    },
    50: {},
    60: {},
    70: {},
    80: {},
  },
  rarity: 4
}

const Chongyun = {
  name: 'Chongyun',
  vision: Vision.CRYO,
  ascension_materials: {},
  rarity: 4
}

const Xiao = {
  name: 'Xiao',
  vision: Vision.ANEMO,
  ascension_materials: {},
  rarity: 5
}

const Amber = {
  name: 'Amber',
  vision: Vision.PYRO,
  ascension_materials: {},
  rarity: 4
}

const Barbara = {
  name: 'Barbara',
  vision: Vision.HYDRO,
  ascension_materials: {},
  rarity: 4
}

const Diluc = {
  name: 'Diluc',
  vision: Vision.PYRO,
  ascension_materials: {},
  rarity: 5
}

const Diona = {
  name: 'Diona',
  vision: Vision.CRYO,
  ascension_materials: {},
  rarity: 4
}

const Fischl = {
  name: 'Fischl',
  vision: Vision.ELECTRO,
  ascension_materials: {},
  rarity: 4
}

const Keqing = {
  name: 'Keqing',
  vision: Vision.ELECTRO,
  ascension_materials: {},
  rarity: 5
}

const Lisa = {
  name: 'Lisa',
  vision: Vision.ELECTRO,
  ascension_materials: {},
  rarity: 4
}

const Mona = {
  name: 'Mona',
  vision: Vision.HYDRO,
  ascension_materials: {},
  rarity: 5
}

const Ningguang = {
  name: 'Ningguang',
  vision: Vision.GEO,
  ascension_materials: {},
  rarity: 4
}

const Noelle = {
  name: 'Noelle',
  vision: Vision.GEO,
  ascension_materials: {},
  rarity: 4
}

const CHARACTERS: ICharacter[] = [
  Amber,
  Barbara,
  Bennett,
  Beidou,
  Chongyun,
  Diluc,
  Diona,
  Fischl,
  Jean,
  Klee,
  Keqing,
  Mona,
  Lisa,
  Noelle,
  Ningguang,
  Raiden,
  Xiangling,
  Xingqiu,
  Zhongli,
  Xiao
]

export default CHARACTERS
