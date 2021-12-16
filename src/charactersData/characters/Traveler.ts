import {Character, Vision} from '../../const/consts';
import {
  Flower,
  TravelerAscensionMaterial,
  Materials,
} from '../materialNames';
import {fillAscensionMaterials} from '../../utils/utils';

const Traveler = {
  name: Character.TRAVELER,
  vision: Vision.NONE,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: TravelerAscensionMaterial.BRILLIANT_DIAMOND_SLIVER,
      2: TravelerAscensionMaterial.BRILLIANT_DIAMOND_FRAGMENT,
      3: TravelerAscensionMaterial.BRILLIANT_DIAMOND_CHUNK,
      4: TravelerAscensionMaterial.BRILLIANT_DIAMOND_GEMSTONE
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    specialty: Flower.WINDWHEEL_ASTER
  }),
  rarity: 5
}

export default Traveler
