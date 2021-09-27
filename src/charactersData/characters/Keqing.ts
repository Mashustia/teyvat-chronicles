import {Vision} from '../../const/consts';
import {BossMaterials, Rocks, Gem, Materials, MORA} from '../materialNames';

const Keqing = {
  name: 'Keqing',
  vision: Vision.ELECTRO,
  ascension_materials: {
    20: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_SLIVER, count: 1 },
      { material: Rocks.COR_LAPIS, count: 3 },
      { material: Materials.WHOPPERFLOWER_NECTAR, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 2 },
      { material: Rocks.COR_LAPIS, count: 10 },
      { material: Materials.WHOPPERFLOWER_NECTAR, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 4 },
      { material: Rocks.COR_LAPIS, count: 20 },
      { material: Materials.SHIMMERING_NECTAR, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 8 },
      { material: Rocks.COR_LAPIS, count: 30 },
      { material: Materials.SHIMMERING_NECTAR, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 12 },
      { material: Rocks.COR_LAPIS, count: 45 },
      { material: Materials.ENERGY_NECTAR, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 20 },
      { material: Rocks.COR_LAPIS, count: 60 },
      { material: Materials.ENERGY_NECTAR, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5
}

export default Keqing
