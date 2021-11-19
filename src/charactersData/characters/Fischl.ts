import {Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  Flower,
  Gem,
  Materials
} from '../materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Fischl = {
  name: 'Fischl',
  vision: Vision.ELECTRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ELECTRO.VAJRADA_AMETHYST_SLIVER,
      2: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT,
      3: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK,
      4: Gem.ELECTRO.VAJRADA_AMETHYST_GEMSTONE
    },
    materials: {
      1: Materials.FIRM_ARROWHEAD,
      2: Materials.SHARP_ARROWHEAD,
      3: Materials.WEATHERED_ARROWHEAD,
    },
    bossMaterial: BossMaterials.LIGHTNING_PRISM,
    specialty: Flower.SMALL_LAMP_GRASS
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_BALLAD,
      2: Books.GUIDE_TO_BALLAD,
      3: Books.PHILOSOPHIES_OF_BALLAD,
    },
    materials: {
      1: Materials.FIRM_ARROWHEAD,
      2: Materials.SHARP_ARROWHEAD,
      3: Materials.WEATHERED_ARROWHEAD,
    },
    bossMaterial: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS
  })
}

export default Fischl
