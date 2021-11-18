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

const Kaeya = {
  name: 'Kaeya',
  vision: Vision.CRYO,
  ascension_materials: {
    20: [
      { material: Gem.CRYO.SHIVADA_JADE_SLIVER, count: 1, sorting_index: 1 },
      { material: Flower.CALLA_LILY, count: 3 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 3, sorting_index: 2 },
      { material: BossMaterials.HOARFROST_CORE, count: 2 },
      { material: Flower.CALLA_LILY, count: 10 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 6, sorting_index: 2 },
      { material: BossMaterials.HOARFROST_CORE, count: 4 },
      { material: Flower.CALLA_LILY, count: 20 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 3, sorting_index: 3 },
      { material: BossMaterials.HOARFROST_CORE, count: 8 },
      { material: Flower.CALLA_LILY, count: 30 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 6, sorting_index: 3 },
      { material: BossMaterials.HOARFROST_CORE, count: 12 },
      { material: Flower.CALLA_LILY, count: 45 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.CRYO.SHIVADA_JADE_GEMSTONE, count: 6, sorting_index: 4 },
      { material: BossMaterials.HOARFROST_CORE, count: 20 },
      { material: Flower.CALLA_LILY, count: 60 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 24 },
      { material: MORA, count: 120000 },
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
      1: Materials.TREASURE_HOARDER_INSIGNIA,
      2: Materials.SILVER_RAVEN_INSIGNIA,
      3: Materials.GOLDEN_RAVEN_INSIGNIA,
    },
    bossMaterial: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS
  })
}

export default Kaeya
