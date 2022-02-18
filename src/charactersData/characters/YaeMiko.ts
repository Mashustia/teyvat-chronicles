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

const YaeMiko = {
  name: Character.YAE_MIKO,
  vision: Vision.ELECTRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ELECTRO.VAJRADA_AMETHYST_SLIVER,
      2: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT,
      3: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK,
      4: Gem.ELECTRO.VAJRADA_AMETHYST_GEMSTONE
    },
    materials: {
      1: Materials.OLD_HANDGUARD,
      2: Materials.KAGEUCHI_HANDGUARD,
      3: Materials.FAMED_HANDGUARD,
    },
    bossMaterial: BossMaterials.DRAGONHEIRS_FALSE_FIN,
    specialty: Flower.SEA_GANODERMA
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_LIGHT,
      2: Books.GUIDE_TO_LIGHT,
      3: Books.PHILOSOPHIES_OF_LIGHT,
    },
    materials: {
      1: Materials.OLD_HANDGUARD,
      2: Materials.KAGEUCHI_HANDGUARD,
      3: Materials.FAMED_HANDGUARD,
    },
    bossMaterial: BossSkillMaterial.THE_MEANING_OF_AENOS
  }),
}

export default YaeMiko
