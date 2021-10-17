import {Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  CROWN_OF_INSIGHT,
  Flower,
  Gem,
  Materials,
  MORA
} from '../materialNames';

const Sucrose = {
  name: 'Sucrose',
  vision: Vision.ANEMO,
  ascension_materials: {
    20: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_SLIVER, count: 1 },
      { material: Flower.WINDWHEEL_ASTER, count: 3 },
      { material: Materials.WHOPPERFLOWER_NECTAR, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT, count: 3 },
      { material: BossMaterials.HURRICANE_SEED, count: 2 },
      { material: Flower.WINDWHEEL_ASTER, count: 10 },
      { material: Materials.WHOPPERFLOWER_NECTAR, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT, count: 6 },
      { material: BossMaterials.HURRICANE_SEED, count: 4 },
      { material: Flower.WINDWHEEL_ASTER, count: 20 },
      { material: Materials.SHIMMERING_NECTAR, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK, count: 3 },
      { material: BossMaterials.HURRICANE_SEED, count: 8 },
      { material: Flower.WINDWHEEL_ASTER, count: 30 },
      { material: Materials.SHIMMERING_NECTAR, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK, count: 6 },
      { material: BossMaterials.HURRICANE_SEED, count: 12 },
      { material: Flower.WINDWHEEL_ASTER, count: 45 },
      { material: Materials.ENERGY_NECTAR, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_GEMSTONE, count: 6 },
      { material: BossMaterials.HURRICANE_SEED, count: 20 },
      { material: Flower.WINDWHEEL_ASTER, count: 60 },
      { material: Materials.ENERGY_NECTAR, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 4,
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_FREEDOM, count: 3},
      {material: Materials.WHOPPERFLOWER_NECTAR, count: 6},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_FREEDOM, count: 2},
      {material: Materials.SHIMMERING_NECTAR, count: 3},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_FREEDOM, count: 4},
      {material: Materials.SHIMMERING_NECTAR, count: 4},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_FREEDOM, count: 6},
      {material: Materials.SHIMMERING_NECTAR, count: 6},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_FREEDOM, count: 9},
      {material: Materials.SHIMMERING_NECTAR, count: 9},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_FREEDOM, count: 4},
      {material: Materials.ENERGY_NECTAR, count: 4},
      {material: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS, count: 1},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_FREEDOM, count: 6},
      {material: Materials.ENERGY_NECTAR, count: 6},
      {material: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS, count: 1},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_FREEDOM, count: 12},
      {material: Materials.ENERGY_NECTAR, count: 9},
      {material: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS, count: 2},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_FREEDOM, count: 16},
      {material: Materials.ENERGY_NECTAR, count: 12},
      {material: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS, count: 2},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Sucrose
