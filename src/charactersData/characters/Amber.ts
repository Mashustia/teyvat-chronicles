import {Character, Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  Flower,
  Gem,
  Materials,
} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Amber = {
  name: Character.AMBER,
  vision: Vision.PYRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.PYRO.AGNIDUS_AGATE_SLIVER,
      2: Gem.PYRO.AGNIDUS_AGATE_FRAGMENT,
      3: Gem.PYRO.AGNIDUS_AGATE_CHUNK,
      4: Gem.PYRO.AGNIDUS_AGATE_GEMSTONE
    },
    materials: {
      1: Materials.FIRM_ARROWHEAD,
      2: Materials.SHARP_ARROWHEAD,
      3: Materials.WEATHERED_ARROWHEAD,
    },
    bossMaterial: BossMaterials.EVERFLAME_SEED,
    specialty: Flower.SMALL_LAMP_GRASS
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_FREEDOM,
      2: Books.GUIDE_TO_FREEDOM,
      3: Books.PHILOSOPHIES_OF_FREEDOM,
    },
    materials: {
      1: Materials.FIRM_ARROWHEAD,
      2: Materials.SHARP_ARROWHEAD,
      3: Materials.WEATHERED_ARROWHEAD,
    },
    bossMaterial: BossSkillMaterial.DVALINS_SIGH
  }),
  possible_teams: [
    [Character.YANFEI, Character.XINGQIU, Character.SUCROSE, Character.AMBER],
    [Character.HU_TAO, Character.ZHONGLI, Character.XINGQIU, Character.AMBER],
    [Character.GANYU, Character.AMBER, Character.MONA, Character.BENNETT],
  ]
}

export default Amber
