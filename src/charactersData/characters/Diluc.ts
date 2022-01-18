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

const Diluc = {
  name: Character.DILUC,
  vision: Vision.PYRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.PYRO.AGNIDUS_AGATE_SLIVER,
      2: Gem.PYRO.AGNIDUS_AGATE_FRAGMENT,
      3: Gem.PYRO.AGNIDUS_AGATE_CHUNK,
      4: Gem.PYRO.AGNIDUS_AGATE_GEMSTONE
    },
    materials: {
      1: Materials.RECRUITS_INSIGNIA,
      2: Materials.SERGEANTS_INSIGNIA,
      3: Materials.LIEUTENANTS_INSIGNIA,
    },
    bossMaterial: BossMaterials.EVERFLAME_SEED,
    specialty: Flower.SMALL_LAMP_GRASS
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_RESISTANCE,
      2: Books.GUIDE_TO_RESISTANCE,
      3: Books.PHILOSOPHIES_OF_RESISTANCE,
    },
    materials: {
      1: Materials.RECRUITS_INSIGNIA,
      2: Materials.SERGEANTS_INSIGNIA,
      3: Materials.LIEUTENANTS_INSIGNIA,
    },
    bossMaterial: BossSkillMaterial.DVALINS_PLUME
  }),
  possible_teams: [
    [Character.DILUC, Character.XINGQIU, Character.SUCROSE, Character.BENNETT],
    [Character.DILUC, Character.XINGQIU, Character.SUCROSE, Character.ZHONGLI],
    [Character.DILUC, Character.XINGQIU, Character.GANYU, Character.BENNETT],
    [Character.DILUC, Character.XINGQIU, Character.DIONA, Character.BENNETT],
    [Character.DILUC, Character.GANYU, Character.ROSARIA, Character.BENNETT],
    [Character.DILUC, Character.GANYU, Character.SUCROSE, Character.DIONA],
  ]
}

export default Diluc
