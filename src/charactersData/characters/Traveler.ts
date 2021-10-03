import {Vision} from '../../const/consts';
import {
  BossMaterials,
  Flower,
  TravelerAscensionMaterial,
  Materials,
  MORA,
  Books,
  BossSkillMaterial, CROWN_OF_INSIGHT
} from '../materialNames';

const Traveler = {
  name: 'Traveler',
  vision: Vision.NONE,
  ascension_materials: {
    20: [
      { material: TravelerAscensionMaterial.BRILLIANT_DIAMOND_SLIVER, count: 1 },
      { material: Flower.WINDWHEEL_ASTER, count: 3 },
      { material: Materials.DAMAGED_MASK, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: TravelerAscensionMaterial.BRILLIANT_DIAMOND_FRAGMENT, count: 3 },
      { material: BossMaterials.HURRICANE_SEED, count: 2 },
      { material: Flower.WINDWHEEL_ASTER, count: 10 },
      { material: Materials.DAMAGED_MASK, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: TravelerAscensionMaterial.BRILLIANT_DIAMOND_FRAGMENT, count: 6 },
      { material: BossMaterials.HURRICANE_SEED, count: 4 },
      { material: Flower.WINDWHEEL_ASTER, count: 20 },
      { material: Materials.SEALED_SCROLL, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: TravelerAscensionMaterial.BRILLIANT_DIAMOND_CHUNK, count: 3 },
      { material: BossMaterials.HURRICANE_SEED, count: 8 },
      { material: Flower.WINDWHEEL_ASTER, count: 30 },
      { material: Materials.SEALED_SCROLL, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: TravelerAscensionMaterial.BRILLIANT_DIAMOND_CHUNK, count: 6 },
      { material: BossMaterials.HURRICANE_SEED, count: 12 },
      { material: Flower.WINDWHEEL_ASTER, count: 45 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: TravelerAscensionMaterial.BRILLIANT_DIAMOND_GEMSTONE, count: 6 },
      { material: BossMaterials.HURRICANE_SEED, count: 20 },
      { material: Flower.WINDWHEEL_ASTER, count: 60 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_FREEDOM, count: 3},
      {material: Materials.DIVINING_SCROLL, count: 6},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_RESISTANCE, count: 2},
      {material: Materials.SEALED_SCROLL, count: 3},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_BALLAD, count: 4},
      {material: Materials.SEALED_SCROLL, count: 4},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_FREEDOM, count: 6},
      {material: Materials.SEALED_SCROLL, count: 6},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_RESISTANCE, count: 9},
      {material: Materials.SEALED_SCROLL, count: 9},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 4},
      {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 4},
      {material: BossSkillMaterial.DVALINS_SIGH, count: 1},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_FREEDOM, count: 6},
      {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 6},
      {material: BossSkillMaterial.DVALINS_SIGH, count: 1},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_RESISTANCE, count: 12},
      {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 9},
      {material: BossSkillMaterial.DVALINS_SIGH, count: 2},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 16},
      {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 12},
      {material: BossSkillMaterial.DVALINS_SIGH, count: 2},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Traveler
