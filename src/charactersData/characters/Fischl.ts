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

const Fischl = {
  name: Character.FISCHL,
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
  }),
  possible_teams: [
    [Character.KEQING, Character.FISCHL, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.EULA, Character.FISCHL, Character.ROSARIA, Character.BENNETT],
    [Character.RAZOR, Character.FISCHL, Character.ROSARIA, Character.DIONA],
    [Character.ARATAKI_ITTO, Character.GOROU, Character.ZHONGLI, Character.FISCHL],
    [Character.FISCHL, Character.XIANGLING, Character.SUCROSE, Character.KOKOMI],
    [Character.YAE_MIKO, Character.FISCHL, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.YAE_MIKO, Character.FISCHL, Character.KAEDEHARA_KAZUHA, Character.KOKOMI],
    [Character.KAMISATO_AYATO, Character.BEIDOU, Character.FISCHL, Character.JEAN],
  ]
}

export default Fischl
