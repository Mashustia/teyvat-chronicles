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

const Mona = {
  name: Character.MONA,
  vision: Vision.HYDRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.HYDRO.VARUNADA_LAZURITE_SLIVER,
      2: Gem.HYDRO.VARUNADA_LAZURITE_FRAGMENT,
      3: Gem.HYDRO.VARUNADA_LAZURITE_CHUNK,
      4: Gem.HYDRO.VARUNADA_LAZURITE_GEMSTONE
    },
    materials: {
      1: Materials.WHOPPERFLOWER_NECTAR,
      2: Materials.SHIMMERING_NECTAR,
      3: Materials.ENERGY_NECTAR,
    },
    bossMaterial: BossMaterials.CLEANSING_HEART,
    specialty: Flower.PHILANEMO_MUSHROOM
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_RESISTANCE,
      2: Books.GUIDE_TO_RESISTANCE,
      3: Books.PHILOSOPHIES_OF_RESISTANCE,
    },
    materials: {
      1: Materials.WHOPPERFLOWER_NECTAR,
      2: Materials.SHIMMERING_NECTAR,
      3: Materials.ENERGY_NECTAR,
    },
    bossMaterial: BossSkillMaterial.RING_OF_BOREAS
  }),
  possible_teams: [
    [Character.MONA, Character.XIANGLING, Character.SUCROSE, Character.BENNETT],
    [Character.GANYU, Character.MONA, Character.VENTI, Character.DIONA],
    [Character.KLEE, Character.MONA, Character.VENTI, Character.BENNETT],
    [Character.MONA, Character.FISCHL, Character.XIANGLING, Character.JEAN],
    [Character.GANYU, Character.MONA, Character.XIANGLING, Character.BENNETT],
  ]
}

export default Mona
