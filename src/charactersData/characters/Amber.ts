import {Vision} from '../../const/consts';
import {BossMaterials, Flower, Gem, Materials, MORA} from '../materialNames';

const Amber = {
  name: 'Amber',
  vision: Vision.PYRO,
  ascension_materials: {
    20: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_SLIVER, count: 1 },
      { material: Flower.SMALL_LAMP_GRASS, count: 3 },
      { material: Materials.FIRM_ARROWHEAD, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.EVERFLAME_SEED, count: 2 },
      { material: Flower.SMALL_LAMP_GRASS, count: 10 },
      { material: Materials.FIRM_ARROWHEAD, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.EVERFLAME_SEED, count: 4 },
      { material: Flower.SMALL_LAMP_GRASS, count: 20 },
      { material: Materials.SHARP_ARROWHEAD, count: 12 },
      { material: MORA, count: 20000 },
    ],
    60: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.EVERFLAME_SEED, count: 8 },
      { material: Flower.SMALL_LAMP_GRASS, count: 30 },
      { material: Materials.SHARP_ARROWHEAD, count: 18 },
      { material: MORA, count: 20000 },
    ],
    70: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.EVERFLAME_SEED, count: 12 },
      { material: Flower.SMALL_LAMP_GRASS, count: 45 },
      { material: Materials.WEATHERED_ARROWHEAD, count: 12 },
      { material: MORA, count: 20000 },
    ],
    80: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.EVERFLAME_SEED, count: 20 },
      { material: Flower.SMALL_LAMP_GRASS, count: 60 },
      { material: Materials.WEATHERED_ARROWHEAD, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 4
}

export default Amber
