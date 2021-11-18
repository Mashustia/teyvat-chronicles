import {Vision} from '../../const/consts';
import {BossMaterials, Rocks, Gem, Materials, MORA, Books, BossSkillMaterial} from '../materialNames';
import {fillTalentMaterials} from '../../utils/utils';

const Sayu = {
  name: 'Sayu',
  vision: Vision.ANEMO,
  ascension_materials: {
    20: [
      {material: Gem.ANEMO.VAYUDA_TURQUOISE_SLIVER, count: 1},
      {material: Rocks.CRYSTAL_MARROW, count: 3},
      {material: Materials.WHOPPERFLOWER_NECTAR, count: 3},
      {material: MORA, count: 20000},
    ],
    40: [
      {material: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT, count: 3},
      {material: BossMaterials.MARIONETTE_CORE, count: 2},
      {material: Rocks.CRYSTAL_MARROW, count: 10},
      {material: Materials.WHOPPERFLOWER_NECTAR, count: 15},
      {material: MORA, count: 40000},
    ],
    50: [
      {material: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT, count: 6},
      {material: BossMaterials.MARIONETTE_CORE, count: 4},
      {material: Rocks.CRYSTAL_MARROW, count: 20},
      {material: Materials.SHIMMERING_NECTAR, count: 12},
      {material: MORA, count: 60000},
    ],
    60: [
      {material: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK, count: 3},
      {material: BossMaterials.MARIONETTE_CORE, count: 8},
      {material: Rocks.CRYSTAL_MARROW, count: 30},
      {material: Materials.SHIMMERING_NECTAR, count: 18},
      {material: MORA, count: 80000},
    ],
    70: [
      {material: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK, count: 6},
      {material: BossMaterials.MARIONETTE_CORE, count: 12},
      {material: Rocks.CRYSTAL_MARROW, count: 45},
      {material: Materials.ENERGY_NECTAR, count: 12},
      {material: MORA, count: 100000},
    ],
    80: [
      {material: Gem.ANEMO.VAYUDA_TURQUOISE_GEMSTONE, count: 6},
      {material: BossMaterials.MARIONETTE_CORE, count: 20},
      {material: Rocks.CRYSTAL_MARROW, count: 60},
      {material: Materials.ENERGY_NECTAR, count: 24},
      {material: MORA, count: 120000},
    ]
  },
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_LIGHT,
      2: Books.GUIDE_TO_LIGHT,
      3: Books.PHILOSOPHIES_OF_LIGHT,
    },
    materials: {
      1: Materials.WHOPPERFLOWER_NECTAR,
      2: Materials.SHIMMERING_NECTAR,
      3: Materials.ENERGY_NECTAR,
    },
    bossMaterial: BossSkillMaterial.GILDED_SCALE
  })
}

export default Sayu
