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

const Kazuha = {
  name: 'Kazuha',
  vision: Vision.ANEMO,
  ascension_materials: {
    20: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_SLIVER, count: 1 },
      { material: Flower.SEA_GANODERMA, count: 3 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT, count: 3 },
      { material: BossMaterials.MARIONETTE_CORE, count: 2 },
      { material: Flower.SEA_GANODERMA, count: 10 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT, count: 6 },
      { material: BossMaterials.MARIONETTE_CORE, count: 4 },
      { material: Flower.SEA_GANODERMA, count: 20 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK, count: 3 },
      { material: BossMaterials.MARIONETTE_CORE, count: 8 },
      { material: Flower.SEA_GANODERMA, count: 30 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK, count: 6 },
      { material: BossMaterials.MARIONETTE_CORE, count: 12 },
      { material: Flower.SEA_GANODERMA, count: 45 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_GEMSTONE, count: 6 },
      { material: BossMaterials.MARIONETTE_CORE, count: 20 },
      { material: Flower.SEA_GANODERMA, count: 60 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 24 },
      { material: MORA, count: 120000 },
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
      1: Materials.TREASURE_HOARDER_INSIGNIA,
      2: Materials.SILVER_RAVEN_INSIGNIA,
      3: Materials.GOLDEN_RAVEN_INSIGNIA,
    },
    bossMaterial: BossSkillMaterial.GILDED_SCALE
  })
}

export default Kazuha
