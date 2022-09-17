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

const Collei = {
  name: Character.COLLEI,
  vision: Vision.DENDRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.DENDRO.NAGADUS_EMERALD_SLIVER,
      2: Gem.DENDRO.NAGADUS_EMERALD_FRAGMENT,
      3: Gem.DENDRO.NAGADUS_EMERALD_CHUNK,
      4: Gem.DENDRO.NAGADUS_EMERALD_GEMSTONE
    },
    materials: {
      1: Materials.FIRM_ARROWHEAD,
      2: Materials.SHARP_ARROWHEAD,
      3: Materials.WEATHERED_ARROWHEAD,
    },
    bossMaterial: BossMaterials.MAJESTIC_HOOKED_BEAK,
    specialty: Flower.RUKKHASHAVA_MUSHROOMS
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_PRAXIS,
      2: Books.GUIDE_TO_PRAXIS,
      3: Books.PHILOSOPHIES_OF_PRAXIS,
    },
    materials: {
      1: Materials.FIRM_ARROWHEAD,
      2: Materials.SHARP_ARROWHEAD,
      3: Materials.WEATHERED_ARROWHEAD,
    },
    bossMaterial: BossSkillMaterial.TEARS_OF_THE_CALAMITOUS_GOD
  })
}

export default Collei
