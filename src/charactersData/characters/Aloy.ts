import {Vision} from '../../const/consts';
import {Books, BossMaterials, BossSkillMaterial, CROWN_OF_INSIGHT, Gem, Materials, MORA, Rocks} from '../materialNames';

const Aloy = {
  name: 'Aloy',
  vision: Vision.CRYO,
  ascension_materials: {
    20: [
      { material: Gem.CRYO.SHIVADA_JADE_SLIVER, count: 1 },
      { material: Rocks.CRYSTAL_MARROW, count: 3 },
      { material: Materials.SPECTRAL_HUSK, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 3 },
      { material: BossMaterials.CRYSTALLINE_BLOOM, count: 2 },
      { material: Rocks.CRYSTAL_MARROW, count: 10 },
      { material: Materials.SPECTRAL_HUSK, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.CRYO.SHIVADA_JADE_FRAGMENT, count: 6 },
      { material: BossMaterials.CRYSTALLINE_BLOOM, count: 4 },
      { material: Rocks.CRYSTAL_MARROW, count: 20 },
      { material: Materials.SPECTRAL_HEART, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 3 },
      { material: BossMaterials.CRYSTALLINE_BLOOM, count: 8 },
      { material: Rocks.CRYSTAL_MARROW, count: 30 },
      { material: Materials.SPECTRAL_HEART, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.CRYO.SHIVADA_JADE_CHUNK, count: 6 },
      { material: BossMaterials.CRYSTALLINE_BLOOM, count: 12 },
      { material: Rocks.CRYSTAL_MARROW, count: 45 },
      { material: Materials.SPECTRAL_NUCLEUS, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.CRYO.SHIVADA_JADE_GEMSTONE, count: 6 },
      { material: BossMaterials.CRYSTALLINE_BLOOM, count: 20 },
      { material: Rocks.CRYSTAL_MARROW, count: 60 },
      { material: Materials.SPECTRAL_NUCLEUS, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_FREEDOM, count: 3},
      {material: Materials.SPECTRAL_HUSK, count: 6},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_FREEDOM, count: 2},
      {material: Materials.SPECTRAL_HEART, count: 3},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_FREEDOM, count: 4},
      {material: Materials.SPECTRAL_HEART, count: 4},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_FREEDOM, count: 6},
      {material: Materials.SPECTRAL_HEART, count: 6},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_FREEDOM, count: 9},
      {material: Materials.SPECTRAL_HEART, count: 9},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_FREEDOM, count: 4},
      {material: Materials.SPECTRAL_NUCLEUS, count: 4},
      {material: BossSkillMaterial.MOLTEN_MOMENT, count: 1},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_FREEDOM, count: 6},
      {material: Materials.SPECTRAL_NUCLEUS, count: 6},
      {material: BossSkillMaterial.MOLTEN_MOMENT, count: 1},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_FREEDOM, count: 12},
      {material: Materials.SPECTRAL_NUCLEUS, count: 9},
      {material: BossSkillMaterial.MOLTEN_MOMENT, count: 2},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_FREEDOM, count: 16},
      {material: Materials.SPECTRAL_NUCLEUS, count: 12},
      {material: BossSkillMaterial.MOLTEN_MOMENT, count: 2},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Aloy
