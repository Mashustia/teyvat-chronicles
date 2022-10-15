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

const Nilou = {
  name: Character.NILOU,
  vision: Vision.HYDRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.HYDRO.VARUNADA_LAZURITE_SLIVER,
      2: Gem.HYDRO.VARUNADA_LAZURITE_FRAGMENT,
      3: Gem.HYDRO.VARUNADA_LAZURITE_CHUNK,
      4: Gem.HYDRO.VARUNADA_LAZURITE_GEMSTONE
    },
    materials: {
      1: Materials.FUNGAL_SPORES,
      2: Materials.LUMINESCENT_POLLEN,
      3: Materials.CRYSTALLINE_CYST_DUST,
    },
    bossMaterial: BossMaterials.PERPETUAL_CALIBER,
    specialty: Flower.PADISARAH
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_PRAXIS,
      2: Books.GUIDE_TO_PRAXIS,
      3: Books.PHILOSOPHIES_OF_PRAXIS,
    },
    materials: {
      1: Materials.FUNGAL_SPORES,
      2: Materials.LUMINESCENT_POLLEN,
      3: Materials.CRYSTALLINE_CYST_DUST,
    },
    bossMaterial: BossSkillMaterial.TEARS_OF_THE_CALAMITOUS_GOD
  })
}

export default Nilou
