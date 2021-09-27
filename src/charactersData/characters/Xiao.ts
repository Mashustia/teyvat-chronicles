import {Vision} from '../../const/consts';
import {BossMaterials, Flower, Gem, Materials, MORA} from '../materialNames';

const Xiao = {
  name: 'Xiao',
  vision: Vision.ANEMO,
  ascension_materials: {
    20: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_SLIVER, count: 1 },
      { material: Flower.QINGXIN, count: 3 },
      { material: Materials.SLIME_CONDENSATE, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.JUVENILE_JADE, count: 2 },
      { material: Flower.QINGXIN, count: 10 },
      { material: Materials.SLIME_CONDENSATE, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.JUVENILE_JADE, count: 4 },
      { material: Flower.QINGXIN, count: 20 },
      { material: Materials.SLIME_SECRETIONS, count: 12 },
      { material: MORA, count: 20000 },
    ],
    60: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.JUVENILE_JADE, count: 8 },
      { material: Flower.QINGXIN, count: 30 },
      { material: Materials.SLIME_SECRETIONS, count: 18 },
      { material: MORA, count: 20000 },
    ],
    70: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.JUVENILE_JADE, count: 12 },
      { material: Flower.QINGXIN, count: 45 },
      { material: Materials.SLIME_CONCENTRATE, count: 12 },
      { material: MORA, count: 20000 },
    ],
    80: [
      { material: Gem.ANEMO.VAYUDA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.JUVENILE_JADE, count: 20 },
      { material: Flower.QINGXIN, count: 60 },
      { material: Materials.SLIME_CONCENTRATE, count: 24 },
      { material: MORA, count: 120000 },
    ],
  },
  rarity: 5
}

export default Xiao
