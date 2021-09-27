import {Vision} from '../../const/consts';
import {BossMaterials, Flower, Gem, Materials, MORA} from '../materialNames';

const Bennett = {
  name: 'Bennett',
  vision: Vision.PYRO,
  ascension_materials: {
    20: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_SLIVER, count: 1 },
      { material: Flower.WINDWHEEL_ASTER, count: 3 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.EVERFLAME_SEED, count: 2 },
      { material: Flower.WINDWHEEL_ASTER, count: 10 },
      { material: Materials.TREASURE_HOARDER_INSIGNIA, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.EVERFLAME_SEED, count: 4 },
      { material: Flower.WINDWHEEL_ASTER, count: 20 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 20000 },
    ],
    60: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.EVERFLAME_SEED, count: 8 },
      { material: Flower.WINDWHEEL_ASTER, count: 30 },
      { material: Materials.SILVER_RAVEN_INSIGNIA, count: 18 },
      { material: MORA, count: 20000 },
    ],
    70: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.EVERFLAME_SEED, count: 12 },
      { material: Flower.WINDWHEEL_ASTER, count: 45 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 12 },
      { material: MORA, count: 20000 },
    ],
    80: [
      { material: Gem.PYRO.AGNIDUS_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.EVERFLAME_SEED, count: 20 },
      { material: Flower.WINDWHEEL_ASTER, count: 60 },
      { material: Materials.GOLDEN_RAVEN_INSIGNIA, count: 24 },
      { material: MORA, count: 120000 },
    ],
  },
  rarity: 4
}

export default Bennett
