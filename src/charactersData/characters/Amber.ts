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

const Amber = {
  name: 'Amber',
  vision: Vision.PYRO,
  ascension_materials: {
    20: [
      {material: Gem.PYRO.AGNIDUS_AGATE_SLIVER, count: 1},
      {material: Flower.SMALL_LAMP_GRASS, count: 3},
      {material: Materials.FIRM_ARROWHEAD, count: 3},
      {material: MORA, count: 20000},
    ],
    40: [
      {material: Gem.PYRO.AGNIDUS_AGATE_FRAGMENT, count: 3},
      {material: BossMaterials.EVERFLAME_SEED, count: 2},
      {material: Flower.SMALL_LAMP_GRASS, count: 10},
      {material: Materials.FIRM_ARROWHEAD, count: 15},
      {material: MORA, count: 40000},
    ],
    50: [
      {material: Gem.PYRO.AGNIDUS_AGATE_FRAGMENT, count: 6},
      {material: BossMaterials.EVERFLAME_SEED, count: 4},
      {material: Flower.SMALL_LAMP_GRASS, count: 20},
      {material: Materials.SHARP_ARROWHEAD, count: 12},
      {material: MORA, count: 60000},
    ],
    60: [
      {material: Gem.PYRO.AGNIDUS_AGATE_CHUNK, count: 3},
      {material: BossMaterials.EVERFLAME_SEED, count: 8},
      {material: Flower.SMALL_LAMP_GRASS, count: 30},
      {material: Materials.SHARP_ARROWHEAD, count: 18},
      {material: MORA, count: 80000},
    ],
    70: [
      {material: Gem.PYRO.AGNIDUS_AGATE_CHUNK, count: 6},
      {material: BossMaterials.EVERFLAME_SEED, count: 12},
      {material: Flower.SMALL_LAMP_GRASS, count: 45},
      {material: Materials.WEATHERED_ARROWHEAD, count: 12},
      {material: MORA, count: 100000},
    ],
    80: [
      {material: Gem.PYRO.AGNIDUS_AGATE_GEMSTONE, count: 6},
      {material: BossMaterials.EVERFLAME_SEED, count: 20},
      {material: Flower.SMALL_LAMP_GRASS, count: 60},
      {material: Materials.WEATHERED_ARROWHEAD, count: 24},
      {material: MORA, count: 120000},
    ]
  },
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_FREEDOM,
      2: Books.GUIDE_TO_FREEDOM,
      3: Books.PHILOSOPHIES_OF_FREEDOM,
    },
    materials: {
      1: Materials.FIRM_ARROWHEAD,
      2: Materials.SHARP_ARROWHEAD,
      3: Materials.WEATHERED_ARROWHEAD,
    },
    bossMaterial: BossSkillMaterial.DVALINS_SIGH
  })
}

export default Amber
