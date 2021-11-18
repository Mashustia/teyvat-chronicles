import {Vision} from '../../const/consts';
import {BossMaterials, Rocks, Gem, Materials, MORA, Books, BossSkillMaterial} from '../materialNames';
import {fillTalentMaterials} from '../../utils/utils';

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
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_TRANSIENCE,
      2: Books.GUIDE_TO_TRANSIENCE,
      3: Books.PHILOSOPHIES_OF_TRANSIENCE,
    },
    materials: {
      1: Materials.SPECTRAL_HUSK,
      2: Materials.SPECTRAL_HEART,
      3: Materials.SPECTRAL_NUCLEUS,
    },
    bossMaterial: BossSkillMaterial.HELLFIRE_BUTTERFLY
  })
}

export default Kokomi
