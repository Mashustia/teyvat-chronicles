import {Vision} from '../../const/consts';
import {BossMaterials, Flower, Gem, Materials, MORA} from '../materialNames';

const Barbara = {
  name: 'Barbara',
  vision: Vision.HYDRO,
  ascension_materials: {
    20: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_SLIVER, count: 1 },
      { material: Flower.PHILANEMO_MUSHROOM, count: 3 },
      { material: Materials.DIVINING_SCROLL, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.CLEANSING_HEART, count: 2 },
      { material: Flower.PHILANEMO_MUSHROOM, count: 10 },
      { material: Materials.DIVINING_SCROLL, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.CLEANSING_HEART, count: 4 },
      { material: Flower.PHILANEMO_MUSHROOM, count: 20 },
      { material: Materials.SEALED_SCROLL, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.CLEANSING_HEART, count: 8 },
      { material: Flower.PHILANEMO_MUSHROOM, count: 30 },
      { material: Materials.SEALED_SCROLL, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.CLEANSING_HEART, count: 12 },
      { material: Flower.PHILANEMO_MUSHROOM, count: 45 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.CLEANSING_HEART, count: 20 },
      { material: Flower.PHILANEMO_MUSHROOM, count: 60 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 4
}

export default Barbara