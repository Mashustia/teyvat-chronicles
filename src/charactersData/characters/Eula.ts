import {Character, Vision} from '../../const/consts';
import {
  BossMaterials,
  Gem,
  Materials,
  Flower,
  Books,
  BossSkillMaterial
} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Eula = {
  name: Character.EULA,
  vision: Vision.CRYO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.CRYO.SHIVADA_JADE_SLIVER,
      2: Gem.CRYO.SHIVADA_JADE_FRAGMENT,
      3: Gem.CRYO.SHIVADA_JADE_CHUNK,
      4: Gem.CRYO.SHIVADA_JADE_GEMSTONE
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    bossMaterial: BossMaterials.CRYSTALLINE_BLOOM,
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
    bossMaterial: BossSkillMaterial.DRAGON_LORDS_CROWN
  }),
  possible_teams: [
    [Character.EULA, Character.RAIDEN, Character.ROSARIA, Character.BENNETT],
    [Character.EULA, Character.FISCHL, Character.DIONA, Character.BENNETT],
    [Character.EULA, Character.RAIDEN, Character.ROSARIA, Character.ZHONGLI],
    [Character.EULA, Character.FISCHL, Character.BEIDOU, Character.DIONA],
  ]
}

export default Eula
