import {Character, Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  Flower,
  Gem,
  Materials
} from '../materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Sucrose = {
  name: Character.SUCROSE,
  vision: Vision.ANEMO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ANEMO.VAYUDA_TURQUOISE_SLIVER,
      2: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT,
      3: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK,
      4: Gem.ANEMO.VAYUDA_TURQUOISE_GEMSTONE
    },
    materials: {
      1: Materials.WHOPPERFLOWER_NECTAR,
      2: Materials.SHIMMERING_NECTAR,
      3: Materials.ENERGY_NECTAR,
    },
    bossMaterial: BossMaterials.HURRICANE_SEED,
    specialty: Flower.WINDWHEEL_ASTER
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_FREEDOM,
      2: Books.GUIDE_TO_FREEDOM,
      3: Books.PHILOSOPHIES_OF_FREEDOM,
    },
    materials: {
      1: Materials.WHOPPERFLOWER_NECTAR,
      2: Materials.SHIMMERING_NECTAR,
      3: Materials.ENERGY_NECTAR,
    },
    bossMaterial: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS
  }),
  possible_teams: [
    [Character.SUCROSE, Character.XINGQIU, Character.FISCHL, Character.BEIDOU],
    [Character.SUCROSE, Character.XIANGLING, Character.KOKOMI, Character.FISCHL],
    [Character.TARTAGLIA, Character.XIANGLING, Character.SUCROSE, Character.BENNETT],
    [Character.HU_TAO, Character.ZHONGLI, Character.XINGQIU, Character.SUCROSE],
    [Character.GANYU, Character.XIANGLING, Character.SUCROSE, Character.BENNETT],
    [Character.DILUC, Character.XINGQIU, Character.SUCROSE, Character.BENNETT],
  ]
}

export default Sucrose
