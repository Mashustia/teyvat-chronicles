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

const Raiden = {
  name: 'Raiden',
  vision: Vision.ELECTRO,
  ascension_materials: {
    20: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_SLIVER, count: 1 },
      { material: Flower.AMAKUMO_FRUIT, count: 3 },
      { material: Materials.OLD_HANDGUARD, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT, count: 3 },
      { material: BossMaterials.STORM_BEADS, count: 2 },
      { material: Flower.AMAKUMO_FRUIT, count: 10 },
      { material: Materials.OLD_HANDGUARD, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT, count: 6 },
      { material: BossMaterials.STORM_BEADS, count: 4 },
      { material: Flower.AMAKUMO_FRUIT, count: 20 },
      { material: Materials.KAGEUCHI_HANDGUARD, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK, count: 3 },
      { material: BossMaterials.STORM_BEADS, count: 8 },
      { material: Flower.AMAKUMO_FRUIT, count: 30 },
      { material: Materials.KAGEUCHI_HANDGUARD, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK, count: 6 },
      { material: BossMaterials.STORM_BEADS, count: 12 },
      { material: Flower.AMAKUMO_FRUIT, count: 45 },
      { material: Materials.FAMED_HANDGUARD, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_GEMSTONE, count: 6 },
      { material: BossMaterials.STORM_BEADS, count: 20 },
      { material: Flower.AMAKUMO_FRUIT, count: 60 },
      { material: Materials.FAMED_HANDGUARD, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_LIGHT,
      2: Books.GUIDE_TO_LIGHT,
      3: Books.PHILOSOPHIES_OF_LIGHT,
    },
    materials: {
      1: Materials.OLD_HANDGUARD,
      2: Materials.KAGEUCHI_HANDGUARD,
      3: Materials.FAMED_HANDGUARD,
    },
    bossMaterial: BossSkillMaterial.MOLTEN_MOMENT
  })
}

export default Raiden
