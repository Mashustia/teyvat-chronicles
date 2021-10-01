import {Vision} from '../../const/consts';
import {
  BossMaterials,
  Gem,
  Materials,
  MORA,
  Flower,
  Books,
  BossSkillMaterial,
  CROWN_OF_INSIGHT
} from '../materialNames';

const Kaeya = {
  name: 'Kaeya',
  vision: Vision.CRYO,
  ascension_materials: {
    20: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_SLIVER, count: 1 },
      { material: Flower.CALLA_LILY, count: 3 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.HOARFROST_CORE, count: 2 },
      { material: Flower.CALLA_LILY, count: 10 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.HOARFROST_CORE, count: 4 },
      { material: Flower.CALLA_LILY, count: 20 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.HOARFROST_CORE, count: 8 },
      { material: Flower.CALLA_LILY, count: 30 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.HOARFROST_CORE, count: 12 },
      { material: Flower.CALLA_LILY, count: 45 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.HOARFROST_CORE, count: 20 },
      { material: Flower.CALLA_LILY, count: 60 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 4,
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_BALLAD, count: 3},
      {material: Materials.TREASURE_HOARDER_INSIGNIA, count: 6},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_BALLAD, count: 2},
      {material: Materials.SILVER_RAVEN_INSIGNIA, count: 3},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_BALLAD, count: 4},
      {material: Materials.SILVER_RAVEN_INSIGNIA, count: 4},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_BALLAD, count: 6},
      {material: Materials.SILVER_RAVEN_INSIGNIA, count: 6},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_BALLAD, count: 9},
      {material: Materials.SILVER_RAVEN_INSIGNIA, count: 9},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 4},
      {material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 4},
      {material: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS, count: 1},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 6},
      {material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 6},
      {material: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS, count: 1},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 12},
      {material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 9},
      {material: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS, count: 2},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_BALLAD, count: 16},
      {material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 12},
      {material: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS, count: 2},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Kaeya
