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

const Wanderer = {
  name: Character.WANDERER,
  vision: Vision.ANEMO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ANEMO.VAYUDA_TURQUOISE_SLIVER,
      2: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT,
      3: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK,
      4: Gem.ANEMO.VAYUDA_TURQUOISE_GEMSTONE
    },
    materials: {
      1: Materials.OLD_HANDGUARD,
      2: Materials.KAGEUCHI_HANDGUARD,
      3: Materials.FAMED_HANDGUARD,
    },
    bossMaterial: BossMaterials.PERPETUAL_CALIBER,
    specialty: Flower.RUKKHASHAVA_MUSHROOMS
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_PRAXIS,
      2: Books.GUIDE_TO_PRAXIS,
      3: Books.PHILOSOPHIES_OF_PRAXIS,
    },
    materials: {
      1: Materials.OLD_HANDGUARD,
      2: Materials.KAGEUCHI_HANDGUARD,
      3: Materials.FAMED_HANDGUARD,
    },
    bossMaterial: BossSkillMaterial.DAKAS_BELL
  }),
  possible_teams: [
    [Character.WANDERER, Character.FARUZAN, Character.ZHONGLI, Character.BENNETT],
  ]
}

export default Wanderer
