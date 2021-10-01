import {Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  CROWN_OF_INSIGHT,
  Flower,
  Gem,
  Materials,
  MORA
} from '../materialNames';
import {ICharacter} from '../types';

const Albedo: ICharacter = {
  name: 'Albedo',
  vision: Vision.GEO,
  ascension_materials: {
    20: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_SLIVER, count: 1 },
      { material: Flower.CECILIA, count: 3 },
      { material: Materials.DIVINING_SCROLL, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.BASALT_PILLAR, count: 2 },
      { material: Flower.CECILIA, count: 10 },
      { material: Materials.DIVINING_SCROLL, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.BASALT_PILLAR, count: 4 },
      { material: Flower.CECILIA, count: 20 },
      { material: Materials.SEALED_SCROLL, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.BASALT_PILLAR, count: 8 },
      { material: Flower.CECILIA, count: 30 },
      { material: Materials.SEALED_SCROLL, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.BASALT_PILLAR, count: 12 },
      { material: Flower.CECILIA, count: 45 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.GEO.PRITHIVA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.BASALT_PILLAR, count: 20 },
      { material: Flower.CECILIA, count: 60 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: {
    2: [
      { material: Books.TEACHINGS_OF_BALLAD, count: 3 },
      { material: Materials.DIVINING_SCROLL, count: 6 },
      { material: MORA, count: 12500 }
    ],
    3: [
      { material: Books.GUIDE_TO_BALLAD, count: 2 },
      { material: Materials.SEALED_SCROLL, count: 3 },
      { material: MORA, count: 17500 }
    ],
    4: [
      { material: Books.GUIDE_TO_BALLAD, count: 4 },
      { material: Materials.SEALED_SCROLL, count: 4 },
      { material: MORA, count: 25500 }
    ],
    5: [
      { material: Books.GUIDE_TO_BALLAD, count: 6 },
      { material: Materials.SEALED_SCROLL, count: 6 },
      { material: MORA, count: 30000 }
    ],
    6: [
      { material: Books.GUIDE_TO_BALLAD, count: 9 },
      { material: Materials.SEALED_SCROLL, count: 9 },
      { material: MORA, count: 37500 }
    ],
    7: [
      { material: Books.PHILOSOPHIES_OF_BALLAD, count: 4 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 4 },
      { material: BossSkillMaterial.TUSK_OF_MONOCEROS_CAELI, count: 1 },
      { material: MORA, count: 120000 }
    ],
    8: [
      { material: Books.PHILOSOPHIES_OF_BALLAD, count: 6 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 6 },
      { material: BossSkillMaterial.TUSK_OF_MONOCEROS_CAELI, count: 1 },
      { material: MORA, count: 260000 }
    ],
    9: [
      { material: Books.PHILOSOPHIES_OF_BALLAD, count: 9 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 12 },
      { material: BossSkillMaterial.TUSK_OF_MONOCEROS_CAELI, count: 2 },
      { material: MORA, count: 450000 }
    ],
    10: [
      { material: Books.PHILOSOPHIES_OF_BALLAD, count: 12 },
      { material: Materials.FORBIDDEN_CURSE_SCROLL, count: 16 },
      { material: BossSkillMaterial.TUSK_OF_MONOCEROS_CAELI, count: 2 },
      { material: CROWN_OF_INSIGHT, count: 1 },
      { material: MORA, count: 700000 }
    ],
  }
}

export default Albedo
