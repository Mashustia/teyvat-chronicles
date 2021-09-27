import {Vision} from '../../const/consts';
import {BossMaterials, Flower, Gem, Materials, MORA} from '../materialNames';

const Albedo = {
  name: 'Albedo',
  vision: Vision.GEO,
  ascension_materials: {
    20: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_SLIVER, count: 1 },
      { material: Flower.CECILIA, count: 3 },
      { material: Materials.DIVINING_SCROLL, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.BASALT_PILLAR, count: 2 },
      { material: Flower.CECILIA, count: 10 },
      { material: Materials.DIVINING_SCROLL, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.BASALT_PILLAR, count: 4 },
      { material: Flower.CECILIA, count: 20 },
      { material: Materials.SEALED_SCROLL, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.BASALT_PILLAR, count: 8 },
      { material: Flower.CECILIA, count: 30 },
      { material: Materials.SEALED_SCROLL, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.BASALT_PILLAR, count: 12 },
      { material: Flower.CECILIA, count: 45 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.BASALT_PILLAR, count: 20 },
      { material: Flower.CECILIA, count: 60 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5
}

export default Albedo
