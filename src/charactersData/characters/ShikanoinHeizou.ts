import {Character, Vision} from '../../const/consts';
import {
  BossMaterials,
  Gem,
  Materials,
  Books,
  BossSkillMaterial,
  OtherMaterials
} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const ShikanoinHeizou = {
  name: Character.SHIKANOIN_HEIZOU,
  vision: Vision.ANEMO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ANEMO.VAYUDA_TURQUOISE_SLIVER,
      2: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT,
      3: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK,
      4: Gem.ANEMO.VAYUDA_TURQUOISE_GEMSTONE
    },
    materials: {
      1: Materials.TREASURE_HOARDER_INSIGNIA,
      2: Materials.SILVER_RAVEN_INSIGNIA,
      3: Materials.GOLDEN_RAVEN_INSIGNIA,
    },
    bossMaterial: BossMaterials.RUNIC_FANG,
    specialty: OtherMaterials.ONIKABUTO
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_TRANSIENCE,
      2: Books.GUIDE_TO_TRANSIENCE,
      3: Books.PHILOSOPHIES_OF_TRANSIENCE,
    },
    materials: {
      1: Materials.TREASURE_HOARDER_INSIGNIA,
      2: Materials.SILVER_RAVEN_INSIGNIA,
      3: Materials.GOLDEN_RAVEN_INSIGNIA,
    },
    bossMaterial: BossSkillMaterial.THE_MEANING_OF_AENOS
  })
}

export default ShikanoinHeizou
