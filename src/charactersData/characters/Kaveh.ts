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

const Kaveh = {
  name: Character.KAVEH,
  vision: Vision.DENDRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.DENDRO.NAGADUS_EMERALD_SLIVER,
      2: Gem.DENDRO.NAGADUS_EMERALD_FRAGMENT,
      3: Gem.DENDRO.NAGADUS_EMERALD_CHUNK,
      4: Gem.DENDRO.NAGADUS_EMERALD_GEMSTONE
    },
    materials: {
      1: Materials.FUNGAL_SPORES,
      2: Materials.LUMINESCENT_POLLEN,
      3: Materials.CRYSTALLINE_CYST_DUST,
    },
    bossMaterial: BossMaterials.QUELLED_CREEPER,
    specialty: Flower.MOURNING_FLOWER
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_INGENUITY,
      2: Books.GUIDE_TO_INGENUITY,
      3: Books.PHILOSOPHIES_OF_INGENUITY,
    },
    materials: {
      1: Materials.FUNGAL_SPORES,
      2: Materials.LUMINESCENT_POLLEN,
      3: Materials.CRYSTALLINE_CYST_DUST,
    },
    bossMaterial: BossSkillMaterial.PRIMORDIAL_GREENBLOOM
  }),
  possible_teams: [
    [Character.KAVEH, Character.NILOU, Character.XINGQIU, Character.BAIZHU],
  ]
}

export default Kaveh
