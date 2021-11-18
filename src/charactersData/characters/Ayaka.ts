import {Vision} from '../../const/consts';
import {
  BossMaterials,
  Gem,
  Materials,
  MORA,
  Flower,
  Books,
  BossSkillMaterial,
} from '../materialNames';
import {fillTalentMaterials} from '../../utils/utils';

const Ayaka = {
  name: 'Ayaka',
  vision: Vision.CRYO,
  ascension_materials: {
    20: [
      { material: Gem.CRYO.SHIVADA_JADE_SLIVER, count: 1, sorting_index: 1 },
      { material: Flower.SAKURA_BLOOM, count: 3 },
      { material: Materials.OLD_HANDGUARD, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 3, sorting_index: 2 },
      { material: BossMaterials.PERPETUAL_HEART, count: 2 },
      { material: Flower.SAKURA_BLOOM, count: 10 },
      { material: Materials.OLD_HANDGUARD, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 6, sorting_index: 2 },
      { material: BossMaterials.PERPETUAL_HEART, count: 4 },
      { material: Flower.SAKURA_BLOOM, count: 20 },
      { material: Materials.KAGEUCHI_HANDGUARD, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 3, sorting_index: 3 },
      { material: BossMaterials.PERPETUAL_HEART, count: 8 },
      { material: Flower.SAKURA_BLOOM, count: 30 },
      { material: Materials.KAGEUCHI_HANDGUARD, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 6, sorting_index: 3 },
      { material: BossMaterials.PERPETUAL_HEART, count: 12 },
      { material: Flower.SAKURA_BLOOM, count: 45 },
      { material: Materials.FAMED_HANDGUARD, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.CRYO.SHIVADA_JADE_GEMSTONE, count: 6, sorting_index: 4 },
      { material: BossMaterials.PERPETUAL_HEART, count: 20 },
      { material: Flower.SAKURA_BLOOM, count: 60 },
      { material: Materials.FAMED_HANDGUARD, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_ELEGANCE,
      2: Books.GUIDE_TO_ELEGANCE,
      3: Books.PHILOSOPHIES_OF_ELEGANCE,
    },
    materials: {
      1: Materials.OLD_HANDGUARD,
      2: Materials.KAGEUCHI_HANDGUARD,
      3: Materials.FAMED_HANDGUARD,
    },
    bossMaterial: BossSkillMaterial.BLOODJADE_BRANCH
  })
}

export default Ayaka
