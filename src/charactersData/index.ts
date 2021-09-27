import {ICharacter} from './types';
import {Vision} from '../const/consts';
import {BossMaterials, Flower, Gem, Materials, MORA, Rocks} from './materialNames';

const Bennett = {
  name: 'Bennett',
  vision: Vision.PYRO,
  ascension_materials: {
    20: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_SLIVER, count: 1 },
      { material: Flower.WINDWHEEL_ASTER, count: 3 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.EVERFLAME_SEED, count: 2 },
      { material: Flower.WINDWHEEL_ASTER, count: 10 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.EVERFLAME_SEED, count: 4 },
      { material: Flower.WINDWHEEL_ASTER, count: 20 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 20000 },
    ],
    60: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.EVERFLAME_SEED, count: 8 },
      { material: Flower.WINDWHEEL_ASTER, count: 30 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 18 },
      { material: MORA, count: 20000 },
    ],
    70: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.EVERFLAME_SEED, count: 12 },
      { material: Flower.WINDWHEEL_ASTER, count: 45 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 20000 },
    ],
    80: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.EVERFLAME_SEED, count: 20 },
      { material: Flower.WINDWHEEL_ASTER, count: 60 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 24 },
      { material: MORA, count: 120000 },
    ],
  },
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
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_SLIVER, count: 1 },
      { material: Rocks.NOCTILUCOUS_JADE, count: 3 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 2 },
      { material: Rocks.NOCTILUCOUS_JADE, count: 10 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 4 },
      { material: Rocks.NOCTILUCOUS_JADE, count: 20 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 20000 },
    ],
    60: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 8 },
      { material: Rocks.NOCTILUCOUS_JADE, count: 30 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 18 },
      { material: MORA, count: 20000 },
    ],
    70: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 12 },
      { material: Rocks.NOCTILUCOUS_JADE, count: 45 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 20000 },
    ],
    80: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 20 },
      { material: Rocks.NOCTILUCOUS_JADE, count: 60 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 24 },
      { material: MORA, count: 120000 },
    ],
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
