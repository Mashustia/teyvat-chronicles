import {Character, Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  Flower,
  Gem,
  Materials
} from '../materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Klee = {
  name: Character.KLEE,
  vision: Vision.PYRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.PYRO.AGNIDUS_AGATE_SLIVER,
      2: Gem.PYRO.AGNIDUS_AGATE_FRAGMENT,
      3: Gem.PYRO.AGNIDUS_AGATE_CHUNK,
      4: Gem.PYRO.AGNIDUS_AGATE_GEMSTONE
    },
    materials: {
      1: Materials.DIVINING_SCROLL,
      2: Materials.SEALED_SCROLL,
      3: Materials.FORBIDDEN_CURSE_SCROLL,
    },
    bossMaterial: BossMaterials.EVERFLAME_SEED,
    specialty: Flower.PHILANEMO_MUSHROOM
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_FREEDOM,
      2: Books.GUIDE_TO_FREEDOM,
      3: Books.PHILOSOPHIES_OF_FREEDOM,
    },
    materials: {
      1: Materials.DIVINING_SCROLL,
      2: Materials.SEALED_SCROLL,
      3: Materials.FORBIDDEN_CURSE_SCROLL,
    },
    bossMaterial: BossSkillMaterial.RING_OF_BOREAS
  }),
  possible_teams: [
    [Character.KLEE, Character.GANYU, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.KLEE, Character.GANYU, Character.SUCROSE, Character.BENNETT],
    [Character.KLEE, Character.XINGQIU, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.KLEE, Character.XINGQIU, Character.SUCROSE, Character.KOKOMI],
    [Character.KLEE, Character.XIANGLING, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.KLEE, Character.AMBER, Character.SUCROSE, Character.DIONA],
  ]
}

export default Klee
