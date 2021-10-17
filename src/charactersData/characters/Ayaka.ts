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

const Ayaka = {
  name: 'Ayaka',
  vision: Vision.CRYO,
  ascension_materials: {
    20: [
      { material: Gem.CRYO.SHIVADA_JADE_SLIVER, count: 1 },
      { material: Flower.SAKURA_BLOOM, count: 3 },
      { material: Materials.OLD_HANDGUARD, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 3 },
      { material: BossMaterials.PERPETUAL_HEART, count: 2 },
      { material: Flower.SAKURA_BLOOM, count: 10 },
      { material: Materials.OLD_HANDGUARD, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 6 },
      { material: BossMaterials.PERPETUAL_HEART, count: 4 },
      { material: Flower.SAKURA_BLOOM, count: 20 },
      { material: Materials.KAGEUCHI_HANDGUARD, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 3 },
      { material: BossMaterials.PERPETUAL_HEART, count: 8 },
      { material: Flower.SAKURA_BLOOM, count: 30 },
      { material: Materials.KAGEUCHI_HANDGUARD, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 6 },
      { material: BossMaterials.PERPETUAL_HEART, count: 12 },
      { material: Flower.SAKURA_BLOOM, count: 45 },
      { material: Materials.FAMED_HANDGUARD, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.CRYO.SHIVADA_JADE_GEMSTONE, count: 6 },
      { material: BossMaterials.PERPETUAL_HEART, count: 20 },
      { material: Flower.SAKURA_BLOOM, count: 60 },
      { material: Materials.FAMED_HANDGUARD, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_ELEGANCE, count: 3},
      {material: Materials.OLD_HANDGUARD, count: 6},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_ELEGANCE, count: 2},
      {material: Materials.KAGEUCHI_HANDGUARD, count: 3},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_ELEGANCE, count: 4},
      {material: Materials.KAGEUCHI_HANDGUARD, count: 4},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_ELEGANCE, count: 6},
      {material: Materials.KAGEUCHI_HANDGUARD, count: 6},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_ELEGANCE, count: 9},
      {material: Materials.KAGEUCHI_HANDGUARD, count: 9},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_ELEGANCE, count: 4},
      {material: Materials.FAMED_HANDGUARD, count: 4},
      {material: BossSkillMaterial.BLOODJADE_BRANCH, count: 1},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_ELEGANCE, count: 6},
      {material: Materials.FAMED_HANDGUARD, count: 6},
      {material: BossSkillMaterial.BLOODJADE_BRANCH, count: 1},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_ELEGANCE, count: 12},
      {material: Materials.FAMED_HANDGUARD, count: 9},
      {material: BossSkillMaterial.BLOODJADE_BRANCH, count: 2},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_ELEGANCE, count: 16},
      {material: Materials.FAMED_HANDGUARD, count: 12},
      {material: BossSkillMaterial.BLOODJADE_BRANCH, count: 2},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Ayaka
