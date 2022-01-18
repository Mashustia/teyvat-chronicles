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

const Venti = {
  name: Character.VENTI,
  vision: Vision.ANEMO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ANEMO.VAYUDA_TURQUOISE_SLIVER,
      2: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT,
      3: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK,
      4: Gem.ANEMO.VAYUDA_TURQUOISE_GEMSTONE
    },
    materials: {
      1: Materials.SLIME_CONDENSATE,
      2: Materials.SLIME_SECRETIONS,
      3: Materials.SLIME_CONCENTRATE,
    },
    bossMaterial: BossMaterials.HURRICANE_SEED,
    specialty: Flower.CECILIA
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_BALLAD,
      2: Books.GUIDE_TO_BALLAD,
      3: Books.PHILOSOPHIES_OF_BALLAD,
    },
    materials: {
      1: Materials.SLIME_CONDENSATE,
      2: Materials.SLIME_SECRETIONS,
      3: Materials.SLIME_CONCENTRATE,
    },
    bossMaterial: BossSkillMaterial.TAIL_OF_BOREAS
  }),
  possible_teams: [
    [Character.GANYU, Character.VENTI, Character.MONA, Character.DIONA],
    [Character.KAMISATO_AYAKA, Character.VENTI, Character.MONA, Character.DIONA],
    [Character.KLEE, Character.VENTI, Character.MONA, Character.BENNETT],
    [Character.KEQING, Character.VENTI, Character.FISCHL, Character.BENNETT],
  ]
}

export default Venti
