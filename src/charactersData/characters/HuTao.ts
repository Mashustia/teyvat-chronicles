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

const HuTao = {
  name: 'HuTao',
  vision: Vision.PYRO,
  ascension_materials: {
    20: [
      {material: Gem.PYRO.AGNIDUS_AGATE_SLIVER, count: 1},
      {material: Flower.SILK_FLOWER, count: 3},
      {material: Materials.WHOPPERFLOWER_NECTAR, count: 3},
      {material: MORA, count: 20000},
    ],
    40: [
      {material: Gem.PYRO.AGNIDUS_AGATE_FRAGMENT, count: 3},
      {material: BossMaterials.JUVENILE_JADE, count: 2},
      {material: Flower.SILK_FLOWER, count: 10},
      {material: Materials.WHOPPERFLOWER_NECTAR, count: 15},
      {material: MORA, count: 40000},
    ],
    50: [
      {material: Gem.PYRO.AGNIDUS_AGATE_FRAGMENT, count: 6},
      {material: BossMaterials.JUVENILE_JADE, count: 4},
      {material: Flower.SILK_FLOWER, count: 20},
      {material: Materials.SHIMMERING_NECTAR, count: 12},
      {material: MORA, count: 60000},
    ],
    60: [
      {material: Gem.PYRO.AGNIDUS_AGATE_CHUNK, count: 3},
      {material: BossMaterials.JUVENILE_JADE, count: 8},
      {material: Flower.SILK_FLOWER, count: 30},
      {material: Materials.SHIMMERING_NECTAR, count: 18},
      {material: MORA, count: 80000},
    ],
    70: [
      {material: Gem.PYRO.AGNIDUS_AGATE_CHUNK, count: 6},
      {material: BossMaterials.JUVENILE_JADE, count: 12},
      {material: Flower.SILK_FLOWER, count: 45},
      {material: Materials.ENERGY_NECTAR, count: 12},
      {material: MORA, count: 100000},
    ],
    80: [
      {material: Gem.PYRO.AGNIDUS_AGATE_GEMSTONE, count: 6},
      {material: BossMaterials.JUVENILE_JADE, count: 20},
      {material: Flower.SILK_FLOWER, count: 60},
      {material: Materials.ENERGY_NECTAR, count: 24},
      {material: MORA, count: 120000},
    ]
  },
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_DILIGENCE,
      2: Books.GUIDE_TO_DILIGENCE,
      3: Books.PHILOSOPHIES_OF_DILIGENCE,
    },
    materials: {
      1: Materials.WHOPPERFLOWER_NECTAR,
      2: Materials.SHIMMERING_NECTAR,
      3: Materials.ENERGY_NECTAR,
    },
    bossMaterial: BossSkillMaterial.SHARD_OF_A_FOUL_LEGACY
  })
}

export default HuTao
