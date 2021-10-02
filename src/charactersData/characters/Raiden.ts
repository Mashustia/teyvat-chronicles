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

// TODO: добавить картинку для BossMaterials.STORM_BEADS
const Raiden = {
  name: 'Raiden',
  vision: Vision.ELECTRO,
  ascension_materials: {
    20: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_SLIVER, count: 1 },
      { material: Flower.AMAKUMO_FRUIT, count: 3 },
      { material: Materials.OLD_HANDGUARD, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.STORM_BEADS, count: 2 },
      { material: Flower.AMAKUMO_FRUIT, count: 10 },
      { material: Materials.OLD_HANDGUARD, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.STORM_BEADS, count: 4 },
      { material: Flower.AMAKUMO_FRUIT, count: 20 },
      { material: Materials.KAGEUCHI_HANDGUARD, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.STORM_BEADS, count: 8 },
      { material: Flower.AMAKUMO_FRUIT, count: 30 },
      { material: Materials.KAGEUCHI_HANDGUARD, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.STORM_BEADS, count: 12 },
      { material: Flower.AMAKUMO_FRUIT, count: 45 },
      { material: Materials.FAMED_HANDGUARD, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.ELECTRO.VAJRADA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.STORM_BEADS, count: 20 },
      { material: Flower.AMAKUMO_FRUIT, count: 60 },
      { material: Materials.FAMED_HANDGUARD, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_LIGHT, count: 3},
      {material: Materials.OLD_HANDGUARD, count: 6},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_LIGHT, count: 2},
      {material: Materials.KAGEUCHI_HANDGUARD, count: 3},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_LIGHT, count: 4},
      {material: Materials.KAGEUCHI_HANDGUARD, count: 4},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_LIGHT, count: 6},
      {material: Materials.KAGEUCHI_HANDGUARD, count: 6},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_LIGHT, count: 9},
      {material: Materials.KAGEUCHI_HANDGUARD, count: 9},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_LIGHT, count: 4},
      {material: Materials.FAMED_HANDGUARD, count: 4},
      {material: BossSkillMaterial.MOLTEN_MOMENT, count: 1},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_LIGHT, count: 6},
      {material: Materials.FAMED_HANDGUARD, count: 6},
      {material: BossSkillMaterial.MOLTEN_MOMENT, count: 1},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_LIGHT, count: 12},
      {material: Materials.FAMED_HANDGUARD, count: 9},
      {material: BossSkillMaterial.MOLTEN_MOMENT, count: 2},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_LIGHT, count: 16},
      {material: Materials.FAMED_HANDGUARD, count: 12},
      {material: BossSkillMaterial.MOLTEN_MOMENT, count: 2},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Raiden
