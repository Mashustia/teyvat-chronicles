import {Character, Vision} from '../../const/consts';
import {Books, BossMaterials, BossSkillMaterial, Gem, Materials, Rocks} from '../materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Zhongli = {
  name: Character.ZHONGLI,
  vision: Vision.GEO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.GEO.PRITHIVA_TOPAZ_SLIVER,
      2: Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT,
      3: Gem.GEO.PRITHIVA_TOPAZ_CHUNK,
      4: Gem.GEO.PRITHIVA_TOPAZ_GEMSTONE
    },
    materials: {
      1: Materials.SLIME_CONDENSATE,
      2: Materials.SLIME_SECRETIONS,
      3: Materials.SLIME_CONCENTRATE,
    },
    bossMaterial: BossMaterials.BASALT_PILLAR,
    specialty: Rocks.COR_LAPIS
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_GOLD,
      2: Books.GUIDE_TO_GOLD,
      3: Books.PHILOSOPHIES_OF_GOLD,
    },
    materials: {
      1: Materials.SLIME_CONDENSATE,
      2: Materials.SLIME_SECRETIONS,
      3: Materials.SLIME_CONCENTRATE,
    },
    bossMaterial: BossSkillMaterial.TUSK_OF_MONOCEROS_CAELI
  }),
  possible_teams: [
    [Character.ZHONGLI, Character.ALBEDO, Character.XINGQIU, Character.FISCHL],
    [Character.ZHONGLI, Character.GANYU, Character.FISCHL, Character.BEIDOU],
    [Character.XIAO, Character.ZHONGLI, Character.SUCROSE, Character.BENNETT],
    [Character.HU_TAO, Character.XINGQIU, Character.ZHONGLI, Character.ALBEDO],
    [Character.ARATAKI_ITTO, Character.GOROU, Character.ALBEDO, Character.ZHONGLI],
  ]
}

export default Zhongli
