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

const Thoma = {
  name: 'Thoma',
  vision: Vision.PYRO,
  ascension_materials: {
    20: [
      { material: Gem.PYRO.AGNIDUS_AGATE_SLIVER, count: 1 },
      { material: Flower.FLUORESCENT_FUNGUS, count: 3 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.PYRO.AGNIDUS_AGATE_FRAGMENT, count: 3 },
      { material: BossMaterials.SMOLDERING_PEARL, count: 2 },
      { material: Flower.FLUORESCENT_FUNGUS, count: 10 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.PYRO.AGNIDUS_AGATE_FRAGMENT, count: 6 },
      { material: BossMaterials.SMOLDERING_PEARL, count: 4 },
      { material: Flower.FLUORESCENT_FUNGUS, count: 20 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.PYRO.AGNIDUS_AGATE_CHUNK, count: 3 },
      { material: BossMaterials.SMOLDERING_PEARL, count: 8 },
      { material: Flower.FLUORESCENT_FUNGUS, count: 30 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.PYRO.AGNIDUS_AGATE_CHUNK, count: 6 },
      { material: BossMaterials.SMOLDERING_PEARL, count: 12 },
      { material: Flower.FLUORESCENT_FUNGUS, count: 45 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.PYRO.AGNIDUS_AGATE_GEMSTONE, count: 6 },
      { material: BossMaterials.SMOLDERING_PEARL, count: 20 },
      { material: Flower.FLUORESCENT_FUNGUS, count: 60 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_TRANSIENCE,
      2: Books.GUIDE_TO_TRANSIENCE,
      3: Books.PHILOSOPHIES_OF_TRANSIENCE,
    },
    materials: {
      1: Materials.TREASURE_HOARDER_INSIGNIA,
      2: Materials.SILVER_RAVEN_INSIGNIA,
      3: Materials.GOLDEN_RAVEN_INSIGNIA,
    },
    bossMaterial: BossSkillMaterial.HELLFIRE_BUTTERFLY
  })
}

export default Thoma
