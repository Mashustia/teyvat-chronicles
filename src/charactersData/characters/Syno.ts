import {Character, Vision} from '../../const/consts';
import {
  BossMaterials,
  Gem,
  Materials,
  Books,
  BossSkillMaterial,
  OtherMaterials
} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Syno = {
  name: Character.SYNO,
  vision: Vision.ELECTRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ELECTRO.VAJRADA_AMETHYST_SLIVER,
      2: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT,
      3: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK,
      4: Gem.ELECTRO.VAJRADA_AMETHYST_GEMSTONE
    },
    materials: {
      1: Materials.DIVINING_SCROLL,
      2: Materials.SEALED_SCROLL,
      3: Materials.FORBIDDEN_CURSE_SCROLL,
    },
    bossMaterial: BossMaterials.THUNDERCLAP_FRUITCORE,
    specialty: OtherMaterials.SCARAB
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_ADMONITION,
      2: Books.GUIDE_TO_ADMONITION,
      3: Books.PHILOSOPHIES_OF_RESISTANCE,
    },
    materials: {
      1: Materials.DIVINING_SCROLL,
      2: Materials.SEALED_SCROLL,
      3: Materials.FORBIDDEN_CURSE_SCROLL,
    },
    bossMaterial: BossSkillMaterial.MUDRA_OF_THE_MALEFIC_GENERAL
  })
}

export default Syno
