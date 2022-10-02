import {Character, Vision} from '../../const/consts';
import {
  BossMaterials,
  Gem,
  Materials,
  Books,
  BossSkillMaterial,
  Flower
} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Candace = {
  name: Character.CANDACE,
  vision: Vision.HYDRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ELECTRO.VAJRADA_AMETHYST_SLIVER,
      2: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT,
      3: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK,
      4: Gem.ELECTRO.VAJRADA_AMETHYST_GEMSTONE
    },
    materials: {
      1: Materials.FADED_RED_SATIN,
      2: Materials.TRIMMED_RED_SILK,
      3: Materials.RICH_RED_BROCADE,
    },
    bossMaterial: BossMaterials.LIGHT_GUIDING_TETRAHEDRON,
    specialty: Flower.REDCREST
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_ADMONITION,
      2: Books.GUIDE_TO_ADMONITION,
      3: Books.PHILOSOPHIES_OF_RESISTANCE,
    },
    materials: {
      1: Materials.FADED_RED_SATIN,
      2: Materials.TRIMMED_RED_SILK,
      3: Materials.RICH_RED_BROCADE,
    },
    bossMaterial: BossSkillMaterial.TEARS_OF_THE_CALAMITOUS_GOD
  })
}

export default Candace
