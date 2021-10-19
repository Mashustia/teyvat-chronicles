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
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_RESISTANCE, count: 3},
      {material: Materials.WHOPPERFLOWER_NECTAR, count: 6},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_RESISTANCE, count: 2},
      {material: Materials.SHIMMERING_NECTAR, count: 3},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_RESISTANCE, count: 4},
      {material: Materials.SHIMMERING_NECTAR, count: 4},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_RESISTANCE, count: 6},
      {material: Materials.SHIMMERING_NECTAR, count: 6},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_RESISTANCE, count: 9},
      {material: Materials.SHIMMERING_NECTAR, count: 9},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_RESISTANCE, count: 4},
      {material: Materials.ENERGY_NECTAR, count: 4},
      {material: BossSkillMaterial.RING_OF_BOREAS, count: 1},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_RESISTANCE, count: 6},
      {material: Materials.ENERGY_NECTAR, count: 6},
      {material: BossSkillMaterial.RING_OF_BOREAS, count: 1},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_RESISTANCE, count: 12},
      {material: Materials.ENERGY_NECTAR, count: 9},
      {material: BossSkillMaterial.RING_OF_BOREAS, count: 2},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_RESISTANCE, count: 16},
      {material: Materials.ENERGY_NECTAR, count: 12},
      {material: BossSkillMaterial.RING_OF_BOREAS, count: 2},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Mona
