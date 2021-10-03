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

const Venti = {
  name: 'Venti',
  vision: Vision.ANEMO,
  ascension_materials: {
    20: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_SLIVER, count: 1 },
      { material: Flower.CECILIA, count: 3 },
      { material: Materials.SLIME_CONDENSATE, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.HURRICANE_SEED, count: 2 },
      { material: Flower.CECILIA, count: 10 },
      { material: Materials.SLIME_CONDENSATE, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.HURRICANE_SEED, count: 4 },
      { material: Flower.CECILIA, count: 20 },
      { material: Materials.SLIME_SECRETIONS, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.HURRICANE_SEED, count: 8 },
      { material: Flower.CECILIA, count: 30 },
      { material: Materials.SLIME_SECRETIONS, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.HURRICANE_SEED, count: 12 },
      { material: Flower.CECILIA, count: 45 },
      { material: Materials.SLIME_CONCENTRATE, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.HURRICANE_SEED, count: 20 },
      { material: Flower.CECILIA, count: 60 },
      { material: Materials.SLIME_CONCENTRATE, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_BALLAD, count: 3},
      {material: Materials.SLIME_CONDENSATE, count: 6},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_BALLAD, count: 2},
      {material: Materials.SLIME_SECRETIONS, count: 3},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_BALLAD, count: 4},
      {material: Materials.SLIME_SECRETIONS, count: 4},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_BALLAD, count: 6},
      {material: Materials.SLIME_SECRETIONS, count: 6},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_BALLAD, count: 9},
      {material: Materials.SLIME_SECRETIONS, count: 9},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 4},
      {material: Materials.SLIME_CONCENTRATE, count: 4},
      {material: BossSkillMaterial.TAIL_OF_BOREAS, count: 1},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 6},
      {material: Materials.SLIME_CONCENTRATE, count: 6},
      {material: BossSkillMaterial.TAIL_OF_BOREAS, count: 1},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 12},
      {material: Materials.SLIME_CONCENTRATE, count: 9},
      {material: BossSkillMaterial.TAIL_OF_BOREAS, count: 2},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 16},
      {material: Materials.SLIME_CONCENTRATE, count: 12},
      {material: BossSkillMaterial.TAIL_OF_BOREAS, count: 2},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Venti
