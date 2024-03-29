import {Character, Vision} from '../../const/consts';
import {
  BossMaterials,
  Gem,
  Materials,
  Flower,
  Books,
  BossSkillMaterial
} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Kaeya = {
  name: Character.KAEYA,
  vision: Vision.CRYO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.CRYO.SHIVADA_JADE_SLIVER,
      2: Gem.CRYO.SHIVADA_JADE_FRAGMENT,
      3: Gem.CRYO.SHIVADA_JADE_CHUNK,
      4: Gem.CRYO.SHIVADA_JADE_GEMSTONE
    },
    materials: {
      1: Materials.TREASURE_HOARDER_INSIGNIA,
      2: Materials.SILVER_RAVEN_INSIGNIA,
      3: Materials.GOLDEN_RAVEN_INSIGNIA,
    },
    bossMaterial: BossMaterials.HOARFROST_CORE,
    specialty: Flower.CALLA_LILY
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_BALLAD,
      2: Books.GUIDE_TO_BALLAD,
      3: Books.PHILOSOPHIES_OF_BALLAD,
    },
    materials: {
      1: Materials.TREASURE_HOARDER_INSIGNIA,
      2: Materials.SILVER_RAVEN_INSIGNIA,
      3: Materials.GOLDEN_RAVEN_INSIGNIA,
    },
    bossMaterial: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS
  }),
  possible_teams: [
    [Character.KAEYA, Character.CHONGYUN, Character.XINGQIU, Character.JEAN],
    [Character.KAEYA, Character.ROSARIA, Character.XIANGLING, Character.BENNETT],
    [Character.KAEYA, Character.XINGQIU, Character.FISCHL, Character.JEAN],
    [Character.HU_TAO, Character.XINGQIU, Character.KAEYA, Character.ZHONGLI],
    [Character.RAZOR, Character.FISCHL, Character.KAEYA, Character.DIONA],
    [Character.KAMISATO_AYAKA, Character.KAEYA, Character.XINGQIU, Character.JEAN],
  ]
}

export default Kaeya
