import {Vision} from '../../const/consts';
import {BossMaterials, Rocks, Gem, Materials, MORA, Books, BossSkillMaterial, CROWN_OF_INSIGHT} from '../materialNames';

const Kokomi = {
  name: 'Kokomi',
  vision: Vision.HYDRO,
  ascension_materials: {
    20: [
      { material: Gem.HYDRO.VARUNADA_LAZURITE_SLIVER, count: 1 },
      { material: Rocks.SANGO_PEARL, count: 3 },
      { material: Materials.SPECTRAL_HUSK, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.HYDRO.VARUNADA_LAZURITE_FRAGMENT, count: 3 },
      { material: BossMaterials.DEW_OF_REPUDIATION, count: 2 },
      { material: Rocks.SANGO_PEARL, count: 10 },
      { material: Materials.SPECTRAL_HUSK, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.HYDRO.VARUNADA_LAZURITE_FRAGMENT, count: 6 },
      { material: BossMaterials.DEW_OF_REPUDIATION, count: 4 },
      { material: Rocks.SANGO_PEARL, count: 20 },
      { material: Materials.SPECTRAL_HEART, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.HYDRO.VARUNADA_LAZURITE_CHUNK, count: 3 },
      { material: BossMaterials.DEW_OF_REPUDIATION, count: 8 },
      { material: Rocks.SANGO_PEARL, count: 30 },
      { material: Materials.SPECTRAL_HEART, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.HYDRO.VARUNADA_LAZURITE_CHUNK, count: 6 },
      { material: BossMaterials.DEW_OF_REPUDIATION, count: 12 },
      { material: Rocks.SANGO_PEARL, count: 45 },
      { material: Materials.SPECTRAL_NUCLEUS, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.HYDRO.VARUNADA_LAZURITE_GEMSTONE, count: 6 },
      { material: BossMaterials.DEW_OF_REPUDIATION, count: 20 },
      { material: Rocks.SANGO_PEARL, count: 60 },
      { material: Materials.SPECTRAL_NUCLEUS, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_TRANSIENCE, count: 3},
      {material: Materials.SPECTRAL_HUSK, count: 6},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_TRANSIENCE, count: 2},
      {material: Materials.SPECTRAL_HEART, count: 3},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_TRANSIENCE, count: 4},
      {material: Materials.SPECTRAL_HEART, count: 4},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_TRANSIENCE, count: 6},
      {material: Materials.SPECTRAL_HEART, count: 6},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_TRANSIENCE, count: 9},
      {material: Materials.SPECTRAL_HEART, count: 9},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_TRANSIENCE, count: 4},
      {material: Materials.SPECTRAL_NUCLEUS, count: 4},
      {material: BossSkillMaterial.HELLFIRE_BUTTERFLY, count: 1},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_TRANSIENCE, count: 6},
      {material: Materials.SPECTRAL_NUCLEUS, count: 6},
      {material: BossSkillMaterial.HELLFIRE_BUTTERFLY, count: 1},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_TRANSIENCE, count: 12},
      {material: Materials.SPECTRAL_NUCLEUS, count: 9},
      {material: BossSkillMaterial.HELLFIRE_BUTTERFLY, count: 2},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_TRANSIENCE, count: 16},
      {material: Materials.SPECTRAL_NUCLEUS, count: 12},
      {material: BossSkillMaterial.HELLFIRE_BUTTERFLY, count: 2},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Kokomi
