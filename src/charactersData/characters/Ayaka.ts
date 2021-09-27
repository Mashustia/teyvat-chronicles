import {Vision} from '../../const/consts';
import {BossMaterials, Gem, Materials, MORA, Flower} from '../materialNames';

const Ayaka = {
  name: 'Ayaka',
  vision: Vision.CRYO,
  ascension_materials: {
    20: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_SLIVER, count: 1 },
      { material: Flower.SAKURA_BLOOM, count: 3 },
      { material: Materials.OLD_HANDGUARD, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.PERPETUAL_HEART, count: 2 },
      { material: Flower.SAKURA_BLOOM, count: 10 },
      { material: Materials.OLD_HANDGUARD, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.PERPETUAL_HEART, count: 4 },
      { material: Flower.SAKURA_BLOOM, count: 20 },
      { material: Materials.KAGEUCHI_HANDGUARD, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.PERPETUAL_HEART, count: 8 },
      { material: Flower.SAKURA_BLOOM, count: 30 },
      { material: Materials.KAGEUCHI_HANDGUARD, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.PERPETUAL_HEART, count: 12 },
      { material: Flower.SAKURA_BLOOM, count: 45 },
      { material: Materials.FAMED_HANDGUARD, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.CRYO.SHIVADA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.PERPETUAL_HEART, count: 20 },
      { material: Flower.SAKURA_BLOOM, count: 60 },
      { material: Materials.FAMED_HANDGUARD, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5
}

export default Ayaka
