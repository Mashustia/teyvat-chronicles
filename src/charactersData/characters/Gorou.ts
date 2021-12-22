import {Character, Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  Gem,
  Materials, Rocks
} from '../materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Gorou = {
  name: Character.GOROU,
  vision: Vision.GEO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.GEO.PRITHIVA_TOPAZ_SLIVER,
      2: Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT,
      3: Gem.GEO.PRITHIVA_TOPAZ_CHUNK,
      4: Gem.GEO.PRITHIVA_TOPAZ_GEMSTONE
    },
    materials: {
      1: Materials.SPECTRAL_HUSK,
      2: Materials.SPECTRAL_HEART,
      3: Materials.SPECTRAL_NUCLEUS,
    },
    bossMaterial: BossMaterials.PERPETUAL_HEART,
    specialty: Rocks.SANGO_PEARL
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_LIGHT,
      2: Books.GUIDE_TO_LIGHT,
      3: Books.PHILOSOPHIES_OF_LIGHT,
    },
    materials: {
      1: Materials.SPECTRAL_HUSK,
      2: Materials.SPECTRAL_HEART,
      3: Materials.SPECTRAL_NUCLEUS,
    },
    bossMaterial: BossSkillMaterial.MOLTEN_MOMENT
  }),
  possible_teams: [
    [Character.ARATAKI_ITTO, Character.GOROU, Character.ALBEDO, Character.BENNETT],
    [Character.ARATAKI_ITTO, Character.GOROU, Character.ALBEDO, Character.ZHONGLI],
    [Character.ARATAKI_ITTO, Character.GOROU, Character.ZHONGLI, Character.BENNETT],
    [Character.NOELLE, Character.GOROU, Character.ALBEDO, Character.BENNETT],
    [Character.NOELLE, Character.GOROU, Character.ZHONGLI, Character.BENNETT],
  ]
}

export default Gorou
