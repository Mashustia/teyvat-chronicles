import {Vision} from '../../const/consts';
import {
  BossMaterials,
  Gem,
  Materials,
  Flower,
  Books,
  BossSkillMaterial,
} from '../materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Diona = {
  name: 'Diona',
  vision: Vision.CRYO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.CRYO.SHIVADA_JADE_SLIVER,
      2: Gem.CRYO.SHIVADA_JADE_FRAGMENT,
      3: Gem.CRYO.SHIVADA_JADE_CHUNK,
      4: Gem.CRYO.SHIVADA_JADE_GEMSTONE
    },
    materials: {
      1: Materials.FIRM_ARROWHEAD,
      2: Materials.SHARP_ARROWHEAD,
      3: Materials.WEATHERED_ARROWHEAD,
    },
    bossMaterial: BossMaterials.HOARFROST_CORE,
    specialty: Flower.CALLA_LILY
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
    bossMaterial: BossSkillMaterial.SHARD_OF_A_FOUL_LEGACY
  })
}

export default Diona
