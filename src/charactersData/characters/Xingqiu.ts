import {Vision} from '../../const/consts';
import {BossMaterials, Flower, Gem, Materials, MORA} from '../materialNames';

const Xingqiu = {
  name: 'Xingqiu',
  vision: Vision.HYDRO,
  ascension_materials: {
    20: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_SLIVER, count: 1 },
      { material: Flower.SILK_FLOWER, count: 3 },
      { material: Materials.DAMAGED_MASK, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.CLEANSING_HEART, count: 2 },
      { material: Flower.SILK_FLOWER, count: 10 },
      { material: Materials.DAMAGED_MASK, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.CLEANSING_HEART, count: 4 },
      { material: Flower.SILK_FLOWER, count: 20 },
      { material: Materials.STAINED_MASK, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.CLEANSING_HEART, count: 8 },
      { material: Flower.SILK_FLOWER, count: 30 },
      { material: Materials.STAINED_MASK, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.CLEANSING_HEART, count: 12 },
      { material: Flower.SILK_FLOWER, count: 45 },
      { material: Materials.OMINOUS_MASK, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.CLEANSING_HEART, count: 20 },
      { material: Flower.SILK_FLOWER, count: 60 },
      { material: Materials.OMINOUS_MASK, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 4
}

export default Xingqiu
