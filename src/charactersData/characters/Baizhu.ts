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

const Baizhu = {
  name: Character.BAIZHU,
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
    bossMaterial: BossMaterials.EVERGLOOM_RING,
    specialty: Flower.VIOLETGRASS
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.PHILOSOPHIES_OF_GOLD,
      2: Books.GUIDE_TO_GOLD,
      3: Books.PHILOSOPHIES_OF_GOLD,
    },
    materials: {
      1: Materials.FUNGAL_SPORES,
      2: Materials.LUMINESCENT_POLLEN,
      3: Materials.CRYSTALLINE_CYST_DUST,
    },
    bossMaterial: BossSkillMaterial.WORLDSPAN_FERN
  }),
  possible_teams: [
    [Character.ALHAITHAM, Character.YELAN, Character.RAIDEN, Character.BAIZHU],
    [Character.YAE_MIKO, Character.NAHIDA, Character.FISCHL, Character.BAIZHU],
    [Character.NAHIDA, Character.NILOU, Character.XINGQIU, Character.BAIZHU],
    [Character.NAHIDA, Character.XINGQIU, Character.THOMA, Character.BAIZHU],
  ]
}

export default Baizhu
