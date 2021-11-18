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

const Qiqi = {
  name: 'Qiqi',
  vision: Vision.CRYO,
  ascension_materials: {
    20: [
      { material: Gem.CRYO.SHIVADA_JADE_SLIVER, count: 1, sorting_index: 1 },
      { material: Flower.VIOLETGRASS, count: 3 },
      { material: Materials.DIVINING_SCROLL, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 3, sorting_index: 2 },
      { material: BossMaterials.HOARFROST_CORE, count: 2 },
      { material: Flower.VIOLETGRASS, count: 10 },
      { material: Materials.DIVINING_SCROLL, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 6, sorting_index: 2 },
      { material: BossMaterials.HOARFROST_CORE, count: 4 },
      { material: Flower.VIOLETGRASS, count: 20 },
      { material: Materials.SEALED_SCROLL, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 3, sorting_index: 3 },
      { material: BossMaterials.HOARFROST_CORE, count: 8 },
      { material: Flower.VIOLETGRASS, count: 30 },
      { material: Materials.SEALED_SCROLL, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 6, sorting_index: 3 },
      { material: BossMaterials.HOARFROST_CORE, count: 12 },
      { material: Flower.VIOLETGRASS, count: 45 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.CRYO.SHIVADA_JADE_GEMSTONE, count: 6, sorting_index: 4 },
      { material: BossMaterials.HOARFROST_CORE, count: 20 },
      { material: Flower.VIOLETGRASS, count: 60 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_PROSPERITY,
      2: Books.GUIDE_TO_PROSPERITY,
      3: Books.PHILOSOPHIES_OF_PROSPERITY,
    },
    materials: {
      1: Materials.DIVINING_SCROLL,
      2: Materials.SEALED_SCROLL,
      3: Materials.FORBIDDEN_CURSE_SCROLL,
    },
    bossMaterial: BossSkillMaterial.TAIL_OF_BOREAS
  })
}

export default Qiqi
