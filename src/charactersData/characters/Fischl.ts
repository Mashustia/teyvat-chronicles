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

const Fischl = {
  name: 'Fischl',
  vision: Vision.ELECTRO,
  ascension_materials: {
    20: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_SLIVER, count: 1 },
      { material: Flower.SMALL_LAMP_GRASS, count: 3 },
      { material: Materials.FIRM_ARROWHEAD, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 2 },
      { material: Flower.SMALL_LAMP_GRASS, count: 10 },
      { material: Materials.FIRM_ARROWHEAD, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 4 },
      { material: Flower.SMALL_LAMP_GRASS, count: 20 },
      { material: Materials.SHARP_ARROWHEAD, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 8 },
      { material: Flower.SMALL_LAMP_GRASS, count: 30 },
      { material: Materials.SHARP_ARROWHEAD, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 12 },
      { material: Flower.SMALL_LAMP_GRASS, count: 45 },
      { material: Materials.WEATHERED_ARROWHEAD, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.LIGHTNING_PRISM, count: 20 },
      { material: Flower.SMALL_LAMP_GRASS, count: 60 },
      { material: Materials.WEATHERED_ARROWHEAD, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 4,
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_BALLAD, count: 3},
      {material: Materials.FIRM_ARROWHEAD, count: 6},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_BALLAD, count: 2},
      {material: Materials.SHARP_ARROWHEAD, count: 3},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_BALLAD, count: 4},
      {material: Materials.SHARP_ARROWHEAD, count: 4},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_BALLAD, count: 6},
      {material: Materials.SHARP_ARROWHEAD, count: 6},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_BALLAD, count: 9},
      {material: Materials.SHARP_ARROWHEAD, count: 9},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 4},
      {material: Materials.WEATHERED_ARROWHEAD, count: 4},
      {material: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS, count: 1},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 6},
      {material: Materials.WEATHERED_ARROWHEAD, count: 6},
      {material: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS, count: 1},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 12},
      {material: Materials.WEATHERED_ARROWHEAD, count: 9},
      {material: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS, count: 2},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 16},
      {material: Materials.WEATHERED_ARROWHEAD, count: 12},
      {material: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS, count: 2},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Fischl
