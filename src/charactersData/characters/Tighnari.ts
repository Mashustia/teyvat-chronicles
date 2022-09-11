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

const Tighnari = {
  name: Character.TIGHNARI,
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
    bossMaterial: BossMaterials.MAJESTIC_HOOKED_BEAK,
    specialty: Flower.NILOTPALA_LOTUS
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_ADMONITION,
      2: Books.GUIDE_TO_ADMONITION,
      3: Books.PHILOSOPHIES_OF_ADMONITION,
    },
    materials: {
      1: Materials.FUNGAL_SPORES,
      2: Materials.LUMINESCENT_POLLEN,
      3: Materials.CRYSTALLINE_CYST_DUST,
    },
    bossMaterial: BossSkillMaterial.THE_MEANING_OF_AENOS
  })
}

export default Tighnari
