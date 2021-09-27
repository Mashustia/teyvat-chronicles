import {Vision} from '../../const/consts';
import {BossMaterials, Flower, Gem, Materials, MORA} from '../materialNames';

const Venti = {
  name: 'Venti',
  vision: Vision.ANEMO,
  ascension_materials: {
    20: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_SLIVER, count: 1 },
      { material: Flower.CECILIA, count: 3 },
      { material: Materials.SLIME_CONDENSATE, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.HURRICANE_SEED, count: 2 },
      { material: Flower.CECILIA, count: 10 },
      { material: Materials.SLIME_CONDENSATE, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.HURRICANE_SEED, count: 4 },
      { material: Flower.CECILIA, count: 20 },
      { material: Materials.STAINED_MASK, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.HURRICANE_SEED, count: 8 },
      { material: Flower.CECILIA, count: 30 },
      { material: Materials.STAINED_MASK, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.HURRICANE_SEED, count: 12 },
      { material: Flower.CECILIA, count: 45 },
      { material: Materials.SLIME_CONCENTRATE, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.HURRICANE_SEED, count: 20 },
      { material: Flower.CECILIA, count: 60 },
      { material: Materials.SLIME_CONCENTRATE, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5
}

export default Venti
