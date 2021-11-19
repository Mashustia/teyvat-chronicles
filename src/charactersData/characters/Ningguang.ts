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

const Ningguang = {
  name: 'Ningguang',
  vision: Vision.GEO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.GEO.PRITHIVA_TOPAZ_SLIVER,
      2: Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT,
      3: Gem.GEO.PRITHIVA_TOPAZ_CHUNK,
      4: Gem.GEO.PRITHIVA_TOPAZ_GEMSTONE
    },
    materials: {
      1: Materials.RECRUITS_INSIGNIA,
      2: Materials.SERGEANTS_INSIGNIA,
      3: Materials.LIEUTENANTS_INSIGNIA,
    },
    bossMaterial: BossMaterials.BASALT_PILLAR,
    specialty: Flower.GLAZE_LILY
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_PROSPERITY,
      2: Books.GUIDE_TO_PROSPERITY,
      3: Books.PHILOSOPHIES_OF_PROSPERITY,
    },
    materials: {
      1: Materials.RECRUITS_INSIGNIA,
      2: Materials.SERGEANTS_INSIGNIA,
      3: Materials.LIEUTENANTS_INSIGNIA,
    },
    bossMaterial: BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS
  })
}

export default Ningguang
