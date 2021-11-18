import {Vision} from '../../const/consts';
import {Books, BossMaterials, BossSkillMaterial, Gem, Materials, MORA, Rocks} from '../materialNames';
import {fillTalentMaterials} from '../../utils/utils';

const Beidou = {
  name: 'Beidou',
  vision: Vision.ELECTRO,
  ascension_materials: {
    20: [
      {material: Gem.ELECTRO.VAJRADA_AMETHYST_SLIVER, count: 1},
      {material: Rocks.NOCTILUCOUS_JADE, count: 3},
      {material: Materials.SILVER_RAVEN_INSIGNIA, count: 3},
      {material: MORA, count: 20000},
    ],
    40: [
      {material: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT, count: 3},
      {material: BossMaterials.LIGHTNING_PRISM, count: 2},
      {material: Rocks.NOCTILUCOUS_JADE, count: 10},
      {material: Materials.SILVER_RAVEN_INSIGNIA, count: 15},
      {material: MORA, count: 40000},
    ],
    50: [
      {material: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT, count: 6},
      {material: BossMaterials.LIGHTNING_PRISM, count: 4},
      {material: Rocks.NOCTILUCOUS_JADE, count: 20},
      {material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 12},
      {material: MORA, count: 60000},
    ],
    60: [
      {material: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK, count: 3},
      {material: BossMaterials.LIGHTNING_PRISM, count: 8},
      {material: Rocks.NOCTILUCOUS_JADE, count: 30},
      {material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 18},
      {material: MORA, count: 80000},
    ],
    70: [
      {material: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK, count: 6},
      {material: BossMaterials.LIGHTNING_PRISM, count: 12},
      {material: Rocks.NOCTILUCOUS_JADE, count: 45},
      {material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 12},
      {material: MORA, count: 100000},
    ],
    80: [
      {material: Gem.ELECTRO.VAJRADA_AMETHYST_GEMSTONE, count: 6},
      {material: BossMaterials.LIGHTNING_PRISM, count: 20},
      {material: Rocks.NOCTILUCOUS_JADE, count: 60},
      {material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 24},
      {material: MORA, count: 120000},
    ]
  },
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_GOLD,
      2: Books.GUIDE_TO_GOLD,
      3: Books.PHILOSOPHIES_OF_GOLD,
    },
    materials: {
      1: Materials.TREASURE_HOARDER_INSIGNIA,
      2: Materials.SILVER_RAVEN_INSIGNIA,
      3: Materials.GOLDEN_RAVEN_INSIGNIA,
    },
    bossMaterial: BossSkillMaterial.DVALINS_SIGH
  })
}

export default Beidou
