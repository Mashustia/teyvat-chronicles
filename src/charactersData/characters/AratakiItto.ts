import {Character, Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  Gem,
  Materials,
  OtherMaterials
} from '../materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const AratakiItto = {
  name: Character.ARATAKI_ITTO,
  vision: Vision.GEO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.GEO.PRITHIVA_TOPAZ_SLIVER,
      2: Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT,
      3: Gem.GEO.PRITHIVA_TOPAZ_CHUNK,
      4: Gem.GEO.PRITHIVA_TOPAZ_GEMSTONE
    },
    materials: {
      1: Materials.SLIME_CONDENSATE,
      2: Materials.SLIME_SECRETIONS,
      3: Materials.SLIME_CONCENTRATE,
    },
    bossMaterial: BossMaterials.RIFTBORN_REGALIA,
    specialty: OtherMaterials.ONIKABUTO
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_ELEGANCE,
      2: Books.GUIDE_TO_ELEGANCE,
      3: Books.PHILOSOPHIES_OF_ELEGANCE,
    },
    materials: {
      1: Materials.SLIME_CONDENSATE,
      2: Materials.SLIME_SECRETIONS,
      3: Materials.SLIME_CONCENTRATE,
    },
    bossMaterial: BossSkillMaterial.ASHEN_HEART
  })
}

export default AratakiItto
