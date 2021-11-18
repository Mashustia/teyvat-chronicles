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

const Xiao = {
  name: 'Xiao',
  vision: Vision.ANEMO,
  ascension_materials: {
    20: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_SLIVER, count: 1 },
      { material: Flower.QINGXIN, count: 3 },
      { material: Materials.SLIME_CONDENSATE, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT, count: 3 },
      { material: BossMaterials.JUVENILE_JADE, count: 2 },
      { material: Flower.QINGXIN, count: 10 },
      { material: Materials.SLIME_CONDENSATE, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT, count: 6 },
      { material: BossMaterials.JUVENILE_JADE, count: 4 },
      { material: Flower.QINGXIN, count: 20 },
      { material: Materials.SLIME_SECRETIONS, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK, count: 3 },
      { material: BossMaterials.JUVENILE_JADE, count: 8 },
      { material: Flower.QINGXIN, count: 30 },
      { material: Materials.SLIME_SECRETIONS, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK, count: 6 },
      { material: BossMaterials.JUVENILE_JADE, count: 12 },
      { material: Flower.QINGXIN, count: 45 },
      { material: Materials.SLIME_CONCENTRATE, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_GEMSTONE, count: 6 },
      { material: BossMaterials.JUVENILE_JADE, count: 20 },
      { material: Flower.QINGXIN, count: 60 },
      { material: Materials.SLIME_CONCENTRATE, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_PROSPERITY,
      2: Books.GUIDE_TO_PROSPERITY,
      3: Books.PHILOSOPHIES_OF_PROSPERITY,
    },
    materials: {
      1: Materials.SLIME_CONDENSATE,
      2: Materials.SLIME_SECRETIONS,
      3: Materials.SLIME_CONCENTRATE,
    },
    bossMaterial: BossSkillMaterial.SHADOW_OF_THE_WARRIOR
  })
}

export default Xiao
