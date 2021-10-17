import {Vision} from '../../const/consts';
import {BossMaterials, Rocks, Gem, Materials, MORA, Books, BossSkillMaterial, CROWN_OF_INSIGHT} from '../materialNames';

const Keqing = {
  name: 'Keqing',
  vision: Vision.ELECTRO,
  ascension_materials: {
    20: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_SLIVER, count: 1 },
      { material: Rocks.COR_LAPIS, count: 3 },
      { material: Materials.WHOPPERFLOWER_NECTAR, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT, count: 3 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 2 },
      { material: Rocks.COR_LAPIS, count: 10 },
      { material: Materials.WHOPPERFLOWER_NECTAR, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT, count: 6 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 4 },
      { material: Rocks.COR_LAPIS, count: 20 },
      { material: Materials.SHIMMERING_NECTAR, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK, count: 3 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 8 },
      { material: Rocks.COR_LAPIS, count: 30 },
      { material: Materials.SHIMMERING_NECTAR, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK, count: 6 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 12 },
      { material: Rocks.COR_LAPIS, count: 45 },
      { material: Materials.ENERGY_NECTAR, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_GEMSTONE, count: 6 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 20 },
      { material: Rocks.COR_LAPIS, count: 60 },
      { material: Materials.ENERGY_NECTAR, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_PROSPERITY, count: 3},
      {material: Materials.WHOPPERFLOWER_NECTAR, count: 6},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_PROSPERITY, count: 2},
      {material: Materials.SHIMMERING_NECTAR, count: 3},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_PROSPERITY, count: 4},
      {material: Materials.SHIMMERING_NECTAR, count: 4},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_PROSPERITY, count: 6},
      {material: Materials.SHIMMERING_NECTAR, count: 6},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_PROSPERITY, count: 9},
      {material: Materials.SHIMMERING_NECTAR, count: 9},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_PROSPERITY, count: 4},
      {material: Materials.ENERGY_NECTAR, count: 4},
      {material: BossSkillMaterial.RING_OF_BOREAS, count: 1},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_PROSPERITY, count: 6},
      {material: Materials.ENERGY_NECTAR, count: 6},
      {material: BossSkillMaterial.RING_OF_BOREAS, count: 1},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_PROSPERITY, count: 12},
      {material: Materials.ENERGY_NECTAR, count: 9},
      {material: BossSkillMaterial.RING_OF_BOREAS, count: 2},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_PROSPERITY, count: 16},
      {material: Materials.ENERGY_NECTAR, count: 12},
      {material: BossSkillMaterial.RING_OF_BOREAS, count: 2},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Keqing
