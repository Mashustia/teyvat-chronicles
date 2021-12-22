import {Character, Vision} from '../../const/consts';
import {
  BossMaterials,
  Gem,
  Materials,
  Flower,
  Books,
  BossSkillMaterial,
} from '../materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const KamisatoAyaka = {
  name: Character.KAMISATO_AYAKA,
  vision: Vision.CRYO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.CRYO.SHIVADA_JADE_SLIVER,
      2: Gem.CRYO.SHIVADA_JADE_FRAGMENT,
      3: Gem.CRYO.SHIVADA_JADE_CHUNK,
      4: Gem.CRYO.SHIVADA_JADE_GEMSTONE
    },
    materials: {
      1: Materials.OLD_HANDGUARD,
      2: Materials.KAGEUCHI_HANDGUARD,
      3: Materials.FAMED_HANDGUARD,
    },
    bossMaterial: BossMaterials.PERPETUAL_HEART,
    specialty: Flower.SAKURA_BLOOM
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_ELEGANCE,
      2: Books.GUIDE_TO_ELEGANCE,
      3: Books.PHILOSOPHIES_OF_ELEGANCE,
    },
    materials: {
      1: Materials.OLD_HANDGUARD,
      2: Materials.KAGEUCHI_HANDGUARD,
      3: Materials.FAMED_HANDGUARD,
    },
    bossMaterial: BossSkillMaterial.BLOODJADE_BRANCH
  }),
  possible_teams: [
    [Character.KAMISATO_AYAKA, Character.MONA, Character.VENTI, Character.GANYU],
    [Character.KAMISATO_AYAKA, Character.MONA, Character.VENTI, Character.DIONA],
    [Character.KAMISATO_AYAKA, Character.XINGQIU, Character.SUCROSE, Character.DIONA],
    [Character.KAMISATO_AYAKA, Character.ROSARIA, Character.SUCROSE, Character.BARBARA],
    [Character.KAMISATO_AYAKA, Character.XIANGLING, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.KAMISATO_AYAKA, Character.XIANGLING, Character.DIONA, Character.BENNETT],
  ]
}

export default KamisatoAyaka
