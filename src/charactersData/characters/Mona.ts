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

const Mona = {
  name: 'Mona',
  vision: Vision.HYDRO,
  ascension_materials: {
    20: [
      { material: Gem.HYDRO.VARUNADA_LAZURITE_SLIVER, count: 1 },
      { material: Flower.PHILANEMO_MUSHROOM, count: 3 },
      { material: Materials.WHOPPERFLOWER_NECTAR, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.HYDRO.VARUNADA_LAZURITE_FRAGMENT, count: 3 },
      { material: BossMaterials.CLEANSING_HEART, count: 2 },
      { material: Flower.PHILANEMO_MUSHROOM, count: 10 },
      { material: Materials.WHOPPERFLOWER_NECTAR, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.HYDRO.VARUNADA_LAZURITE_FRAGMENT, count: 6 },
      { material: BossMaterials.CLEANSING_HEART, count: 4 },
      { material: Flower.PHILANEMO_MUSHROOM, count: 20 },
      { material: Materials.SHIMMERING_NECTAR, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.HYDRO.VARUNADA_LAZURITE_CHUNK, count: 3 },
      { material: BossMaterials.CLEANSING_HEART, count: 8 },
      { material: Flower.PHILANEMO_MUSHROOM, count: 30 },
      { material: Materials.SHIMMERING_NECTAR, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.HYDRO.VARUNADA_LAZURITE_CHUNK, count: 6 },
      { material: BossMaterials.CLEANSING_HEART, count: 12 },
      { material: Flower.PHILANEMO_MUSHROOM, count: 45 },
      { material: Materials.ENERGY_NECTAR, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.HYDRO.VARUNADA_LAZURITE_GEMSTONE, count: 6 },
      { material: BossMaterials.CLEANSING_HEART, count: 20 },
      { material: Flower.PHILANEMO_MUSHROOM, count: 60 },
      { material: Materials.ENERGY_NECTAR, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_RESISTANCE,
      2: Books.GUIDE_TO_RESISTANCE,
      3: Books.PHILOSOPHIES_OF_RESISTANCE,
    },
    materials: {
      1: Materials.WHOPPERFLOWER_NECTAR,
      2: Materials.SHIMMERING_NECTAR,
      3: Materials.ENERGY_NECTAR,
    },
    bossMaterial: BossSkillMaterial.RING_OF_BOREAS
  })
}

export default Mona
