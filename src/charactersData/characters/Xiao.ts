import {Character, Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  Flower,
  Gem,
  Materials
} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Xiao = {
  name: Character.XIAO,
  vision: Vision.ANEMO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ANEMO.VAYUDA_TURQUOISE_SLIVER,
      2: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT,
      3: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK,
      4: Gem.ANEMO.VAYUDA_TURQUOISE_GEMSTONE
    },
    materials: {
      1: Materials.SLIME_CONDENSATE,
      2: Materials.SLIME_SECRETIONS,
      3: Materials.SLIME_CONCENTRATE,
    },
    bossMaterial: BossMaterials.JUVENILE_JADE,
    specialty: Flower.QINGXIN
  }),
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
  }),
  possible_teams: [
    [Character.XIAO, Character.ZHONGLI, Character.ALBEDO, Character.JEAN],
    [Character.XIAO, Character.SUCROSE, Character.XIANGLING, Character.BENNETT],
    [Character.XIAO, Character.SUCROSE, Character.FISCHL, Character.BARBARA]
  ]
}

export default Xiao
