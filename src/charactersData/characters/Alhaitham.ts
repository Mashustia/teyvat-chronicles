import {Character, Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  Gem,
  Materials,
  OtherMaterials
} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Alhaitham = {
  name: Character.ALHAITHAM,
  vision: Vision.DENDRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.DENDRO.NAGADUS_EMERALD_SLIVER,
      2: Gem.DENDRO.NAGADUS_EMERALD_FRAGMENT,
      3: Gem.DENDRO.NAGADUS_EMERALD_CHUNK,
      4: Gem.DENDRO.NAGADUS_EMERALD_GEMSTONE
    },
    materials: {
      1: Materials.FADED_RED_SATIN,
      2: Materials.TRIMMED_RED_SILK,
      3: Materials.RICH_RED_BROCADE,
    },
    bossMaterial: BossMaterials.PSEUDO_STAMENS,
    specialty: OtherMaterials.SAND_GREASE_PUPA
  }),
  rarity: 5,
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
    bossMaterial: BossSkillMaterial.MIRROR_OF_MUSHIN
  }),
  possible_teams: [
    [Character.ALHAITHAM, Character.NAHIDA, Character.XINGQIU, Character.KUKI_SHINOBU],
  ]
}

export default Alhaitham
