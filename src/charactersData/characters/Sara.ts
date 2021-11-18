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

const Sara = {
  name: 'Sara',
  vision: Vision.ELECTRO,
  ascension_materials: {
    20: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_SLIVER, count: 1 },
      { material: Flower.DENDROBIUM, count: 3 },
      { material: Materials.DAMAGED_MASK, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT, count: 3 },
      { material: BossMaterials.STORM_BEADS, count: 2 },
      { material: Flower.DENDROBIUM, count: 10 },
      { material: Materials.DAMAGED_MASK, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT, count: 6 },
      { material: BossMaterials.STORM_BEADS, count: 4 },
      { material: Flower.DENDROBIUM, count: 20 },
      { material: Materials.STAINED_MASK, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK, count: 3 },
      { material: BossMaterials.STORM_BEADS, count: 8 },
      { material: Flower.DENDROBIUM, count: 30 },
      { material: Materials.STAINED_MASK, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK, count: 6 },
      { material: BossMaterials.STORM_BEADS, count: 12 },
      { material: Flower.DENDROBIUM, count: 45 },
      { material: Materials.OMINOUS_MASK, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.ELECTRO.VAJRADA_AMETHYST_GEMSTONE, count: 6 },
      { material: BossMaterials.STORM_BEADS, count: 20 },
      { material: Flower.DENDROBIUM, count: 60 },
      { material: Materials.OMINOUS_MASK, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_ELEGANCE,
      2: Books.GUIDE_TO_ELEGANCE,
      3: Books.PHILOSOPHIES_OF_ELEGANCE,
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    bossMaterial: BossSkillMaterial.ASHEN_HEART
  })
}

export default Sara
