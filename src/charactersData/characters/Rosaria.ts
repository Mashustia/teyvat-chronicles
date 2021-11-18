import {Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  Flower,
  Gem,
  Materials,
  MORA
} from '../materialNames';
import {fillTalentMaterials} from '../../utils/utils';

const Rosaria = {
  name: 'Rosaria',
  vision: Vision.CRYO,
  ascension_materials: {
    20: [
      {material: Gem.CRYO.SHIVADA_JADE_SLIVER, count: 1, sorting_index: 1},
      {material: Flower.VALBERRY, count: 3},
      {material: Materials.RECRUITS_INSIGNIA, count: 3},
      {material: MORA, count: 20000},
    ],
    40: [
      {material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 3, sorting_index: 2},
      {material: BossMaterials.HOARFROST_CORE, count: 2},
      {material: Flower.VALBERRY, count: 10},
      {material: Materials.RECRUITS_INSIGNIA, count: 15},
      {material: MORA, count: 40000},
    ],
    50: [
      {material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 6, sorting_index: 2},
      {material: BossMaterials.HOARFROST_CORE, count: 4},
      {material: Flower.VALBERRY, count: 20},
      {material: Materials.SERGEANTS_INSIGNIA, count: 12},
      {material: MORA, count: 60000},
    ],
    60: [
      {material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 3, sorting_index: 3},
      {material: BossMaterials.HOARFROST_CORE, count: 8},
      {material: Flower.VALBERRY, count: 30},
      {material: Materials.SERGEANTS_INSIGNIA, count: 18},
      {material: MORA, count: 80000},
    ],
    70: [
      {material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 6, sorting_index: 3},
      {material: BossMaterials.HOARFROST_CORE, count: 12},
      {material: Flower.VALBERRY, count: 45},
      {material: Materials.LIEUTENANTS_INSIGNIA, count: 12},
      {material: MORA, count: 100000},
    ],
    80: [
      {material: Gem.CRYO.SHIVADA_JADE_GEMSTONE, count: 6, sorting_index: 4},
      {material: BossMaterials.HOARFROST_CORE, count: 20},
      {material: Flower.VALBERRY, count: 60},
      {material: Materials.LIEUTENANTS_INSIGNIA, count: 24},
      {material: MORA, count: 120000},
    ]
  },
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_BALLAD,
      2: Books.GUIDE_TO_BALLAD,
      3: Books.PHILOSOPHIES_OF_BALLAD,
    },
    materials: {
      1: Materials.RECRUITS_INSIGNIA,
      2: Materials.SERGEANTS_INSIGNIA,
      3: Materials.LIEUTENANTS_INSIGNIA,
    },
    bossMaterial: BossSkillMaterial.SHADOW_OF_THE_WARRIOR
  })
}

export default Rosaria
