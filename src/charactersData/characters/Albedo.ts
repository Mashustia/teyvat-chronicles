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
import {ICharacter} from '../types';
import {fillTalentMaterials} from '../../utils/utils';

const Albedo: ICharacter = {
  name: 'Albedo',
  vision: Vision.GEO,
  ascension_materials: {
    20: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_SLIVER, count: 1, sorting_index: 1 },
      { material: Flower.CECILIA, count: 3 },
      { material: Materials.DIVINING_SCROLL, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT, count: 3, sorting_index: 2 },
      { material: BossMaterials.BASALT_PILLAR, count: 2 },
      { material: Flower.CECILIA, count: 10 },
      { material: Materials.DIVINING_SCROLL, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT, count: 6, sorting_index: 2 },
      { material: BossMaterials.BASALT_PILLAR, count: 4 },
      { material: Flower.CECILIA, count: 20 },
      { material: Materials.SEALED_SCROLL, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_CHUNK, count: 3, sorting_index: 3 },
      { material: BossMaterials.BASALT_PILLAR, count: 8 },
      { material: Flower.CECILIA, count: 30 },
      { material: Materials.SEALED_SCROLL, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_CHUNK, count: 6, sorting_index: 3 },
      { material: BossMaterials.BASALT_PILLAR, count: 12 },
      { material: Flower.CECILIA, count: 45 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_GEMSTONE, count: 6, sorting_index: 4 },
      { material: BossMaterials.BASALT_PILLAR, count: 20 },
      { material: Flower.CECILIA, count: 60 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_BALLAD,
      2: Books.GUIDE_TO_BALLAD,
      3: Books.PHILOSOPHIES_OF_BALLAD,
    },
    materials: {
      1: Materials.DIVINING_SCROLL,
      2: Materials.SEALED_SCROLL,
      3: Materials.FORBIDDEN_CURSE_SCROLL,
    },
    bossMaterial: BossSkillMaterial.TUSK_OF_MONOCEROS_CAELI
  })
}

export default Albedo
