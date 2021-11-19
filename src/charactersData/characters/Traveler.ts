import {Vision} from '../../const/consts';
import {
  BossMaterials,
  Flower,
  TravelerAscensionMaterial,
  Materials,
  MORA,
  Books,
  BossSkillMaterial,
  CROWN_OF_INSIGHT
} from '../materialNames';
import {fillAscensionMaterials} from '../../utils/utils';

const Traveler = {
  name: 'Traveler',
  vision: Vision.NONE,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: TravelerAscensionMaterial.BRILLIANT_DIAMOND_SLIVER,
      2: TravelerAscensionMaterial.BRILLIANT_DIAMOND_FRAGMENT,
      3: TravelerAscensionMaterial.BRILLIANT_DIAMOND_CHUNK,
      4: TravelerAscensionMaterial.BRILLIANT_DIAMOND_GEMSTONE
    },
    materials: {
      1: Materials.DIVINING_SCROLL,
      2: Materials.SEALED_SCROLL,
      3: Materials.FORBIDDEN_CURSE_SCROLL,
    },
    bossMaterial: BossMaterials.HURRICANE_SEED,
    specialty: Flower.WINDWHEEL_ASTER
  }),
  rarity: 5,
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_FREEDOM, count: 3, sorting_index: 1},
      {material: Materials.DIVINING_SCROLL, count: 6, sorting_index: 8},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_RESISTANCE, count: 2, sorting_index: 4},
      {material: Materials.SEALED_SCROLL, count: 3, sorting_index: 8},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_BALLAD, count: 4, sorting_index: 2},
      {material: Materials.SEALED_SCROLL, count: 4, sorting_index: 8},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_FREEDOM, count: 6, sorting_index: 3},
      {material: Materials.SEALED_SCROLL, count: 6, sorting_index: 8},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_RESISTANCE, count: 9, sorting_index: 4},
      {material: Materials.SEALED_SCROLL, count: 9, sorting_index: 8},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 4, sorting_index: 7},
      {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 4, sorting_index: 8},
      {material: BossSkillMaterial.DVALINS_SIGH, count: 1, sorting_index: 9},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_FREEDOM, count: 6, sorting_index: 5},
      {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 6, sorting_index: 8},
      {material: BossSkillMaterial.DVALINS_SIGH, count: 1, sorting_index: 9},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_RESISTANCE, count: 12, sorting_index: 6},
      {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 9, sorting_index: 8},
      {material: BossSkillMaterial.DVALINS_SIGH, count: 2, sorting_index: 9},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 16, sorting_index: 7},
      {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 12, sorting_index: 8},
      {material: BossSkillMaterial.DVALINS_SIGH, count: 2, sorting_index: 9},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Traveler
