import {Vision} from '../../const/consts';
import {BossMaterials, Flower, Gem, Materials, MORA} from '../materialNames';

const Kazuha = {
  name: 'Kazuha',
  vision: Vision.ANEMO,
  ascension_materials: {
    20: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_SLIVER, count: 1 },
      { material: Flower.SEA_GANODERMA, count: 3 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.MARIONETTE_CORE, count: 2 },
      { material: Flower.SEA_GANODERMA, count: 10 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.MARIONETTE_CORE, count: 4 },
      { material: Flower.SEA_GANODERMA, count: 20 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.MARIONETTE_CORE, count: 8 },
      { material: Flower.SEA_GANODERMA, count: 30 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.MARIONETTE_CORE, count: 12 },
      { material: Flower.SEA_GANODERMA, count: 45 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.MARIONETTE_CORE, count: 20 },
      { material: Flower.SEA_GANODERMA, count: 60 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5
}

export default Kazuha
