import {Character, Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  Gem,
  Materials, OtherMaterials
} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Dehya = {
  name: Character.DEHYA,
  vision: Vision.PYRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.PYRO.AGNIDUS_AGATE_SLIVER,
      2: Gem.PYRO.AGNIDUS_AGATE_FRAGMENT,
      3: Gem.PYRO.AGNIDUS_AGATE_CHUNK,
      4: Gem.PYRO.AGNIDUS_AGATE_GEMSTONE
    },
    materials: {
      1: Materials.FADED_RED_SATIN,
      2: Materials.TRIMMED_RED_SILK,
      3: Materials.RICH_RED_BROCADE,
    },
    bossMaterial: BossMaterials.LIGHT_GUIDING_TETRAHEDRON,
    specialty: OtherMaterials.SAND_GREASE_PUPA
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_PRAXIS,
      2: Books.GUIDE_TO_PRAXIS,
      3: Books.PHILOSOPHIES_OF_PRAXIS,
    },
    materials: {
      1: Materials.FADED_RED_SATIN,
      2: Materials.TRIMMED_RED_SILK,
      3: Materials.RICH_RED_BROCADE,
    },
    bossMaterial: BossSkillMaterial.PUPPET_STRINGS
  }),
  possible_teams: [
    [Character.DEHYA, Character.XIANGLING, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.DEHYA, Character.ROSARIA, Character.KAEYA, Character.BENNETT],
  ]
}

export default Dehya
