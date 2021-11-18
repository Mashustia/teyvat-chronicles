import {Vision} from '../../const/consts';
import {
  BossMaterials,
  Gem,
  Materials,
  MORA,
  Flower,
  Books,
  BossSkillMaterial
} from '../materialNames';
import {fillTalentMaterials} from '../../utils/utils';

const Eula = {
  name: 'Eula',
  vision: Vision.CRYO,
  ascension_materials: {
    20: [
      { material: Gem.CRYO.SHIVADA_JADE_SLIVER, count: 1, sorting_index: 1 },
      { material: Flower.DANDELION_SEED, count: 3 },
      { material: Materials.DAMAGED_MASK, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 3, sorting_index: 2 },
      { material: BossMaterials.CRYSTALLINE_BLOOM, count: 2 },
      { material: Flower.DANDELION_SEED, count: 10 },
      { material: Materials.DAMAGED_MASK, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 6, sorting_index: 2 },
      { material: BossMaterials.CRYSTALLINE_BLOOM, count: 4 },
      { material: Flower.DANDELION_SEED, count: 20 },
      { material: Materials.STAINED_MASK, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 3, sorting_index: 3 },
      { material: BossMaterials.CRYSTALLINE_BLOOM, count: 8 },
      { material: Flower.DANDELION_SEED, count: 30 },
      { material: Materials.STAINED_MASK, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 6, sorting_index: 3 },
      { material: BossMaterials.CRYSTALLINE_BLOOM, count: 12 },
      { material: Flower.DANDELION_SEED, count: 45 },
      { material: Materials.OMINOUS_MASK, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.CRYO.SHIVADA_JADE_GEMSTONE, count: 6, sorting_index: 4 },
      { material: BossMaterials.CRYSTALLINE_BLOOM, count: 20 },
      { material: Flower.DANDELION_SEED, count: 60 },
      { material: Materials.OMINOUS_MASK, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_RESISTANCE,
      2: Books.GUIDE_TO_RESISTANCE,
      3: Books.PHILOSOPHIES_OF_RESISTANCE,
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    bossMaterial: BossSkillMaterial.DRAGON_LORDS_CROWN
  })
}

export default Eula
