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

const Jean = {
  name: 'Jean',
  vision: Vision.ANEMO,
  ascension_materials: {
    20: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_SLIVER, count: 1 },
      { material: Flower.DANDELION_SEED, count: 3 },
      { material: Materials.DAMAGED_MASK, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.HURRICANE_SEED, count: 2 },
      { material: Flower.DANDELION_SEED, count: 10 },
      { material: Materials.DAMAGED_MASK, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.HURRICANE_SEED, count: 4 },
      { material: Flower.DANDELION_SEED, count: 20 },
      { material: Materials.STAINED_MASK, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.HURRICANE_SEED, count: 8 },
      { material: Flower.DANDELION_SEED, count: 30 },
      { material: Materials.STAINED_MASK, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.HURRICANE_SEED, count: 12 },
      { material: Flower.DANDELION_SEED, count: 45 },
      { material: Materials.OMINOUS_MASK, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.HURRICANE_SEED, count: 20 },
      { material: Flower.DANDELION_SEED, count: 60 },
      { material: Materials.OMINOUS_MASK, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_RESISTANCE, count: 3},
      {material: Materials.DAMAGED_MASK, count: 6},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_RESISTANCE, count: 2},
      {material: Materials.STAINED_MASK, count: 3},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_RESISTANCE, count: 4},
      {material: Materials.STAINED_MASK, count: 4},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_RESISTANCE, count: 6},
      {material: Materials.STAINED_MASK, count: 6},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_RESISTANCE, count: 9},
      {material: Materials.STAINED_MASK, count: 9},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_RESISTANCE, count: 4},
      {material: Materials.OMINOUS_MASK, count: 4},
      {material: BossSkillMaterial.DVALINS_PLUME, count: 1},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_RESISTANCE, count: 6},
      {material: Materials.OMINOUS_MASK, count: 6},
      {material: BossSkillMaterial.DVALINS_PLUME, count: 1},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_RESISTANCE, count: 12},
      {material: Materials.OMINOUS_MASK, count: 9},
      {material: BossSkillMaterial.DVALINS_PLUME, count: 2},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_RESISTANCE, count: 16},
      {material: Materials.OMINOUS_MASK, count: 12},
      {material: BossSkillMaterial.DVALINS_PLUME, count: 2},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Jean
