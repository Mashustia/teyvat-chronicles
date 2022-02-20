import {Character, Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial, Flower,
  Gem,
  Materials
} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const YunJin = {
  name: Character.YUN_JIN,
  vision: Vision.GEO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.GEO.PRITHIVA_TOPAZ_SLIVER,
      2: Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT,
      3: Gem.GEO.PRITHIVA_TOPAZ_CHUNK,
      4: Gem.GEO.PRITHIVA_TOPAZ_GEMSTONE
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    bossMaterial: BossMaterials.RIFTBORN_REGALIA,
    specialty: Flower.GLAZE_LILY
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_DILIGENCE,
      2: Books.GUIDE_TO_DILIGENCE,
      3: Books.PHILOSOPHIES_OF_DILIGENCE,
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    bossMaterial: BossSkillMaterial.ASHEN_HEART
  }),
  possible_teams: [
    [Character.YOIMIYA, Character.YUN_JIN, Character.XINGQIU, Character.BENNETT],
    [Character.YOIMIYA, Character.YUN_JIN, Character.XINGQIU, Character.ZHONGLI],
    [Character.NOELLE, Character.YUN_JIN, Character.ALBEDO, Character.BENNETT],
    [Character.NOELLE, Character.YUN_JIN, Character.ALBEDO, Character.GOROU],
  ]
}

export default YunJin
