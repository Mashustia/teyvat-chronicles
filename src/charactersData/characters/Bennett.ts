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

const Bennett = {
  name: Character.BENNETT,
  vision: Vision.PYRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.PYRO.AGNIDUS_AGATE_SLIVER,
      2: Gem.PYRO.AGNIDUS_AGATE_FRAGMENT,
      3: Gem.PYRO.AGNIDUS_AGATE_CHUNK,
      4: Gem.PYRO.AGNIDUS_AGATE_GEMSTONE
    },
    materials: {
      1: Materials.TREASURE_HOARDER_INSIGNIA,
      2: Materials.SILVER_RAVEN_INSIGNIA,
      3: Materials.GOLDEN_RAVEN_INSIGNIA,
    },
    bossMaterial: BossMaterials.EVERFLAME_SEED,
    specialty: Flower.WINDWHEEL_ASTER
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_RESISTANCE,
      2: Books.GUIDE_TO_RESISTANCE,
      3: Books.PHILOSOPHIES_OF_RESISTANCE,
    },
    materials: {
      1: Materials.TREASURE_HOARDER_INSIGNIA,
      2: Materials.SILVER_RAVEN_INSIGNIA,
      3: Materials.GOLDEN_RAVEN_INSIGNIA,
    },
    bossMaterial: BossSkillMaterial.DVALINS_PLUME
  }),
  possible_teams: [
    [Character.XIANGLING, Character.XINGQIU, Character.CHONGYUN, Character.BENNETT],
    [Character.KLEE, Character.KAEDEHARA_KAZUHA, Character.XINGQIU, Character.BENNETT],
    [Character.GANYU, Character.KAEDEHARA_KAZUHA, Character.XIANGLING, Character.BENNETT],
    [Character.TARTAGLIA, Character.XIANGLING, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.EULA, Character.RAIDEN, Character.ROSARIA, Character.BENNETT],
    [Character.DILUC, Character.XINGQIU, Character.SUCROSE, Character.BENNETT],
    [Character.BENNETT, Character.XINGQIU, Character.SUCROSE, Character.THOMA],
  ]
}

export default Bennett
