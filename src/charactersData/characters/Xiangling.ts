import {Vision} from '../../const/consts';
import {BossMaterials, Flower, Gem, Materials, MORA} from '../materialNames';

const Xiangling = {
  name: 'Xiangling',
  vision: Vision.PYRO,
  ascension_materials: {
    20: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_SLIVER, count: 1 },
      { material: Flower.JUEYUN_CHILI, count: 3 },
      { material: Materials.SLIME_CONDENSATE, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.EVERFLAME_SEED, count: 2 },
      { material: Flower.JUEYUN_CHILI, count: 10 },
      { material: Materials.SLIME_CONDENSATE, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.EVERFLAME_SEED, count: 4 },
      { material: Flower.JUEYUN_CHILI, count: 20 },
      { material: Materials.SLIME_SECRETIONS, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.EVERFLAME_SEED, count: 8 },
      { material: Flower.JUEYUN_CHILI, count: 30 },
      { material: Materials.SLIME_SECRETIONS, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.EVERFLAME_SEED, count: 12 },
      { material: Flower.JUEYUN_CHILI, count: 45 },
      { material: Materials.SLIME_CONCENTRATE, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.EVERFLAME_SEED, count: 20 },
      { material: Flower.JUEYUN_CHILI, count: 60 },
      { material: Materials.SLIME_CONCENTRATE, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 4
}

export default Xiangling
