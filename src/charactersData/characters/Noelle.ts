import {Vision} from '../../const/consts';
import {BossMaterials, Flower, Gem, Materials, MORA} from '../materialNames';

const Noelle = {
  name: 'Noelle',
  vision: Vision.GEO,
  ascension_materials: {
    20: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_SLIVER, count: 1 },
      { material: Flower.VALBERRY, count: 3 },
      { material: Materials.DAMAGED_MASK, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.BASALT_PILLAR, count: 2 },
      { material: Flower.VALBERRY, count: 10 },
      { material: Materials.DAMAGED_MASK, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.BASALT_PILLAR, count: 4 },
      { material: Flower.VALBERRY, count: 20 },
      { material: Materials.STAINED_MASK, count: 12 },
      { material: MORA, count: 20000 },
    ],
    60: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.BASALT_PILLAR, count: 8 },
      { material: Flower.VALBERRY, count: 30 },
      { material: Materials.STAINED_MASK, count: 18 },
      { material: MORA, count: 20000 },
    ],
    70: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.BASALT_PILLAR, count: 12 },
      { material: Flower.VALBERRY, count: 45 },
      { material: Materials.OMINOUS_MASK, count: 12 },
      { material: MORA, count: 20000 },
    ],
    80: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.BASALT_PILLAR, count: 20 },
      { material: Flower.VALBERRY, count: 60 },
      { material: Materials.OMINOUS_MASK, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 4
}

export default Noelle
