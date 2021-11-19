import {Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  Flower,
  Gem,
  Materials
} from '../materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Jean = {
  name: 'Jean',
  vision: Vision.ANEMO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ANEMO.VAYUDA_TURQUOISE_SLIVER,
      2: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT,
      3: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK,
      4: Gem.ANEMO.VAYUDA_TURQUOISE_GEMSTONE
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    bossMaterial: BossMaterials.HURRICANE_SEED,
    specialty: Flower.DANDELION_SEED
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_RESISTANCE,
      2: Books.GUIDE_TO_RESISTANCE,
      3: Books.PHILOSOPHIES_OF_RESISTANCE,
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    bossMaterial: BossSkillMaterial.DVALINS_PLUME
  })
}

export default Jean
