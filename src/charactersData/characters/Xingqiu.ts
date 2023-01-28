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

const Xingqiu = {
  name: Character.XINGQIU,
  vision: Vision.HYDRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.HYDRO.VARUNADA_LAZURITE_SLIVER,
      2: Gem.HYDRO.VARUNADA_LAZURITE_FRAGMENT,
      3: Gem.HYDRO.VARUNADA_LAZURITE_CHUNK,
      4: Gem.HYDRO.VARUNADA_LAZURITE_GEMSTONE
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    bossMaterial: BossMaterials.CLEANSING_HEART,
    specialty: Flower.SILK_FLOWER
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_GOLD,
      2: Books.GUIDE_TO_GOLD,
      3: Books.PHILOSOPHIES_OF_GOLD,
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    bossMaterial: BossSkillMaterial.TAIL_OF_BOREAS
  }),
  possible_teams: [
    [Character.RAIDEN, Character.XIANGLING, Character.XINGQIU, Character.BENNETT],
    [Character.NAHIDA, Character.KUKI_SHINOBU, Character.XINGQIU, Character.ZHONGLI],
    [Character.NAHIDA, Character.THOMA, Character.XINGQIU, Character.KOKOMI],
    [Character.KLEE, Character.XINGQIU, Character.YELAN, Character.BENNETT],
    [Character.HU_TAO, Character.XINGQIU, Character.ZHONGLI, Character.YELAN],
    [Character.CHONGYUN, Character.XINGQIU, Character.XIANGLING, Character.BENNETT],
  ]
}

export default Xingqiu
