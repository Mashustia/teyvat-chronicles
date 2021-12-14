import {Character, Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  Flower,
  Gem,
  Materials
} from '../materialNames';
import {ICharacter} from '../types';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Albedo: ICharacter = {
  name: Character.ALBEDO,
  vision: Vision.GEO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.GEO.PRITHIVA_TOPAZ_SLIVER,
      2: Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT,
      3: Gem.GEO.PRITHIVA_TOPAZ_CHUNK,
      4: Gem.GEO.PRITHIVA_TOPAZ_GEMSTONE
    },
    materials: {
      1: Materials.DIVINING_SCROLL,
      2: Materials.SEALED_SCROLL,
      3: Materials.FORBIDDEN_CURSE_SCROLL,
    },
    bossMaterial: BossMaterials.BASALT_PILLAR,
    specialty: Flower.CECILIA
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_BALLAD,
      2: Books.GUIDE_TO_BALLAD,
      3: Books.PHILOSOPHIES_OF_BALLAD,
    },
    materials: {
      1: Materials.DIVINING_SCROLL,
      2: Materials.SEALED_SCROLL,
      3: Materials.FORBIDDEN_CURSE_SCROLL,
    },
    bossMaterial: BossSkillMaterial.TUSK_OF_MONOCEROS_CAELI
  }),
  possible_teams: [
    [Character.XIAO, Character.ZHONGLI, Character.ALBEDO, Character.JEAN],
    [Character.HU_TAO, Character.ZHONGLI, Character.XINGQIU, Character.ALBEDO],
    [Character.NOELLE, Character.ALBEDO, Character.FISCHL, Character.BEIDOU],
    [Character.ALBEDO, Character.TRAVELER, Character.ZHONGLI, Character.BEIDOU]
  ]
}

export default Albedo
