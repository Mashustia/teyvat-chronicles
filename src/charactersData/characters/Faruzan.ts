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

const Faruzan = {
  name: Character.FARUZAN,
  vision: Vision.ANEMO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ANEMO.VAYUDA_TURQUOISE_SLIVER,
      2: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT,
      3: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK,
      4: Gem.ANEMO.VAYUDA_TURQUOISE_GEMSTONE
    },
    materials: {
      1: Materials.FADED_RED_SATIN,
      2: Materials.TRIMMED_RED_SILK,
      3: Materials.RICH_RED_BROCADE,
    },
    bossMaterial: BossMaterials.LIGHT_GUIDING_TETRAHEDRON,
    specialty: Flower.HENNA_BERRY
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_ADMONITION,
      2: Books.GUIDE_TO_ADMONITION,
      3: Books.PHILOSOPHIES_OF_ADMONITION,
    },
    materials: {
      1: Materials.FADED_RED_SATIN,
      2: Materials.TRIMMED_RED_SILK,
      3: Materials.RICH_RED_BROCADE,
    },
    bossMaterial: BossSkillMaterial.PUPPET_STRINGS
  }),
  possible_teams: [
    [Character.XIAO, Character.FARUZAN, Character.ZHONGLI, Character.BENNETT],
    [Character.WANDERER, Character.FARUZAN, Character.ZHONGLI, Character.BENNETT],
  ]
}

export default Faruzan
