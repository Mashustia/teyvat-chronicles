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

const Dori = {
  name: Character.DORI,
  vision: Vision.ELECTRO,
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
    bossMaterial: BossMaterials.THUNDERCLAP_FRUITCORE,
    specialty: Flower.KALPALATA_LOTUS
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_INGENUITY,
      2: Books.GUIDE_TO_INGENUITY,
      3: Books.PHILOSOPHIES_OF_INGENUITY,
    },
    materials: {
      1: Materials.FADED_RED_SATIN,
      2: Materials.TRIMMED_RED_SILK,
      3: Materials.RICH_RED_BROCADE,
    },
    bossMaterial: BossSkillMaterial.BLOODJADE_BRANCH
  })
}

export default Dori
