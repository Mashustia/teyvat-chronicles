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

const Rosaria = {
  name: Character.ROSARIA,
  vision: Vision.CRYO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.CRYO.SHIVADA_JADE_SLIVER,
      2: Gem.CRYO.SHIVADA_JADE_FRAGMENT,
      3: Gem.CRYO.SHIVADA_JADE_CHUNK,
      4: Gem.CRYO.SHIVADA_JADE_GEMSTONE
    },
    materials: {
      1: Materials.RECRUITS_INSIGNIA,
      2: Materials.SERGEANTS_INSIGNIA,
      3: Materials.LIEUTENANTS_INSIGNIA,
    },
    bossMaterial: BossMaterials.HOARFROST_CORE,
    specialty: Flower.VALBERRY
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_BALLAD,
      2: Books.GUIDE_TO_BALLAD,
      3: Books.PHILOSOPHIES_OF_BALLAD,
    },
    materials: {
      1: Materials.RECRUITS_INSIGNIA,
      2: Materials.SERGEANTS_INSIGNIA,
      3: Materials.LIEUTENANTS_INSIGNIA,
    },
    bossMaterial: BossSkillMaterial.SHADOW_OF_THE_WARRIOR
  }),
  possible_teams: [
    [Character.HU_TAO, Character.XINGQIU, Character.ROSARIA, Character.ZHONGLI],
    [Character.EULA, Character.RAIDEN, Character.ROSARIA, Character.BENNETT],
    [Character.YANFEI, Character.XINGQIU, Character.ROSARIA, Character.BENNETT],
    [Character.KLEE, Character.GANYU, Character.ROSARIA, Character.ZHONGLI],
    [Character.RAZOR, Character.FISCHL, Character.ROSARIA, Character.BENNETT],
  ]
}

export default Rosaria
