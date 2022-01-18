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

const Sara = {
  name: Character.KUJOU_SARA,
  vision: Vision.ELECTRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ELECTRO.VAJRADA_AMETHYST_SLIVER,
      2: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT,
      3: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK,
      4: Gem.ELECTRO.VAJRADA_AMETHYST_GEMSTONE
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    bossMaterial: BossMaterials.STORM_BEADS,
    specialty: Flower.DENDROBIUM
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_ELEGANCE,
      2: Books.GUIDE_TO_ELEGANCE,
      3: Books.PHILOSOPHIES_OF_ELEGANCE,
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    bossMaterial: BossSkillMaterial.ASHEN_HEART
  }),
  possible_teams: [
    [Character.RAIDEN, Character.KUJOU_SARA, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.KEQING, Character.KUJOU_SARA, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.RAIDEN, Character.KUJOU_SARA, Character.FISCHL, Character.JEAN],
    [Character.BEIDOU, Character.KUJOU_SARA, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
  ]
}

export default Sara
