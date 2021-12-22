import {Character, Vision} from '../../const/consts';
import {
  BossMaterials,
  Gem,
  Materials,
  Flower,
  Books,
  BossSkillMaterial
} from '../materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Ganyu = {
  name: Character.GANYU,
  vision: Vision.CRYO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.CRYO.SHIVADA_JADE_SLIVER,
      2: Gem.CRYO.SHIVADA_JADE_FRAGMENT,
      3: Gem.CRYO.SHIVADA_JADE_CHUNK,
      4: Gem.CRYO.SHIVADA_JADE_GEMSTONE
    },
    materials: {
      1: Materials.WHOPPERFLOWER_NECTAR,
      2: Materials.SHIMMERING_NECTAR,
      3: Materials.ENERGY_NECTAR,
    },
    bossMaterial: BossMaterials.HOARFROST_CORE,
    specialty: Flower.QINGXIN
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_DILIGENCE,
      2: Books.GUIDE_TO_DILIGENCE,
      3: Books.PHILOSOPHIES_OF_DILIGENCE,
    },
    materials: {
      1: Materials.WHOPPERFLOWER_NECTAR,
      2: Materials.SHIMMERING_NECTAR,
      3: Materials.ENERGY_NECTAR,
    },
    bossMaterial: BossSkillMaterial.SHADOW_OF_THE_WARRIOR
  }),
  possible_teams: [
    [Character.GANYU, Character.MONA, Character.VENTI, Character.DIONA],
    [Character.GANYU, Character.MONA, Character.KAEDEHARA_KAZUHA, Character.DIONA],
    [Character.KAMISATO_AYAKA, Character.MONA, Character.VENTI, Character.GANYU],
    [Character.GANYU, Character.XIANGLING, Character.SUCROSE, Character.BENNETT],
    [Character.GANYU, Character.XIANGLING, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.HU_TAO, Character.ZHONGLI, Character.XINGQIU, Character.GANYU]
  ]
}

export default Ganyu
