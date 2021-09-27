import {Vision} from '../../const/consts';
import {BossMaterials, Gem, Materials, MORA, Flower} from '../materialNames';

const Ayaka = {
  name: 'Ayaka',
  vision: Vision.CRYO,
  ascension_materials: {
    20: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_SLIVER, count: 1 },
      { material: Flower.CALLA_LILY, count: 3 },
      { material: Materials.FIRM_ARROWHEAD, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.HOARFROST_CORE, count: 2 },
      { material: Flower.CALLA_LILY, count: 10 },
      { material: Materials.FIRM_ARROWHEAD, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.HOARFROST_CORE, count: 4 },
      { material: Flower.CALLA_LILY, count: 20 },
      { material: Materials.SHARP_ARROWHEAD, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.HOARFROST_CORE, count: 8 },
      { material: Flower.CALLA_LILY, count: 30 },
      { material: Materials.SHARP_ARROWHEAD, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.HOARFROST_CORE, count: 12 },
      { material: Flower.CALLA_LILY, count: 45 },
      { material: Materials.WEATHERED_ARROWHEAD, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.HOARFROST_CORE, count: 20 },
      { material: Flower.CALLA_LILY, count: 60 },
      { material: Materials.WEATHERED_ARROWHEAD, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5
}

export default Ayaka
