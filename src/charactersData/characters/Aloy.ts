import {Vision} from '../../const/consts';
import {Books, BossMaterials, BossSkillMaterial, Gem, Materials, MORA, Rocks} from '../materialNames';
import {fillTalentMaterials} from '../../utils/utils';

const Aloy = {
  name: 'Aloy',
  vision: Vision.CRYO,
  ascension_materials: {
    20: [
      { material: Gem.CRYO.SHIVADA_JADE_SLIVER, count: 1, sorting_index: 1 },
      { material: Rocks.CRYSTAL_MARROW, count: 3 },
      { material: Materials.SPECTRAL_HUSK, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 3, sorting_index: 2 },
      { material: BossMaterials.CRYSTALLINE_BLOOM, count: 2 },
      { material: Rocks.CRYSTAL_MARROW, count: 10 },
      { material: Materials.SPECTRAL_HUSK, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 6, sorting_index: 2 },
      { material: BossMaterials.CRYSTALLINE_BLOOM, count: 4 },
      { material: Rocks.CRYSTAL_MARROW, count: 20 },
      { material: Materials.SPECTRAL_HEART, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 3, sorting_index: 3 },
      { material: BossMaterials.CRYSTALLINE_BLOOM, count: 8 },
      { material: Rocks.CRYSTAL_MARROW, count: 30 },
      { material: Materials.SPECTRAL_HEART, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 6, sorting_index: 3 },
      { material: BossMaterials.CRYSTALLINE_BLOOM, count: 12 },
      { material: Rocks.CRYSTAL_MARROW, count: 45 },
      { material: Materials.SPECTRAL_NUCLEUS, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.CRYO.SHIVADA_JADE_GEMSTONE, count: 6, sorting_index: 4 },
      { material: BossMaterials.CRYSTALLINE_BLOOM, count: 20 },
      { material: Rocks.CRYSTAL_MARROW, count: 60 },
      { material: Materials.SPECTRAL_NUCLEUS, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_FREEDOM,
      2: Books.GUIDE_TO_FREEDOM,
      3: Books.PHILOSOPHIES_OF_FREEDOM,
    },
    materials: {
      1: Materials.SPECTRAL_HUSK,
      2: Materials.SPECTRAL_HEART,
      3: Materials.SPECTRAL_NUCLEUS,
    },
    bossMaterial: BossSkillMaterial.MOLTEN_MOMENT
  })
}

export default Aloy
