import {Vision} from '../../const/consts';
import {
  BossMaterials,
  Gem,
  Materials,
  MORA,
  Flower,
  Books,
  BossSkillMaterial,
  CROWN_OF_INSIGHT
} from '../materialNames';

const Qiqi = {
  name: 'Qiqi',
  vision: Vision.CRYO,
  ascension_materials: {
    20: [
      { material: Gem.CRYO.SHIVADA_JADE_SLIVER, count: 1 },
      { material: Flower.VIOLETGRASS, count: 3 },
      { material: Materials.DIVINING_SCROLL, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 3 },
      { material: BossMaterials.HOARFROST_CORE, count: 2 },
      { material: Flower.VIOLETGRASS, count: 10 },
      { material: Materials.DIVINING_SCROLL, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 6 },
      { material: BossMaterials.HOARFROST_CORE, count: 4 },
      { material: Flower.VIOLETGRASS, count: 20 },
      { material: Materials.SEALED_SCROLL, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 3 },
      { material: BossMaterials.HOARFROST_CORE, count: 8 },
      { material: Flower.VIOLETGRASS, count: 30 },
      { material: Materials.SEALED_SCROLL, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 6 },
      { material: BossMaterials.HOARFROST_CORE, count: 12 },
      { material: Flower.VIOLETGRASS, count: 45 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.CRYO.SHIVADA_JADE_GEMSTONE, count: 6 },
      { material: BossMaterials.HOARFROST_CORE, count: 20 },
      { material: Flower.VIOLETGRASS, count: 60 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_PROSPERITY, count: 3},
      {material: Materials.DIVINING_SCROLL, count: 6},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_PROSPERITY, count: 2},
      {material: Materials.SEALED_SCROLL, count: 3},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_PROSPERITY, count: 4},
      {material: Materials.SEALED_SCROLL, count: 4},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_PROSPERITY, count: 6},
      {material: Materials.SEALED_SCROLL, count: 6},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_PROSPERITY, count: 9},
      {material: Materials.SEALED_SCROLL, count: 9},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_PROSPERITY, count: 4},
      {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 4},
      {material: BossSkillMaterial.TAIL_OF_BOREAS, count: 1},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_PROSPERITY, count: 6},
      {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 6},
      {material: BossSkillMaterial.TAIL_OF_BOREAS, count: 1},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_PROSPERITY, count: 12},
      {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 9},
      {material: BossSkillMaterial.TAIL_OF_BOREAS, count: 2},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_PROSPERITY, count: 16},
      {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 12},
      {material: BossSkillMaterial.TAIL_OF_BOREAS, count: 2},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Qiqi
